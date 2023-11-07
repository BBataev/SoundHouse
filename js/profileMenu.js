(() => {
    const body = document.querySelector('.header__container');
    const profile = document.querySelector('.header-profile');
    let isOpen = false;

    profile.addEventListener('click', () => {
        if (isOpen) {
            const Mwindow = document.querySelector('.profile');
            Mwindow.remove();
            isOpen = false;
        } else {
            const Mwindow = document.createElement('div');
            const fillerProfile = document.createElement('p');
            const fillerSettings = document.createElement('p');
            const fillerExit = document.createElement('p');
            
            Mwindow.classList.add('profile');
            fillerProfile.classList.add('profile__profile');
            fillerSettings.classList.add('profile__settings');
            fillerExit.classList.add('profile__exit');

            fillerProfile.textContent = 'Profile';
            fillerSettings.textContent = 'Settings';
            fillerExit.textContent = 'Exit';

            body.append(Mwindow);
            Mwindow.append(fillerProfile);
            Mwindow.append(fillerSettings);
            Mwindow.append(fillerExit);
            isOpen = true;

            document.querySelector('.profile__profile').addEventListener('click', () => {
                window.location.href = "http://bateev.com/user/profile";
            })

            document.querySelector('.profile__exit').addEventListener('click', () => {
                document.cookie = 'remember_me=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

                window.location.href = "http://bateev.com/login";
            });
        }
    });

    document.addEventListener('click', (event) => {
        if (isOpen && event.target !== profile && !profile.contains(event.target)) {
            const Mwindow = document.querySelector('.profile');
            Mwindow.remove();
            isOpen = false;
        }
    });

})();