let toggler = document.getElementsByClassName('sidebar-toggler').item(0);


let sidebar = document.getElementsByClassName('sidebar').item(0);

toggler.addEventListener('click', () => {

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

