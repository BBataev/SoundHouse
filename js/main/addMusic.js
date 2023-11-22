(() => {

    document.addEventListener("DOMContentLoaded", function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var tracks = JSON.parse(this.responseText);
                console.log(tracks);
                displayTracks(tracks);
            }
        };
        xhr.open("GET", "../../php/getMusic.php", true);
        xhr.send();
    
        function displayTracks(tracks) {
            var tracksList = document.querySelector(".main-info-block-music");
    
            tracks.forEach(function(track) {
                var trackDiv = document.createElement("div");
                trackDiv.classList.add('main-info-block-down')
                trackDiv.innerHTML = "<p class='main-info-block-down__music'>" + track.title + " - " + track.artist + "</p>";
                trackDiv.addEventListener("click", function() {
                    playTrack(track.filename);
                });
                tracksList.appendChild(trackDiv);
            });
        }
    
        function playTrack(filename) {
            var audioPlayer = document.querySelector(".main-block-play");
            for (var i = 0; i < 2; i++) {
                audioPlayer.src = "../../users_media/music/" + filename + '_MUSIC.mp3';
            }
            audioPlayer.play();
        }
    });

})();