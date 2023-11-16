(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../../php/getColorSelf.php", true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    const userData = JSON.parse(this.responseText);

                    document.documentElement.style.setProperty('--color-accent', userData['accent']);
                    document.documentElement.style.setProperty('--color-main', userData['main']);
                    document.documentElement.style.setProperty('--color-profile', userData['profile']);
                    document.documentElement.style.setProperty('--color-text', userData['text']);

                } catch (error) {
                    console.error('Ошибка при парсинге JSON:', error);
                    console.log('Ответ сервера:', this.responseText);
                }
            } else {
                console.error('Ошибка сервера:', this.status, this.statusText);
            }
        }
    };

    xhr.send();
})();
