var mpanInputs = document.querySelectorAll('.mpan input');

for (var i = 0; i < mpanInputs.length; i++) {
    mpanInputs[i].onkeyup = goToNextInput;
}

function goToNextInput(event) {
    var target = event.srcElement;
    var maxLength = parseInt(target.attributes.maxlength.value, 10);
    var myLength = target.value.length;

    if (myLength >= maxLength) {
        var next = target.nextElementSibling;
        while (next) {

            if (next == null) {
                break;
            }

            if (next.tagName.toLowerCase() == 'input') {
                next.focus();
                break;
            }

            next = next.nextElementSibling;
        }
    }
}
