var renderSong = function(songContent) {

    var songEntry = '<div class="pList">';
    songEntry += '<audio class="songPlay>'
    songEntry += '<p class="list-song">Song: ' + songContent.name + '</p>';
    songEntry += '<p class="list-artist">Artist: ' + songContent.artist + '</p>';
    songEntry += '<p class="list-album">Album: ' + songContent.album + '</p>';
    songEntry += '<p class="list-genre">Genre: ' + songContent.genre + '</p>';
    songEntry += '</audio>'
    songEntry += '</div>';

    return songEntry;

};

function renderPlayList(songs) {

    var playList = document.getElementById("play-listing");
    var songContentEntry = " ";

    for (var prop in songs) {

        songContentEntry = renderSong(songs[prop]);
        playList.innerHTML += songContentEntry;

    }

};


document.addEventListener("DOMContentLoaded", function() {

    var song = document.getElementById('song-play');

    function playSong() {

        song.play();
    }

    function pauseSong() {
        song.pause();
    }

    fetch('/songs').then(function(response) {

        return response.json();

    }).then(function(data) {

        renderPlayList(data.songs);

    })

    var songToPlay = document.getElementById('track-1');
    songToPlay.addEventListener('click', playSong);
    songToPlay.addEventListener('dblclick', pauseSong);

});
