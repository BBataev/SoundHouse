(() => {

    const backBtn = document.querySelector('.main-nav__descr');
    const changeBtn = document.querySelector('.main-profile__svg');
    const changeMenu = document.querySelector('.main-changeMenu');


    backBtn.addEventListener('click', () => {
        window.location.href = '../home';
    });

    changeBtn.addEventListener('click', () => {
        changeMenu.classList.toggle('active');
    });

})();