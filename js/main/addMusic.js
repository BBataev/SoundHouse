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
        xhr.open("GET", "../../php/musicInfo.php", true);
        xhr.send();
    
        function displayTracks(tracks) {
            var tracksList = document.querySelector(".main-info-block-music");
    
            tracks.forEach(function(track) {
                var trackDiv = document.createElement("div");
                trackDiv.innerHTML = "<p>" + track.title + " - " + track.artist + "</p>";
                trackDiv.addEventListener("click", function() {
                    playTrack(track.id);
                });
                tracksList.appendChild(trackDiv);
            });
        }
    
        function playTrack(filename) {
            var audioPlayer = document.querySelector(".main-block-play");
            audioPlayer.src = "../../users_media/music/" + filename + '.mp3';
            audioPlayer.play();
        }
    });

})();