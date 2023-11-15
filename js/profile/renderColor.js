(() => {

    //getting an id from url
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var userId = url.searchParams.get("userId");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    const userData = JSON.parse(this.responseText);

                    document.documentElement.style.setProperty('--color-accent', userData['accent']);
                    document.documentElement.style.setProperty('--color-main', userData['main']);
                    document.documentElement.style.setProperty('--color-profile', userData['profile']);
                    document.documentElement.style.setProperty('--color-text', userData['text']);

                    const accent = document.querySelector('.main-colorPicker2-separation-form-colorChoicer-accent__input');
                    const main = document.querySelector('.main-colorPicker2-separation-form-colorChoicer-main__input');
                    const profile = document.querySelector('.main-colorPicker2-separation-form-colorChoicer-profile__input');
                    const text = document.querySelector('.main-colorPicker2-separation-form-colorChoicer-text__input');

                    accent.value = userData['accent'];
                    main.value = userData['main'];
                    profile.value = userData['profile'];
                    text.value = userData['text'];

                } catch (error) {
                    console.error('Ошибка при парсинге JSON:', error);
                    console.log('Ответ сервера:', this.responseText);
                }
            } else {
                console.error('Ошибка сервера:', this.status, this.statusText);
            }
        }
    };
    
    xhr.open("GET", "../../php/getColor.php?userId=" + userId, true);
    xhr.send();
})();
