require('cross-class-list');

var dropdowns = document.querySelectorAll('[data-toggle="dropdown"]');

for (var i = 0; i < dropdowns.length; i ++) {
    var dropdown = dropdowns[i];
    dropdown.onclick = doDropDown;
    dropdown.onblur = closeDropDown;
}

function doDropDown(event) {
    event.preventDefault();
    event = event || window.event;
    var evTarget = event.currentTarget || event.srcElement;
    evTarget.parentElement.classList.toggle('open');
    return false;
}

// Close a dropdown menu
function closeDropDown(event) {
    event = event || window.event;
    var evTarget = event.currentTarget || event.srcElement;
    evTarget.parentElement.classList.remove('open');

    // Trigger the click event on the target if it not opening another menu
    if (event.relatedTarget && event.relatedTarget.getAttribute('data-toggle') !== 'dropdown') {
        event.relatedTarget.click();
    }

    return false;
}
