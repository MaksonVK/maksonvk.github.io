$(document).ready(function() {


createSong();
createAudio();

function createSong(){
	let container = document.createElement('div');
	let playButton = document.createElement('button');
	playButton.innerHTML = 'Play';
	playButton.id = '178538';
	let name = document.createElement('span');
	name.innerHTML = 'Song Name and artist';

	container.appendChild(playButton);
	container.appendChild(name);

	document.body.appendChild(container);
}

function createAudio(){

	console.log('lalaks');
	let audio = document.createElement('audio');
	audio.setAttribute('controls', 'controls');
	audio.id = 'audio';

	let source = document.createElement('source');
	source.setAttribute('src', '');
	source.setAttribute('type', 'audio/mpeg');
	source.id = 'audioSource';

	audio.appendChild(source);

	document.body.appendChild(audio);
}

async function getTrackInfo(trackId, albumInfo, trackNumber){
	const baseUrl = 'https://music.yandex.ru';
	const options = {
        headers: {
            'X-Retpath-Y': encodeURIComponent('https://music.yandex.ru/')
        },
        redirect: 'error',
        credentials: 'include'
    };

    const trackInfoUrl = baseUrl + '/api/v2.1/handlers/track/' + trackId + '/track/download/m?hq=1';

    const trackSrc = await fetch(trackInfoUrl, options).then(function(resp){return resp.json()});
    const downloadInfo = await fetch(`${trackSrc.src}&format=json`).then(function(resp){return resp.json()});

    const salt = 'XGRlBW9FXlekgbPrRHuSiA';
    const hash = md5(salt + downloadInfo.path.substr(1) + downloadInfo.s);

    let trackInfoJSON = await fetch(`${baseUrl}/handlers/track.jsx?track=${trackId}`, options).then(function(resp){return resp.json()});

    let trackInfo = {
        url: `https://${downloadInfo.host}/get-mp3/${hash}/${downloadInfo.ts + downloadInfo.path}`,
        codec: trackSrc.codec,
        artist: trackInfoJSON.track.artists[0].name,
        title: trackInfoJSON.track.title,
        genre: trackInfoJSON.track.albums[0].genre,
        lyrics: trackInfoJSON.lyric[0].fullLyrics,
        label: trackInfoJSON.track.albums[0].labels[0].name,
        cover: 'https://' + trackInfoJSON.track.coverUri.split('%%')[0] + 'm1000x1000',
        album: trackInfoJSON.track.albums[0].title,
        albumArtist: trackInfoJSON.track.albums[0].artists[0].name,
        year: 20
    };

    if('lyrics' in trackInfoJSON)
        trackInfo.lyrics = trackInfoJSON.lyric[0].fullLyrics;
    if (trackNumber)
        trackInfo.number = trackNumber;

    return trackInfo.url;
};


$('button').on('click', async function(){
	console.log('click');

	let audio = document.getElementById('audio');
	let source = document.getElementById('audioSource');
	source.src = await getTrackInfo(this.id);
	console.log(this.id, source.src);

	audio.load();
	audio.play();

});

});
