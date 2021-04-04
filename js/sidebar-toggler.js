
// fetches the toggler by the class name
let toggler = document.getElementsByClassName('sidebar-toggler').item(0);

// fetches the sidebar by class name
let sidebar = document.getElementsByClassName('sidebar').item(0);

// adds click listener to toggler
toggler.addEventListener('click', () => {

    // toggles the classes depending on
    // the active class
    if (!sidebar.classList.contains('sidebar-extended')) {

        sidebar.classList.add('sidebar-extended');

    } else {

        sidebar.classList.add('sidebar-shrink');
        setTimeout(() => {
            sidebar.classList.remove('sidebar-extended');
            sidebar.classList.remove('sidebar-shrink');
        }, 300);
    }
});

