(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IS_LOADING = 'is-loading';
var IS_COMPLETE = 'is-complete';

var instances = [];

var ProgressButton = function () {
    function ProgressButton(button) {
        _classCallCheck(this, ProgressButton);

        this.button = button;
    }

    _createClass(ProgressButton, [{
        key: 'handleLoading',
        value: function handleLoading() {
            this.button.setAttribute('disabled', true);
            this.button.classList.add(IS_LOADING);
        }
    }, {
        key: 'handleComplete',
        value: function handleComplete(success) {
            this.button.classList.remove(IS_LOADING);

            if (success) {
                this.button.removeAttribute('disabled');
                this.button.classList.add(IS_COMPLETE);
            }
        }
    }]);

    return ProgressButton;
}();

exports.default = {
    create: function create(button) {
        return new ProgressButton(button);
    }
};

},{}]},{},[1]);
