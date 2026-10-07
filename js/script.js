
document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!menuToggle || !mainNav) return;

    /*
    |--------------------------------------------------------------------------
    | MENU HAMBURGUESA
    |--------------------------------------------------------------------------
    */

    const openMenu = () => {
        mainNav.classList.add("active");
        menuToggle.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
        mainNav.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    const toggleMenu = () => {
        const isOpen = mainNav.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    /*
    |--------------------------------------------------------------------------
    | BOTÓN HAMBURGUESA
    |--------------------------------------------------------------------------
    */

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();

        toggleMenu();

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );
    });

    /*
    |--------------------------------------------------------------------------
    | CERRAR AL SELECCIONAR UNA OPCIÓN
    |--------------------------------------------------------------------------
    */

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();

            menuToggle.setAttribute("aria-label", "Abrir menú");
        });
    });

    /*
    |--------------------------------------------------------------------------
    | CERRAR AL HACER CLICK FUERA DEL MENÚ
    |--------------------------------------------------------------------------
    */

    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            mainNav.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!clickedInsideMenu) {
            closeMenu();

            menuToggle.setAttribute("aria-label", "Abrir menú");
        }
    });

    /*
    |--------------------------------------------------------------------------
    | CERRAR CON ESC
    |--------------------------------------------------------------------------
    */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();

            menuToggle.setAttribute("aria-label", "Abrir menú");

            menuToggle.focus();
        }
    });

    /*
    |--------------------------------------------------------------------------
    | SI CAMBIAMOS DE MÓVIL A ESCRITORIO
    |--------------------------------------------------------------------------
    */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {
            closeMenu();

            menuToggle.setAttribute("aria-label", "Abrir menú");
        }

    });

});

