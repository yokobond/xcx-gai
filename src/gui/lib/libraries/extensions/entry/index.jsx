/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import translations from './translations.json';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const version = 'v0.2.0';

const entry = {
    get name () {
        return formatMessage({
            id: 'gai.entry.name',
            defaultMessage: 'GAI',
            description: 'name of the extension'
        });
    },
    extensionId: 'gai',
    extensionURL: 'https://yokobond.github.io/xcx-gai/dist/gai.mjs',
    collaborator: 'Yengawa Lab',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return `${formatMessage({
            defaultMessage: 'Play with Google generative AI, Gemini!',
            description: 'Description for this extension',
            id: 'gai.entry.description'
        })} (${version})`;
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://yokobond.github.io/xcx-gai/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
