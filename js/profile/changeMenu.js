(() => {
    const profile = document.querySelector('.main-profile__img');
    const menu = document.querySelector('.main-menu');

    profile.addEventListener('mouseenter', () => {
        menu.style.display = "flex";
    });

    profile.addEventListener('mouseleave', () => {
        menu.style.display = "none";
    });

    menu.addEventListener('mouseenter', () => {
        menu.style.display = "flex";
    });

    menu.addEventListener('mouseleave', () => {
        menu.style.display = "none";
    });
})();