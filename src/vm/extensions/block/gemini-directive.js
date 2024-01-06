import {costumeToDataURL, addImageAsCostume} from './costume-util.js';
import {DEBUG} from './dev-util.js';

/**
 * Convert full-width characters to half-width characters.
 * @param {string} str - string to convert
 * @returns {string} - converted string
 */
const convertToHalfWidth = function (str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
};

/**
 * Parse content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {string[]} - content part directives
 */
export const parseContentPartsText = function (contentPartsText) {
    const regex = /(.*?)(\[costume[^[\]]*\]|\[snapshot\])|(.+)/gi;
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
 * @returns {object} - directive type, sprite name, resource name
 */
export const parseContentPartDirective = function (directive) {
    let directiveType = '';
    let spriteName = '';
    let resourceName = '';
    if (directive.toLowerCase() === '[snapshot]') {
        directiveType = 'snapshot';
    } else if (directive.includes(':')) {
        const parts = directive.slice(1, -1).split(':');
        if (parts[0]) directiveType = parts[0];
        if (parts[1]) spriteName = parts[1];
        if (parts[2]) resourceName = parts[2];
    } else {
        spriteName = directive.slice(1, -1);
    }
    return {directiveType, spriteName, resourceName};
};

export const makeImagePartFromCostume = async function (costume) {
    const imageDataURL = await costumeToDataURL(costume);
    const imagePart = {inlineData: {data: (imageDataURL.split(',')[1]), mimeType: 'image/png'}};
    return imagePart;
};

/**
 * Interpret content part directives.
 * @param {string[]} contentPartDirectives - content part directives
 * @param {Target} requester - target which is requesting to AI
 * @param {Runtime} runtime - runtime
 * @returns {Promise<object[]>} - a Promise that resolves content parts
 */
export const interpretContentPartDirectives = function (contentPartDirectives, requester, runtime) {
    const contentParts = contentPartDirectives.map(async directive => {
        if (!directive.startsWith('[')) {
            return directive;
        }
        const {directiveType, spriteName, resourceName} = parseContentPartDirective(directive);
        let contentPartHolder = null;
        if (spriteName === '') {
            contentPartHolder = requester;
        } else if (spriteName.toLowerCase() === 'stage' || spriteName === 'ステージ') {
            contentPartHolder = runtime.getTargetForStage();
        } else {
            contentPartHolder = runtime.getSpriteTargetByName(spriteName);
        }
        if (!contentPartHolder) {
            // sprite not found
            return directive;
        }
        if (directiveType === 'costume') {
            let costume = contentPartHolder.getCostumes().find(c => c.name === resourceName);
            if (!costume) {
                let costumeNumber = convertToHalfWidth(resourceName);
                if (costumeNumber.startsWith('#') && costumeNumber.length > 1) {
                    costumeNumber = parseInt(costumeNumber.slice(1), 10);
                    if (!isNaN(costumeNumber)) {
                        costume = contentPartHolder.getCostumes()[
                            Math.max(
                                0,
                                Math.min(
                                    costumeNumber - 1,
                                    contentPartHolder.getCostumes().length - 1))
                        ];
                    }
                }
            }
            if (!costume) {
                costume = contentPartHolder.getCostumes()[contentPartHolder.currentCostume];
            }
            const imagePart = await makeImagePartFromCostume(costume);
            return imagePart;
        } else if (directiveType === 'snapshot') {
            const stage = runtime.getTargetForStage();
            return new Promise(resolve => {
                stage.renderer.requestSnapshot(imageDataURL => {
                    const imagePart = {inlineData: {data: (imageDataURL.split(',')[1]), mimeType: 'image/png'}};
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
                    resolve(imagePart);
                });
            });
        }
        throw new Error(`Unknown directive: ${directive}`);
    });
    return Promise.all(contentParts);
};
