(() => {

    const closePopup = (obj) => {
        window.addEventListener('click', (event) => {
            if (event.target === obj) {
                obj.classList.remove('active');
                document.body.classList.remove("no-scroll");
            }
        });
    };

    //That's a "Back to main button" its function is to back on the main page
    const backBtn = document.querySelector('.main-nav__descr');
    
    backBtn.addEventListener('click', () => {
        window.location.href = '../main';
    });

    //"3 dots on the right side of the profile panel" its function is to open a changing menu
    const changeBtn = document.querySelector('.main-profile__svg');
    const changeMenu = document.querySelector('.main-changeMenu');

    changeBtn.addEventListener('click', () => {
        changeMenu.classList.toggle('active');
    });

    //3 buttons in the changeMenu their function written in their names, i wont write what they're do, its not necessary
    const changeName = document.querySelector('.main-changeMenu__changeName');
    const changeBg = document.querySelector('.main-changeMenu__changeBg');
    const changeStyle = document.querySelector('.main-changeMenu__changeStyle');

    
    changeName.addEventListener('click', () => {
        const popupdiv = document.querySelector('.popupName');
        popupdiv.classList.add('active');

        closePopup(popupdiv);
    });

    
    changeBg.addEventListener('click', () => {
        const popupdiv = document.querySelector('.popupBg');
        popupdiv.classList.add('active');

        closePopup(popupdiv);
    });
    
    
    changeStyle.addEventListener('click', () => {
        const popupdiv = document.querySelector('.main-colorPicker');
        popupdiv.classList.add('active');

        closePopup(popupdiv);
    });

})();