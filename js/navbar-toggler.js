

let toggler = document.getElementsByClassName('navbar-toggler').item(0);

let children = document.getElementsByClassName('flyout-navbar').item(0).children;

toggler.addEventListener('click', () => {

    for (let i=0; i<children.length; i++) {

        if (children[i].tagName == 'UL') {

            children[i].classList.toggle('navbar-shown');
        }
    }
});