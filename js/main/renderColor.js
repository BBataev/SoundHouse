(() => {
    function gay(huy) {
        var color = huy;

        var r = parseInt(color.substring(1, 3), 16);
        var g = parseInt(color.substring(3, 5), 16);
        var b = parseInt(color.substring(5, 7), 16);

        var brightnessFactor = 1.4;
        r = Math.min(Math.round(r * brightnessFactor), 255);
        g = Math.min(Math.round(g * brightnessFactor), 255);
        b = Math.min(Math.round(b * brightnessFactor), 255);

        var newColor = "#" + (r < 16 ? "0" : "") + r.toString(16) +
                            (g < 16 ? "0" : "") + g.toString(16) +
                            (b < 16 ? "0" : "") + b.toString(16);

        return newColor;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../../php/getColorSelf.php", true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    const userData = JSON.parse(this.responseText);

                    document.documentElement.style.setProperty('--color-accent', userData['accent']);
                    document.documentElement.style.setProperty('--color-accent-active', gay(userData['accent']));

                    document.documentElement.style.setProperty('--color-main', userData['main']);
                    document.documentElement.style.setProperty('--color-hover-main', gay(userData['main']));
                    
                    document.documentElement.style.setProperty('--color-profile', userData['profile']);
                    document.documentElement.style.setProperty('--color-hover-profile', gay(userData['profile']));

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
