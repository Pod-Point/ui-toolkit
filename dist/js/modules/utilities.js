'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMaxHeight = getMaxHeight;
exports.show = show;
exports.hide = hide;
exports.complete = complete;
function getMaxHeight(element) {
    var prevHeight = element.style.height;
    element.style.height = 'auto';
    var maxHeight = getComputedStyle(element).height;
    element.style.height = prevHeight;
    element.offsetHeight;
    return maxHeight;
}

function show(element, trigger) {
    element.classList.remove('collapse');
    element.classList.add('collapsing');
    trigger.classList.remove('collapsed');
    trigger.setAttribute('aria-expanded', true);

    element.style.height = getMaxHeight(element);

    complete(element);
}

function hide(element, trigger) {
    element.classList.remove('collapse');
    element.classList.remove('in');
    element.classList.add('collapsing');
    trigger.classList.add('collapsed');
    trigger.setAttribute('aria-expanded', false);

    // Reset element's height
    element.style.height = getComputedStyle(element).height;
    element.offsetHeight; // force repaint
    element.style.height = '0px';

    complete(element);
}

function complete(element) {
    element.classList.remove('collapsing');
    element.classList.add('collapse');
    element.setAttribute('aria-expanded', false);

    // Check whether the element is unhidden
    if (element.style.height !== '0px') {
        element.classList.add('in');
        element.style.height = 'auto';
    }
}