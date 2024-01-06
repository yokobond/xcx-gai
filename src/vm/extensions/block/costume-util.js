/**
 * Convert costume to dataURL.
 * @param {object} costume - costume
 * @returns {Promise<string>} - a Promise that resolves when the image is converted
 */
export const costumeToDataURL = costume => {
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
            const imageData = canvas.toDataURL('image/png');
            resolve(imageData);
        };
    });
};

/**
 * Add image as a costume.
 * @param {Target} target - target to add costume
 * @param {string} dataURL - image data
 * @param {Runtime} runtime - runtime
 * @param {VirtualMachine} vm - virtual machine
 * @param {string} imageName - name of the costume
 * @returns {Promise} - a Promise that resolves when the image is added
*/
export const addImageAsCostume = (target, dataURL, runtime, vm, imageName = 'costume') => {
    if (!vm) {
        return Promise.reject(new Error('Virtual Machine is needed to add costume'));
    }
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
    return vm.addCostume(newCostume.md5, newCostume, target.id)
        .then(() => {
            target.setCostume(currentCostumeIndex);
            runtime.emitProjectChanged();
        });
};
