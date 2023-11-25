(() => {

    document.addEventListener("DOMContentLoaded", function () {
        var tracksMas = [];

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var tracks = JSON.parse(this.responseText);
                displayTracks(tracks);
                tracksMas = tracks;
                console.log(tracks)
            }
        };
        xhr.open("GET", "../../php/getMusic.php", true);
        xhr.send();

        var currentTrack = 0;
        var tracksList = document.querySelector(".main-info-block-music-tracks");

        function displayTracks(tracks) {

            tracks.reverse();

            tracks.forEach(function (track, index) {
                var trackDiv = document.createElement("div");
                trackDiv.classList.add('main-info-block-down')
                trackDiv.innerHTML = "<p class='main-info-block-down__number'>" + (index + 1) + "</p> <p class='main-info-block-down__music'>" + track.title + " - " + track.artist + "</p>";
                trackDiv.addEventListener("click", function() {
                    playTrack(track.filename);
                    currentTrack = index;
                    stylePlayingTrack(currentTrack);
                });
                tracksList.appendChild(trackDiv);
            });
        };

        const audioPlayer = document.querySelector(".main-block-play");
        const audioPlayerProgress = document.querySelector(".main-block-play-changed__input");
        const audioBtn = document.querySelector(".main-block-play-changed-controls-block");

        const audioPlayBtn = document.querySelector(".main-block-play-changed-controls-block__play");
        const audioPauseBtn = document.querySelector(".main-block-play-changed-controls-block__pause");
        const audioLastBtn = document.querySelector('.main-block-play-changed-controls__last');
        const audioNextBtn = document.querySelector('.main-block-play-changed-controls__next');

        function stylePlayingTrack(currentTrack) {
            for (var i = 0; i < tracksList.children.length; i++) {
                tracksList.children[i].classList.remove('active');
            }
            tracksList.children[currentTrack].classList.add('active');
        };

        function playTrack(filename) {

            audioPlayer.src = "../../users_media/music/" + filename + '_MUSIC.mp3';

            audioPlayer.onloadedmetadata = () => {
                audioPlayerProgress.max = audioPlayer.duration;
                audioPlayerProgress.value = audioPlayer.currentTime;

                audioPlayer.play();
                audioPlayBtn.classList.remove('active');
                audioPauseBtn.classList.add('active');
                audioBtn.classList.add('music-pause');
            };

        };

        let isUserSeeking = false;

        audioBtn.addEventListener('click', () => {
            if (audioBtn.classList.contains('music-pause')) {
                audioPlayer.pause();
                audioPauseBtn.classList.remove('active');
                audioPlayBtn.classList.add('active');
                audioBtn.classList.remove('music-pause');
            } else {
                audioPlayer.play();
                audioPlayBtn.classList.remove('active');
                audioPauseBtn.classList.add('active');
                audioBtn.classList.add('music-pause');
            }
        });

        audioLastBtn.addEventListener('click', () => {
            if (currentTrack === 0) {
                audioPlayer.currentTime = 0;
            } else {
                currentTrack = (currentTrack - 1) % tracksMas.length;
                playTrack(tracksMas[currentTrack].filename);
                stylePlayingTrack(currentTrack);
            }
        });

        audioNextBtn.addEventListener('click', () => {
            currentTrack = (currentTrack + 1) % tracksMas.length;
            playTrack(tracksMas[currentTrack].filename);
            stylePlayingTrack(currentTrack);
        });


        audioPlayerProgress.oninput = () => {
            isUserSeeking = true;
        };

        audioPlayerProgress.onchange = () => {
            audioPlayer.currentTime = audioPlayerProgress.value;
            isUserSeeking = false;
        };

        audioPlayer.ontimeupdate = () => {
            if (!isUserSeeking) {
                audioPlayerProgress.value = audioPlayer.currentTime;
            }
        };

        audioPlayer.onended = () => {
            currentTrack = (currentTrack + 1) % tracksMas.length;
            playTrack(tracksMas[currentTrack].filename);
            stylePlayingTrack(currentTrack);
        };

        // document.addEventListener('keydown', (e) => {
        //     if (e.code === 'Space') {
        //         e.preventDefault();
        //         togglePlayPause(); 
        //     }
        // });

        // function togglePlayPause() {
        //     if (audioPlayer.paused) {
        //         audioPlayer.play();
        //         audioPauseBtn.classList.add('active');
        //         audioPlayBtn.classList.remove('active');
        //     } else {
        //         audioPlayer.pause();
        //         audioPauseBtn.classList.remove('active');
        //         audioPlayBtn.classList.add('active');
        //     }
        // }


    });

})();