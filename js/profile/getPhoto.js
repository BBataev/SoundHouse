(() => {

    const imageContainer = document.querySelector('.main-profile__img');
    const userIdCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('user_id='));
    const userId = userIdCookie.split('=')[1];

    const baseName = userId; 
    const imageName = '../../users_media/' + baseName + '.jpg';

    const img = new Image();
    img.src = imageName;

    imageContainer.src = img.src;
    
})();
