/**
 * This module provides a set of utility functions for working with costumes.
 * @module costume-util
 */

/**
 * Convert full-width characters to half-width characters.
 * @param {string} str - string to convert
 * @returns {string} - converted string
 */
const convertToHalfWidthInt = function (str) {
    return str.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
        .replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
};

/**
 * Convert array index from one-base to zero-base.
 * If index is negative, it is converted from the end of the array.
 * @param {number} index - one-base array index
 * @param {number} length - array length
 * @returns {number | undefined} - converted array index
 */
const convertToZeroBaseIndex = function (index, length) {
    if (length === 0) {
        return;
    }
    if (index > length) {
        return;
    }
    if (index < 0) {
        index = length + index;
        if (index < 0) {
            return;
        }
    } else {
        index--;
    }
    return index;
};

/**
 * Convert costume to dataURL.
 * @param {!object} costume - costume
 * @param {string?} format - format of the dataURL default is 'png'
 * @returns {Promise<string>} - a Promise that resolves when the image is converted
 */
export const costumeToDataURL = function (costume, format = 'png') {
    if (costume.asset.dataFormat === format) {
        return Promise.resolve(costume.asset.encodeDataURI());
    }
    const blob = new Blob([costume.asset.data], {type: costume.asset.assetType.contentType});
    const imageElement = new Image();
    imageElement.src = URL.createObjectURL(blob);
    return new Promise(resolve => {
        imageElement.onload = e => {
            URL.revokeObjectURL(imageElement.src);
            const img = e.target;
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const imageData = canvas.toDataURL(`image/${format}`);
            resolve(imageData);
        };
    });
};


/**
 * Get costume by name or number.
 * If costumeName was not found and it is a number, it is treated as a one-base index.
 * Then that index was a negative number, it is treated as a zero-base index from the end of the costume list.
 * @param {!Target} target - target to get costume
 * @param {string} costumeName - name or number of the costume
 * @returns {object | undefined} - costume
 */
export const getCostumeByNameOrNumber = function (target, costumeName) {
    const costumeArray = target.getCostumes();
    let costume = costumeArray.find(c => c.name === costumeName);
    if (!costume) {
        const costumeNumber = parseInt(convertToHalfWidthInt(costumeName), 10);
        if (!isNaN(costumeNumber) && costumeNumber !== 0) {
            const costumeIndex = convertToZeroBaseIndex(costumeNumber, costumeArray.length);
            if (typeof costumeIndex !== 'undefined') {
                costume = costumeArray[costumeIndex];
            }
        }
    }
    return costume;
};

/**
 * Add image as a costume.
 * @param {Target} target - target to add costume
 * @param {string} dataURL - image data
 * @param {Runtime} runtime - runtime
 * @param {string} imageName - name of the costume
 * @param {VirtualMachine} vm - virtual machine
 * @returns {Promise} - a Promise that resolves when the image is added
*/
export const addImageAsCostume = function (target, dataURL, runtime, imageName = 'costume', vm) {
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    let assetType;
    let dataFormat;
    if (mimeString === 'image/svg+xml') {
        assetType = runtime.storage.AssetType.ImageVector;
        dataFormat = runtime.storage.DataFormat.SVG;
    } else if (mimeString === 'image/jpeg') {
        assetType = runtime.storage.AssetType.ImageBitmap;
        dataFormat = runtime.storage.DataFormat.JPG;
    } else if (mimeString === 'image/png') {
        assetType = runtime.storage.AssetType.ImageBitmap;
        dataFormat = runtime.storage.DataFormat.PNG;
    } else {
        return Promise.reject(new Error(`Unsupported image type: ${mimeString}`));
    }
    // Convert base64 to raw binary data held in a dataURL.
    // @see https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
    let byteString;
    if (dataURL.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURL.split(',')[1]);
    } else {
        byteString = decodeURI(dataURL.split(',')[1]);
    }
    const data = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        data[i] = byteString.charCodeAt(i);
    }
    const asset = runtime.storage.createAsset(
        assetType,
        dataFormat,
        data,
        null,
        true // generate md5
    );
    const newCostume = {
        name: imageName,
        dataFormat: dataFormat,
        asset: asset,
        md5: `${asset.assetId}.${dataFormat}`,
        assetId: asset.assetId
    };
    const currentCostumeIndex = target.currentCostume;
    if (vm) {
        return vm.addCostume(newCostume.md5, newCostume, target.id)
            .then(() => {
                target.setCostume(currentCostumeIndex);
                runtime.emitProjectChanged();
            });
    }
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = function () {
            resolve(image);
            image.onload = null;
            image.onerror = null;
        };
        image.onerror = function () {
            reject(new Error('Costume load failed. Asset could not be read.'));
            image.onload = null;
            image.onerror = null;
        };
        image.src = asset.encodeDataURI();
    })
        .then(imageElem => {
            const canvas = document.createElement('canvas');
            canvas.width = imageElem.width;
            canvas.height = imageElem.height;
            const context = canvas.getContext('2d');
            context.drawImage(imageElem, 0, 0);
            newCostume.skinId = runtime.renderer.createBitmapSkin(canvas, newCostume.bitmapResolution);
            const renderSize = runtime.renderer.getSkinSize(newCostume.skinId);
            // Actual size, since all bitmaps are resolution 2
            newCostume.size = [renderSize[0] * 2, renderSize[1] * 2];
            const rotationCenter = runtime.renderer.getSkinRotationCenter(newCostume.skinId);
            // Actual rotation center, since all bitmaps are resolution 2
            newCostume.rotationCenterX = rotationCenter[0] * 2;
            newCostume.rotationCenterY = rotationCenter[1] * 2;
            newCostume.bitmapResolution = 2;
        })
        .then(() => {
            target.addCostume(newCostume);
            target.setCostume(currentCostumeIndex);
            runtime.emitProjectChanged();
        });
};
