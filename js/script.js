const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

if (navbarToggle && navbarMenu) {

    const closeMenu = () => {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    };

    const toggleMenu = () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    };

    navbarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    navbarMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        if (
            !navbarMenu.contains(e.target) &&
            !navbarToggle.contains(e.target)
        ) {
            closeMenu();
        }
    });

}