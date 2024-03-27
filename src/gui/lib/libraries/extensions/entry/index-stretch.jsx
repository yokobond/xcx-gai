/* eslint-disable import/no-unresolved */
import React from 'react';
import {FormattedMessage} from 'react-intl';

/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';

const version = 'v0.1.0';

const translations =
{
    'en': {
        'gai.entry.name': 'GAI',
        'gai.entry.description': `Play with Google generative AI, Gemini! (${version})`
    },
    'ja': {
        'gai.entry.name': 'GAI',
        'gai.entry.description': `Google生成AI、Geminiと遊ぼう! (${version})`
    },
    'ja-Hira': {
        'gai.entry.name': 'GAI',
        'gai.entry.description': `GoogleせいせいAI、Geminiとあそぼう! (${version})`
    }
};

const entry = {
    name: (
        <FormattedMessage
            defaultMessage="GAI"
            id="gai.entry.name"
        />
    ),
    extensionId: 'gai',
    extensionURL: null,
    collaborator: 'Yengawa Lab',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Play with Google generative AI, Gemini!"
            description="Description for this extension"
            id="gai.entry.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://yokobond.github.io/xcx-costumex/',
    translationMap: translations
};

export default entry;
