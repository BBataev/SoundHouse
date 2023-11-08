(() => {
    const popupdiv = document.createElement('div');
    const popupinfo = document.createElement('h2');
    const popupdiv2 = document.createElement('div');
    const popupform = document.createElement('form');
    const popupinfophoto = document.createElement('input');
    const popupbtn = document.createElement('button');

    popupinfophoto.type = 'file';
    popupinfophoto.accept = 'image/*';
    popupinfophoto.name = "image";
    popupinfo.textContent = 'Put liked photo';
    popupform.method = 'POST';
    popupform.enctype = "multipart/form-data";
    popupform.action = '../php/uploadPhoto.php'
    popupbtn.textContent = 'Upload';
    popupbtn.type = 'submit';

    popupdiv.classList.add('popup');
    popupdiv2.classList.add('popup2');
    popupinfo.classList.add('popupinfo');
    popupform.classList.add('popupform');
    popupinfophoto.classList.add('popupinfophoto');
    popupbtn.classList.add('popupbtn');


    document.body.appendChild(popupdiv);
    popupdiv.appendChild(popupdiv2);
    popupdiv2.appendChild(popupinfo);
    popupdiv2.appendChild(popupform);
    popupform.appendChild(popupinfophoto);
    popupform.appendChild(popupbtn);

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