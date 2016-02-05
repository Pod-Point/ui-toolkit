var utilities = require('./_utilities');

var collapsibles = document.querySelectorAll('[data-toggle="collapse"]');

for (var i = 0; i < collapsibles.length; i ++) {
    collapsibles[i].onclick = doCollapse;
}

function doCollapse(event) {
    event.preventDefault();

    var trigger = event.srcElement;
    var domContext = trigger.parentNode;

    var target = trigger.getAttribute('data-target');
    var element = domContext.querySelector(target);

    if (element.classList.contains('in')) {
        utilities.hide(element, trigger);
    } else {
        utilities.show(element, trigger);
    }

    return false;
}
