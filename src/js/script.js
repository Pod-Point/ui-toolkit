require('./shims/classList.js');

import loadModules from '@pod-point/module-loader';
import combineDomModules from '@pod-point/dom-module-loader';
import * as dom from '@pod-point/dom-ops';

import modal from './modules/modal';
import collapse from './modules/collapse';
import dropdown from './modules/dropdown';

dom.whenReady(() => {
    loadModules({
        domModules: combineDomModules({
            modal,
            collapse,
            dropdown,
        })
    });
});
