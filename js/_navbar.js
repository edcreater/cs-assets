class Navbar {
    toggler = document.querySelector('.navbar-toggle');
    navbar = document.querySelector('.navbar');

    submenuToggleListener;

    constructor(navbar) {
        this.navbar = navbar;

        var mediaQuery = window.matchMedia("(max-width: 900px)");
        if (mediaQuery.matches) {
            this.setSubmenuToggler();
            this.setNavbarToggler();
        }
        mediaQuery.addEventListener('change', event => {
            if (event.matches) {
                console.log('Matches');
                this.setSubmenuToggler();
                this.setNavbarToggler();
            } else {
                this.unsetSubmenuToggler();
                this.unsetNavbarToggler();
            }
        });

    }

    setSubmenuToggler() {
        const submenus = navbar.querySelectorAll('.sub-menu');

        submenus.forEach((submenu, that) => {
            // do whatever
            submenu.classList.add('collapsed');
            let submenuToggler = submenu.previousElementSibling;

            submenuToggler.addEventListener('click', this.submenuToggleListener = (ev, el) => this.submenuToggle(ev, submenuToggler));

        });
    }

    unsetSubmenuToggler() {
        const submenus = navbar.querySelectorAll('.sub-menu');

        submenus.forEach((submenu, that) => {
            // do whatever
            submenu.classList.remove('collapsed');
            let submenuToggler = submenu.previousElementSibling;
            submenuToggler.removeEventListener('click', this.submenuToggleListener);

        });
    }

    submenuToggle(event, el) {
        event.preventDefault();
        let currentSubmenu = el.nextElementSibling;
        currentSubmenu.classList.toggle('collapsed');
    }

    setNavbarToggler() {
        this.navbar.classList.add('collapsed');

        this.toggler.addEventListener('click', this.navbarToggleListener = (ev) => this.navbarToggle(ev));

    }

    unsetNavbarToggler() {
        this.navbar.classList.remove('collapsed');
        this.toggler.classList.remove('active');

        this.toggler.removeEventListener('click', this.navbarToggleListener);
    }

    navbarToggle(event) {
        event.preventDefault();
        this.navbar.classList.toggle('collapsed');
        this.toggler.classList.toggle('active');
    }
}

document.addEventListener("DOMContentLoaded", function (_) {
    let navbar = document.querySelector('.navbar');
    if (navbar !== null) {
        new Navbar(navbar);
    }
});
