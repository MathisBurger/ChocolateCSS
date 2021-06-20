
// forwards to a new menu
function DropdownForwardMenu(from, to) {

    let fromElement = document.getElementById(from);
    removeUnusedClasses(fromElement);

    let toElement = document.getElementById(to);
    removeUnusedClasses(toElement);

    fromElement.classList.add('old-out');
    toElement.classList.add('new-in');

}

// goes back to an old menu
function DropdownBackwardMenu(from, to) {

    let fromElement = document.getElementById(from);
    removeUnusedClasses(fromElement);

    let toElement = document.getElementById(to);
    removeUnusedClasses(toElement);

    fromElement.classList.add('new-out');
    toElement.classList.add('old-in');
}

// removes unused animation classes
function removeUnusedClasses(element) {

    element.classList.contains('old-out') ? element.classList.remove('old-out') : null;
    element.classList.contains('old-in') ? element.classList.remove('old-in') : null;
    element.classList.contains('new-out') ? element.classList.remove('new-out') : null;
    element.classList.contains('new-in') ? element.classList.remove('new-in') : null;
}