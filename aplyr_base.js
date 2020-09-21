// APlayer Base Js

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#616161',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: true,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Music2',
            artist: 'Artist2',
            url: '[Link_to_audio]',
            cover: '[Cover_link]',
            lrc: '[lrc file link]',
            theme: '#46718b'
        },
        {
            name: 'Music1',
            artist: 'Artist1',
            url: '[Link_to_audio]',
            cover: '[Cover_link]',
            lrc: '[lrc file link]',
            theme: '#46718b'
        }
    ]
});

// Key Bindings

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 9) {  // tab
        ap.list.toggle();
    }
    else if(event.keyCode == 32) { //space
        ap.toggle();
    }
    else if(event.keyCode == 40) { //down arrow
        ap.skipForward();
    }
    else if(event.keyCode==38) { // top
        ap.skipBack();
    }
    else if(event.keyCode==39) {
        //left arrow
        ap.seek(ap.audio.currentTime+10);
    }
    else if(event.keyCode==37){
        //right arrow
        ap.seek(ap.audio.currentTime-10);
    }
});
