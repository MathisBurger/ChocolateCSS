
// fetches the toggler by the class name
let toggler = document.getElementsByClassName('navbar-toggler').item(0);

// fetches the navbar children by its class name
let children = document.getElementsByClassName('flyout-navbar').item(0).children;

// add click event listener to 
// toggle the navbar
toggler.addEventListener('click', () => {

    for (let i=0; i<children.length; i++) {

        if (children[i].tagName == 'UL') {

            children[i].classList.toggle('navbar-shown');
        }
    }
});