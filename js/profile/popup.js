(() => {

    const change = document.querySelector('.main-menu__change');
    const popup = document.querySelector('.popup');

    change.addEventListener('click', () => {
        popup.classList.add('active');
    });

    window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('active');
        document.body.classList.remove("no-scroll");
    }
    });
    
})();