/* eslint-disable import/no-unresolved */
import React from 'react';
import {FormattedMessage} from 'react-intl';

/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';

const version = 'v1.1.0';

const translations =
{
    'en': {
        'gai.entry.name': 'GAI',
        'gai.entry.description': `Create programs using generative AI. Supports Gemini, ChatGPT, Claude, and more. (${version})`
    },
    'ja': {
        'gai.entry.name': 'GAI',
        'gai.entry.description': `生成AIを利用したプログラムをつくれます。Gemini, ChatGPT, Claude, ローカルLLM などに対応しています。 (${version})`
    },
    'ja-Hira': {
        'gai.entry.name': 'GAI',
        'gai.entry.description': `せいせいAI を りよう した プログラム を つくれます。Gemini, ChatGPT, Claude, ローカルLLM など に たいおう しています。 (${version})`
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
    collaborator: 'Koji Yokokawa',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Play with generative AI!"
            description="Description for this extension"
            id="gai.entry.description"
        />
    ),
    tags: ['function', 'image', 'sound', 'text', 'ai'],
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://yokobond.github.io/xcx-costumex/',
    translationMap: translations
};

export default entry;
