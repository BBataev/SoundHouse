(() => {
    function removeChoosedClass() {
        homeBtn.classList.remove('choosed');
        searchBtn.classList.remove('choosed');
        musicBtn.classList.remove('choosed');
        albumsBtn.classList.remove('choosed');
        followingBtn.classList.remove('choosed');

        homeBlock.classList.remove('active');
        searchBlock.classList.remove('active');
        musicBlock.classList.remove('active');
        albumsBlock.classList.remove('active');
        followingBlock.classList.remove('active');
    }

    function getTranslateValue(element) {
        var transformValue = window.getComputedStyle(element).getPropertyValue('transform');
        var matrix = new DOMMatrix(transformValue);
        return matrix.m41;
      }

    const checkin = () => {
        const translateValueHome = getTranslateValue(homeBlock);
        const translateValueSearch = getTranslateValue(searchBlock);
        const translateValueMusic = getTranslateValue(musicBlock);
        const translateValueAlbums = getTranslateValue(albumsBlock);
        const translateValueFollow = getTranslateValue(followingBlock);

        if (translateValueHome === 0) {
            homeBlock.classList.add('scrolled')
            setTimeout(() => {
                homeBlock.classList.remove('scrolled')
            }, 300);
        };

        if (translateValueSearch === 0) {
            searchBlock.classList.add('scrolled')
            setTimeout(() => {
                searchBlock.classList.remove('scrolled')
            }, 300);
        };

        if (translateValueMusic === 0) {
            musicBlock.classList.add('scrolled')
            setTimeout(() => {
                musicBlock.classList.remove('scrolled')
            }, 300);
        };

        if (translateValueAlbums === 0) {
            albumsBlock.classList.add('scrolled')
            setTimeout(() => {
                albumsBlock.classList.remove('scrolled')
            }, 300);
        };

        if (translateValueFollow === 0) {
            followingBlock.classList.add('scrolled')
            setTimeout(() => {
                followingBlock.classList.remove('scrolled')
            }, 300);
        };
     }

    const homeBtn = document.querySelector('.home');
    const searchBtn = document.querySelector('.search');
    const musicBtn = document.querySelector('.music');
    const albumsBtn = document.querySelector('.albums');
    const followingBtn = document.querySelector('.following');

    const homeBlock = document.querySelector('.main-info-home');
    const searchBlock = document.querySelector('.main-info-search');
    const musicBlock = document.querySelector('.main-info-music');
    const albumsBlock = document.querySelector('.main-info-albums');
    const followingBlock = document.querySelector('.main-info-following');

    homeBtn.addEventListener('click', () => {
        removeChoosedClass();
        checkin();
        homeBtn.classList.add('choosed');
        homeBlock.classList.add('active');
        updateUrl('home');
    });

    searchBtn.addEventListener('click', () => {
        removeChoosedClass();
        checkin();
        searchBtn.classList.add('choosed');
        searchBlock.classList.add('active');
        updateUrl('search');
    });

    musicBtn.addEventListener('click', () => {
        removeChoosedClass();
        checkin();
        musicBtn.classList.add('choosed');
        musicBlock.classList.add('active');
        updateUrl('music');
    });

    albumsBtn.addEventListener('click', () => {
        removeChoosedClass();
        checkin();
        albumsBtn.classList.add('choosed');
        albumsBlock.classList.add('active');
        updateUrl('albums');
    });

    followingBtn.addEventListener('click', () => {
        removeChoosedClass();
        checkin();
        followingBtn.classList.add('choosed');
        followingBlock.classList.add('active');
        updateUrl('following');
    });

    function updateUrl(section) {
        const newUrl = `http://bateev.com/main#${section}`;
        window.history.replaceState({}, document.title, newUrl);
    }

    window.addEventListener('load', () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const selectedElementBtn = document.querySelector(`.${hash}`);
            const selectedElementBlock = document.querySelector(`.main-info-${hash}`);
            if (selectedElementBtn) {
                removeChoosedClass();
                selectedElementBtn.classList.add('choosed');
                selectedElementBlock.classList.add('active');
            }
        }
    });
})();