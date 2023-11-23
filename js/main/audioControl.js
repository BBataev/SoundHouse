const audioController = (() => {

    document.addEventListener("DOMContentLoaded", () => {

        setTimeout(() => {
            const audio = document.querySelector('.main-block-play');
            const musicBtn = document.querySelector('.main-info-block-down');
            
            musicBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            });
        }, 20000);

    });

})();
