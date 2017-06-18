
function Songs(song, artist, album, genre){
	this.song = song;
	this.artist = artist;
	this.album = album;
	this.genre = genre;
	var musicGenre;
	var pList;
	var songId = new Date().getTime();

	this.getId = function(){
		return songId
	}

	this.songInfo = function(){
		return this.song + " :" + this.artist;
	}


	// this.getSong = function(){
	// 	return document.getElementById(this.tune).src;
	// };

	// this.setAudio = function(){
	// 	var audio = document.getElementsByTagName(audioTag);
	// 	audio.preload = 'auto';	
	// 	return audio;	
	// }

	// this.playCurrentSong = function(audioTag){
	// 	var audio = document.getElementsByTagName(audioTag)[0];
	// 	audio.preload = 'auto';	
	// 	audio.play();
	// }
}
// var PlaySong = new Songs(1, 'song-play');

Songs.prototype.createMusicGenre = function(){
	musicGenre = this.createGenreObj();
	musicGenre.songId = this.getId();
	musicGenre.song = this.song;
	musicGenre.artist = this.artist;
	musicGenre.album = this.album;
	musicGenre.genre = this.genre;
		return musicGenre;
};

Songs.prototype.createPlayList = function(){
	pList.push(this.createMusicGenre());
		return pList;
};


function Music(){
	Songs.apply(this, arguments);
}

Music.prototype = new Songs();

Music.prototype.createMusicGenre = function(){
	musicGenre = this.createGenreObj();
	musicGenre.songId = this.getId();
	musicGenre.song = this.song;
	musicGenre.artist = this.artist;
	musicGenre.album = this.album;
	musicGenre.genre = this.genre;
		return musicGenre;
};


Music.prototype.createPlayList = function(){
	pList = this.createPlistArr();
	pList.push(this.createMusicGenre());
		return pList;
};


// ---------------- test run of Music conctructor

var rockMusic = new Music("Scar Tissue");
rockMusic.artist = "RHCP";
rockMusic.album = "Californication";
rockMusic.genre = "Alternative Rock"







// ---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function(){
	console.log('hello world');

	var song = document.getElementById('song-play');
		console.log(song);

	function playSong(){
		// debugger;
		song.play();
	}

	function pauseSong(){
		song.pause();
	}

		var songToPlay = document.getElementById('track-1');
		songToPlay.addEventListener('click', playSong);

		songToPlay.addEventListener('dblclick', pauseSong);

})

	// PlaySong.playCurrentSong(x);

	// var audio = document.getElementsByTagName('audio')
	// song = CurrentSong.getSong();
	// var play = CurrentSong.playCurrentSong();

		// song = audio.src; 
		// console.log(song);
	// var sound = new Audio(song);
	// console.log(sound + "I am NOT hearing you");

	// function playSong(song){
		// var elem = document.getElementById('current-song');
		// var audio = document.createElement('audio');
		// elem.appendChild(audio);
		// var audio = document.getElementsByTagName('audio');
		// audio.preload = 'auto';

		// audio.src = song;
		// console.log(play);
		// 	play();
			// console.log("Can you hear me!!!!!")
	// }

	// var songToPlay = document.getElementById('track-1');
	// 	songToPlay.addEventListener('click',playSong);




