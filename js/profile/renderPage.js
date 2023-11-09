(() => {

    var currentUrl = window.location.href;

    var url = new URL(currentUrl);
    
    var userId = url.searchParams.get("userId");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    const userData = JSON.parse(this.responseText);
                    
                    //Uploading photo
                    const imageContainer = document.querySelector('.main-profile__img');
                    const imageName = '../../users_media/' + userId + '.jpg';

                    const img = new Image();
                    img.onload = function() {
                        imageContainer.src = img.src;
                    };
                    img.onerror = function() {
                        const defaultImageSrc = '../../img/users-basic.jpg';
                        imageContainer.src = defaultImageSrc;
                    };
                    img.src = imageName;

                    //Uploading name
                    const userNameContainer = document.querySelector('.main-profile__name');
                    userNameContainer.textContent = userData.username;

                } catch (error) {
                    console.error('Ошибка при парсинге JSON:', error);
                    console.log('Ответ сервера:', this.responseText);
                }
            } else {
                console.error('Ошибка сервера:', this.status, this.statusText);
            }
        }
    };
    
    xhr.open("GET", "../../php/getUserData.php?userId=" + userId, true);
    xhr.send();
})();
