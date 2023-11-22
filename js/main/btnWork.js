(() => {

    const addMusicBtn = document.querySelector('.main-info-block-up__icon');
    
    const popupdiv = document.createElement('div');
    const popupinfo = document.createElement('h2');
    const popupdiv2 = document.createElement('div');
    const popupform = document.createElement('form');
    const popupInTitle = document.createElement('input');
    const popupInArtist = document.createElement('input');
    const popupInName = document.createElement('input');
    const popupbtn = document.createElement('button');

    popupform.method = 'POST';
    popupbtn.textContent = 'Upload';
    popupbtn.type = 'submit';

    popupdiv.classList.add('addMusicPopup');
    popupdiv2.classList.add('addMusicPopup2');
    popupinfo.classList.add('addMusicPopupInfo');
    popupform.classList.add('addMusicPopupForm');
    popupInTitle.classList.add('addMusicPopupInput');
    popupInArtist.classList.add('addMusicPopupInput');
    popupInName.classList.add('addMusicPopupInput');
    popupbtn.classList.add('addMusicPopupBtn');

    document.body.appendChild(popupdiv);
    popupdiv.appendChild(popupdiv2);
    popupdiv2.appendChild(popupinfo);
    popupdiv2.appendChild(popupform);
    popupform.appendChild(popupInTitle);
    popupform.appendChild(popupInArtist);
    popupform.appendChild(popupInName);
    popupform.appendChild(popupbtn);

    addMusicBtn.addEventListener('click', () => {

        popupInTitle.name = "title";
        popupInArtist.name = "artist";
        popupInName.type = 'file';
        popupInName.accept = '.mp3'
        popupInName.name = "mp3";
        popupinfo.textContent = 'Add music you like';
        popupform.enctype = "multipart/form-data";
        popupform.action = '../php/uploadMusic.php'
        popupdiv.classList.add('active');
    
        window.addEventListener('click', (event) => {
            if (event.target === popupdiv) {
                popupdiv.classList.remove('active');
                document.body.classList.remove("no-scroll");
            }
        });
    });
})();