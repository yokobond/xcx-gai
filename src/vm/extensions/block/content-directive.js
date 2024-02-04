/**
 * Parse content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {string[]} - content part directives
 */
export const parseContentPartsText = function (contentPartsText) {
    const regex = /(.*?)(\[data:[^[\]]*\])|(.+)/gi;
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
 * Interpret content part directives.
 * @param {string[]} contentPartDirectives - content part directives
 * @param {Target} requester - target which is requesting to AI
 * @param {Runtime} runtime - runtime
 * @returns {object[]} - content parts
 */
export const interpretContentPartDirectives = function (contentPartDirectives) {
    return contentPartDirectives.map(directive => {
        if (directive.startsWith('[data:')) {
            return {type: 'dataURL', data: directive.slice(1, -1)};
        }
        return {type: 'text', data: directive};
    });
};

/**
 * Interpret content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {object[]} - content parts
 */
export const interpretContentPartsText = function (contentPartsText) {
    const contentPartDirectives = parseContentPartsText(contentPartsText);
    const contentParts = interpretContentPartDirectives(contentPartDirectives);
    return contentParts;
};
