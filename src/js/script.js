import loadModules from '@pod-point/module-loader';
import combineDomModules from '@pod-point/dom-module-loader';
import * as dom from '@pod-point/dom-ops';

import modal from './modules/modal';

dom.whenReady(() => {
    loadModules({
        domModules: combineDomModules({
            modal,
        })
    });
});
