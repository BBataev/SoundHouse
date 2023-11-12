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
                    
                    //Uploading profile photo
                    const profileImageContainer = document.querySelector('.main-profile__img');
                    const profileImageName = '../../users_media/profileImage/' + userId + '_PROF.jpg' + '?timestamp=' + new Date().getTime();

                    const profileImage = new Image();
                    profileImage.onload = function() {
                        profileImageContainer.src = profileImage.src;
                    };
                    profileImage.onerror = function() {
                        const defaultImageSrc = '../../img/users-basic.jpg';
                        profileImageContainer.src = defaultImageSrc;
                    };
                    profileImage.src = profileImageName;

                    //Uploading profile background photo
                    const BgImageContainer = document.querySelector('.header');
                    const BgImageName = '../../users_media/BgImage/' + userId + '_BG.jpg' + '?timestamp=' + new Date().getTime();

                    const BgImage = new Image();
                    BgImage.onload = function() {
                        BgImageContainer.style.backgroundImage = "url('" + BgImageName + "')";
                    };
                    BgImage.onerror = function() {
                        BgImageContainer.style.backgroundImage = "url('../../img/profile-bg.jpg')";
                    };
                    BgImage.src = BgImageName;

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
