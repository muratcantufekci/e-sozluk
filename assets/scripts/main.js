document.addEventListener("DOMContentLoaded", function () {
    const manageMobileMenu = () => {
        const hamburgerIcon = document.getElementById('js-hamburger')
        const mobileMenu = document.querySelector('.o-header__mobile-menu')

        hamburgerIcon.addEventListener('click', () => {
            mobileMenu.classList.toggle('active')
        })
    }


    manageMobileMenu();
});
