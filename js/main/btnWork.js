(() => {

    const addMusicBtn = document.querySelector('.main-info-block-up__icon');
    const addMusicPopup = document.querySelector('.addMusicPopup');


    addMusicBtn.addEventListener('click', () => {
        addMusicPopup.classList.add('active');
    
        window.addEventListener('click', (event) => {
            if (event.target === addMusicPopup) {
                addMusicPopup.classList.remove('active');
                document.body.classList.remove("no-scroll");
            }
        });
    });
})();