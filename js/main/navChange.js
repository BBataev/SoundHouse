(() => {
    function removeChoosedClass() {
        home.classList.remove('choosed');
        search.classList.remove('choosed');
        music.classList.remove('choosed');
        albums.classList.remove('choosed');
        following.classList.remove('choosed');
    }

    const home = document.querySelector('.home');
    const search = document.querySelector('.search');
    const music = document.querySelector('.music');
    const albums = document.querySelector('.albums');
    const following = document.querySelector('.following');

    home.addEventListener('click', () => {
        removeChoosedClass();
        home.classList.add('choosed');
        updateUrl('home');
    });

    search.addEventListener('click', () => {
        removeChoosedClass();
        search.classList.add('choosed');
        updateUrl('search');
    });

    music.addEventListener('click', () => {
        removeChoosedClass();
        music.classList.add('choosed');
        updateUrl('music');
    });

    albums.addEventListener('click', () => {
        removeChoosedClass();
        albums.classList.add('choosed');
        updateUrl('albums');
    });

    following.addEventListener('click', () => {
        removeChoosedClass();
        following.classList.add('choosed');
        updateUrl('following');
    });

    // Функция обновления URL с использованием хэша
    function updateUrl(section) {
        const newUrl = `http://bateev.com/main#${section}`;
        window.history.replaceState({}, document.title, newUrl);
    }

    // Проверка наличия хэша при загрузке страницы
    window.addEventListener('load', () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const selectedElement = document.querySelector(`.${hash}`);
            if (selectedElement) {
                removeChoosedClass();
                selectedElement.classList.add('choosed');
            }
        }
    });
})();