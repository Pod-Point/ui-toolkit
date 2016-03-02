var modals = document.querySelectorAll('[data-toggle="modal"]');
var modalCloses = document.querySelectorAll('.modal-close');

for (var i = 0; i < modals.length; i++) {
    modals[i].onclick = doModal;
}

function doModal(event) {
    event.preventDefault();

    var elements = [
        document.querySelector('.modal-overlay'),
        document.querySelector('.modal')
    ];

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display === 'none' || !elements[i].style.display) {
            elements[i].style.display = 'block';
        } else {
            elements[i].style.display = 'none';
        }
    }
}

for (var i = 0; i < modalCloses.length; i ++) {
    modalCloses[i].onclick = closeModal;
}

function closeModal(event) {
    event.preventDefault();

    var elements = [
        document.querySelector('.modal-overlay'),
        document.querySelector('.modal')
    ];

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}
