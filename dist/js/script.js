'use strict';

var _moduleLoader = require('@pod-point/module-loader');

var _moduleLoader2 = _interopRequireDefault(_moduleLoader);

var _domModuleLoader = require('@pod-point/dom-module-loader');

var _domModuleLoader2 = _interopRequireDefault(_domModuleLoader);

var _domOps = require('@pod-point/dom-ops');

var dom = _interopRequireWildcard(_domOps);

var _modal = require('./modules/modal');

var _modal2 = _interopRequireDefault(_modal);

var _ajaxForm = require('./modules/ajax-form');

var _ajaxForm2 = _interopRequireDefault(_ajaxForm);

var _collapse = require('./modules/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _dropdown = require('./modules/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _toggle = require('./modules/toggle');

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./shims/classList.js');

dom.whenReady(function () {
    (0, _moduleLoader2.default)({
        domModules: (0, _domModuleLoader2.default)({
            modal: _modal2.default,
            ajaxForm: _ajaxForm2.default,
            collapse: _collapse2.default,
            dropdown: _dropdown2.default,
            toggle: _toggle2.default
        })
    });
});