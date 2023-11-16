(() => {

    //That's a "Back to home button" its function is to back on the home page
    const backBtn = document.querySelector('.main-nav__descr');
    
    backBtn.addEventListener('click', () => {
        window.location.href = '../home';
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
    
    //creating another popup for possibility to write new name in the form
    const popupdiv = document.createElement('div');
    const popupinfo = document.createElement('h2');
    const popupdiv2 = document.createElement('div');
    const popupform = document.createElement('form');
    const popupInName = document.createElement('input');
    const popupbtn = document.createElement('button');

    popupform.method = 'POST';
    popupbtn.textContent = 'Upload';
    popupbtn.type = 'submit';

    popupdiv.classList.add('popupName');
    popupdiv2.classList.add('popup2');
    popupinfo.classList.add('popupinfo');
    popupform.classList.add('popupform');
    popupInName.classList.add('popupinfophoto');
    popupbtn.classList.add('popupbtn');

    document.body.appendChild(popupdiv);
    popupdiv.appendChild(popupdiv2);
    popupdiv2.appendChild(popupinfo);
    popupdiv2.appendChild(popupform);
    popupform.appendChild(popupInName);
    popupform.appendChild(popupbtn);

    //the button work itself, pathetic right?
    changeName.addEventListener('click', () => {
        popupInName.type = 'username';
        popupInName.name = "username";
        popupInName.placeholder = 'Username (max 20)'
        popupinfo.textContent = 'Enter your new name';
        popupform.action = '../php/changeName.php'
        popupdiv.classList.add('active');
    });

    changeBg.addEventListener('click', () => {
        popupInName.type = 'file';
        popupInName.accept = 'image/*'
        popupInName.name = "image";
        popupinfo.textContent = 'Upload new background';
        popupform.enctype = "multipart/form-data";
        popupform.action = '../php/changeBg.php'
        popupdiv.classList.add('active');
    });

    changeStyle.addEventListener('click', () => {
        const popupdiv = document.querySelector('.main-colorPicker');

        popupdiv.classList.add('active');
        window.addEventListener('click', (event) => {
            if (event.target === popupdiv) {
                popupdiv.classList.remove('active');
                document.body.classList.remove("no-scroll");
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupdiv) {
            popupdiv.classList.remove('active');
            document.body.classList.remove("no-scroll");
        }
    });


})();