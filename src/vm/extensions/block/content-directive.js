import {costumeToDataURL, addImageAsCostume} from './costume-util.js';
import {DEBUG} from './dev-util.js';

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
 * Parse content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {string[]} - content part directives
 */
export const parseContentPartsText = function (contentPartsText) {
    const regex =
    /(.*?)(\[costume[^[\]]*\]|\[snapshot\]|\[var[^[\]]*\]|\[list[^[\]]*\]|\[backdrop[^[\]]*\]|\[data[^[\]]*\])|(.+)/gi;
    const contentPartDirectives = [];
    let match;
    while ((match = regex.exec(contentPartsText)) !== null) {
        if (match[1]) contentPartDirectives.push(match[1]);
        if (match[2]) contentPartDirectives.push(match[2]);
        if (match[3]) contentPartDirectives.push(match[3]);
    }
    return contentPartDirectives;
};

/**
 * Read a content part directive.
 * @param {string} directive - content part directive
 * @returns {object} - parsed content part directive
 */
export const parseContentPartDirective = function (directive) {
    let directiveType = '';
    let resourceName = '';
    let resourceArgs = [];
    if (directive.includes(':')) {
        const parts = directive.slice(1, -1).split(':');
        if (parts[0]) directiveType = parts[0];
        if (parts[1]) resourceName = parts[1];
        if (parts.length > 2) {
            resourceArgs = parts.slice(2);
        }
    } else {
        directiveType = directive.slice(1, -1);
    }
    return {directiveType, resourceName, resourceArgs};
};

/**
 * Interpret content part directives.
 * @param {string[]} contentPartDirectives - content part directives
 * @param {Target} requester - target which is requesting to AI
 * @param {Runtime} runtime - runtime
 * @returns {Promise<object[]>} - a Promise that resolves content parts
 */
export const interpretContentPartDirectives = function (contentPartDirectives, requester, runtime) {
    const contentPartPromises = contentPartDirectives.map(async directive => {
        if (!directive.startsWith('[')) {
            return {type: 'text', data: directive};
        }
        const {directiveType, resourceName, resourceArgs} = parseContentPartDirective(directive);
        let contentPartHolder = requester;
        if (directiveType === 'backdrop') {
            contentPartHolder = runtime.getTargetForStage();
        }
        if (!contentPartHolder) {
            // sprite not found
            return {type: 'text', data: directive};
        }
        if (directiveType === 'costume' || directiveType === 'backdrop') {
            const costumeArray = contentPartHolder.getCostumes();
            let costume = costumeArray.find(c => c.name === resourceName);
            if (!costume) {
                const costumeNumber = parseInt(convertToHalfWidthInt(resourceName), 10);
                if (!isNaN(costumeNumber) && costumeNumber !== 0) {
                    const costumeIndex = convertToZeroBaseIndex(costumeNumber, costumeArray.length);
                    if (typeof costumeIndex !== 'undefined') {
                        costume = costumeArray[costumeIndex];
                    }
                }
            }
            if (!costume) {
                costume = costumeArray[contentPartHolder.currentCostume];
            }
            const imageDataURL = await costumeToDataURL(costume);
            return {type: 'dataURL', data: imageDataURL};
        } else if (directiveType === 'snapshot') {
            const stage = runtime.getTargetForStage();
            return new Promise(resolve => {
                stage.renderer.requestSnapshot(imageDataURL => {
                    if (DEBUG) {
                        addImageAsCostume(
                            requester,
                            imageDataURL,
                            runtime,
                            runtime.vm,
                            'snapshot'
                        ).catch(e => {
                            console.error(e);
                        });
                    }
                    resolve({type: 'dataURL', data: imageDataURL});
                });
            });
        } else if (directiveType === 'var') {
            let variable = contentPartHolder.lookupVariableByNameAndType(resourceName);
            if (!variable) {
                const defaultVarName = contentPartHolder.getAllVariableNamesInScopeByType()[0];
                variable = contentPartHolder.lookupVariableByNameAndType(defaultVarName);
            }
            const varValue = variable ? variable.value.toString() : '';
            if (varValue.startsWith('data:')) {
                return {type: 'dataURL', data: varValue};
            }
            return {type: 'text', data: varValue};
        } else if (directiveType === 'list') {
            let listIndex = parseInt(resourceArgs[0], 10);
            if (listIndex === 0 || isNaN(listIndex)) {
                return null;
            }
            const list = contentPartHolder.lookupVariableByNameAndType(resourceName, 'list');
            if (!list || list.length === 0) {
                return null;
            }
            listIndex = convertToZeroBaseIndex(listIndex, list.length);
            if (typeof listIndex === 'undefined') {
                return null;
            }
            const listValue = list[listIndex].value.toString();
            if (listValue.startsWith('data:')) {
                return {type: 'dataURL', data: listValue};
            }
            return {type: 'text', data: listValue};
        } else if (directiveType === 'data') {
            return {type: 'dataURL', data: `${directiveType}:${resourceName}`};
        }
        // unknown directive type
        return {type: 'text', data: directive};
    });
    return Promise.all(contentPartPromises)
        .then(parts => parts.filter(p => p !== null));
};

/**
 * Interpret content parts text.
 * @param {string} contentPartsText - content parts text
 * @param {Target} requester - target which is requesting to AI
 * @param {Runtime} runtime - runtime
 * @returns {Promise<object[]>} - a Promise that resolves content parts
 */
export const interpretContentPartsText = async function (contentPartsText, requester, runtime) {
    const contentPartDirectives = parseContentPartsText(contentPartsText);
    const contentParts = await interpretContentPartDirectives(contentPartDirectives, requester, runtime);
    return contentParts;
};
