document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    if (themeToggle) {
        const icon = themeToggle.querySelector('i.fas');

        if (icon) {
            // This function updates the button icon and saves the theme preference.
            const updateThemeUI = () => {
                if (htmlEl.classList.contains('theme-dark')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            };

            // Set the initial icon state based on the class applied by the inline script in <head>.
            updateThemeUI(); 

            // Add click event listener to toggle themes.
            themeToggle.addEventListener('click', () => {
                htmlEl.classList.toggle('theme-dark');
                htmlEl.classList.toggle('theme-light');
                updateThemeUI();
            });
        } else {
            console.warn('Icon element not found inside theme toggle button.');
        }
    } else {
        console.warn('Theme toggle button with id "theme-toggle" not found.');
    }


    // --- Bulma Navbar Burger ---
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }


    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show after 300px of scrolling
                backToTopButton.classList.add('is-active');
            } else {
                backToTopButton.classList.remove('is-active');
            }
        });

        // Smooth scroll to top on click
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
