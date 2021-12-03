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
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Mỹ Nhân',
            artist: 'Đinh Đại Vũ',
            url: 'https://dl.dropboxusercontent.com/s/0d2ooyr1d3eg3s7/Dinh.Dai.Vu-My.Nhan.mp3',
            cover: 'https://avatar-ex-swe.nixcdn.com/song/2019/11/28/1/e/6/0/1574932935845.jpg',
            lrc: 'https://static-zmp3.zadn.vn/lyrics/4/a/b/5/4ab5f4fd09865878c23d4aea76a14fce.lrc',
            theme: '#46718b'
        },
        {
            name: 'Vầng Trăng Khóc Remix',
            artist: 'Minh Vương M4U, Hương Ly, ACV',
            url: 'https://dl.dropboxusercontent.com/s/n2ujb20yv5z4q72/Minh.Vuong.M4U-Huong.Ly-ACV-Vang.Trang.Khoc.mp3',
            cover: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/03/06/1/0/a/4/1520308951432.jpg',
            lrc: 'https://dl.dropboxusercontent.com/s/v3mu9tbdk2uhee1/Minh.Vuong.M4U-Huong.Ly-ACV-Vang.Trang.Khoc.lrc',
            theme: '#46718b'
        }
    ]
});

// Key Bindings

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {  // a
        ap.list.toggle();
    }
    else if(event.keyCode == 80) { //p
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
