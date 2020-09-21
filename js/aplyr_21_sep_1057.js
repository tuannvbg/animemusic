// 21 Sept 10:57pm IST 2020

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
            name: 'Mukanjyo',
            artist: 'Survive Said The Prophet',
            url: 'https://music.yolodev.workers.dev/1:/Music/mukanjyo.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/mukanjyo_poster.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/mukanjyo_lrycs.lrc',
            theme: '#616161'
        },
        {
            name: 'Zen Zen Zense',
            artist: 'RADWIMPS',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/zenzenzense.lrc',
            theme: '#616161'
        },
        {
            name: 'Shinzou wo Sasageyo',
            artist: 'Linked Horizon',
            url: 'https://music.yolodev.workers.dev/1:/Music/Linked%20Horizon%20-%20Shinzou%20wo%20Sasageyo%20%5BVOSTFR%5D.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/Annotation%202020-09-10%20162421.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/sasageyo.lrc',
            theme: '#46718b'
        },
        {
            name: 'Unravel',
            artist: 'TK',
            url: 'https://music.yolodev.workers.dev/1:/Music/unravel%20-%20TK%20from%20%E5%87%9B%E3%81%A8%E3%81%97%E3%81%A6%E6%99%82%E9%9B%A8%20%5BOriginal%5D.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/unravel%20final.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/unravel.lrc',
            theme: '#46718b'
        },
        {
            name: 'Kawaki wo ameku',
            artist: 'Minami',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E7%BE%8E%E6%B3%A2%E3%80%8C%E3%82%AB%E3%83%AF%E3%82%AD%E3%83%B2%E3%82%A2%E3%83%A1%E3%82%AF%E3%80%8DMV.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/crying%20for%20rain.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/kawaki_wo_ameku.lrc',
            theme: '#46718b'
        },
        {
            name: 'Ai ni Dekiru Koto wa Mada Aru Kai',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E6%84%9B%E3%81%AB%E3%81%A6%E3%82%99%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%BE%E3%81%9F%E3%82%99%E3%81%82%E3%82%8B%E3%81%8B%E3%81%84%20RADWIMPS%20MV.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/what%20more%20can%20lovd%20do.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/ai_ni_dekiru.lrc',
            theme: '#46718b'
        },
        {
            name: 'Daijoubu',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E5%A4%A7%E4%B8%88%E5%A4%AB%20RADWIMPS%20MV.mp3',
            cover: 'https://greenmoriyama.files.wordpress.com/2019/07/6b528e279a4e4ff87ba8f0d228d6d5bf1544709553_full.jpg',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'TOP',
            artist: 'Stray Kids',
            url: 'https://music.yolodev.workers.dev/1:/Music/Tower%20of%20God%20-%20Opening%20Full%E3%80%8ETOP%E3%80%8Fby%20Stray%20Kids.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/tower%20of%20god%20op.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/top.lrc',
            theme: '#46718b'
        },
        {
            name: 'Slump',
            artist: 'Stray Kids',
            url: 'https://music.yolodev.workers.dev/1:/Music/Stray%20Kids%20%E3%80%8ESLUMP%20-Japanese%20ver.-%E3%80%8FMusic%20Video(TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E7%A5%9E%E4%B9%8B%E5%A1%94%20-Tower%20of%20God-%E3%80%8Dver.).mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/slump.png',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Sparkle',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/Sparkle%20Your%20Name%20AMV.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/sparkle.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/sparkle.lrc',
            theme: '#46718b'
        },
        {
            name: 'Nandemonaiya',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/Nandemonaiya%20(Movie%20Version)%20-%20RADWIMPS%20Kimi%20No%20Na%20Wa%20(Your%20Name.).mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/nandemonaiya.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/nandemonaiya.lrc',
            theme: '#46718b'
        },
        {
            name: 'Inferno',
            artist: 'Mrs. GREEN APPLE',
            url: 'https://music.yolodev.workers.dev/1:/Music/Mrs.%20GREEN%20APPLE%20-%20%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A7%E3%83%AB%E3%83%8E%EF%BC%88Inferno%EF%BC%89.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/inferno%20.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/inferno.lrc',
            theme: '#46718b'
        },
        {
            name: 'Colors',
            artist: 'Flow',
            url: 'https://music.yolodev.workers.dev/1:/Music/FLOW%20-%20Colors.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/flow%20(code%20geass).png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/colors.lrc',
            theme: '#46718b'
        },
        {
            name: 'Gurenge',
            artist: 'LiSA',
            url: 'https://music.yolodev.workers.dev/1:/Music/Demon%20Slayer%20Kimetsu%20no%20Yaiba%20Opening%20Full%E3%80%8ELiSA%20-%20Gurenge%E3%80%8F%E3%80%90ENG%20Sub%E3%80%91.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/gurenge.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/gurenge.lrc',
            theme: '#46718b'
        },
        {
            name: 'BLUE ENCOUNT',
            artist: 'Polaris',
            url: 'https://music.yolodev.workers.dev/1:/Music/Boku%20no%20Hero%20Academia%20Season%204%20Opening%20Full%E3%80%8EBLUE%20ENCOUNT%20-%20Polaris%E3%80%8F.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/blue%20encount.png',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/blue_encount.lrc',
            theme: '#46718b'
        },
        {
            name: 'Black Rover',
            artist: 'Vickeblanka',
            url: 'https://music.yolodev.workers.dev/1:/Music/Black%20Clover%20Opening%203%20Full%E3%80%8EBlack%20Rover%E3%80%8Fby%20Vickeblanka%20.mp3',
            cover: 'https://c-sf.smule.com/rs-s80/arr/af/7d/c7f63590-2a0b-46a7-ac3f-cbe25ea165f8_1024.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/black_rover.lrc',
            theme: '#46718b'
        },
        {
            name: 'Black Catcher',
            artist: 'Vickeblanka',
            url: 'https://music.yolodev.workers.dev/1:/Music/Black%20Clover%20Opening%2010%20Full%E3%80%8EVickeblanka%20-%20Black%20Catcher%E3%80%8F.mp3',
            cover: 'https://c-sf.smule.com/rs-s-sf-1/arr/f0/58/3d4e01ef-3903-45ed-841d-fc5ed31fe0b7_1024.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/black_catcher.lrc',
            theme: '#46718b'
        },
        {
            name: 'Fukashigi no Carte',
            artist: 'Shayne',
            url: 'https://music.yolodev.workers.dev/1:/Music/[%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AD%B0%E3%81%AE%E3%82%AB%E3%83%AB%E3%83%86]%20Fukashigi%20no%20Carte%20FULL%20VER..mp3',
            cover: 'https://i1.sndcdn.com/artworks-000606986371-ebh2wq-t500x500.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/carte.lrc',
            theme: '#46718b'
        },
        {
            name: 'Grand Escape',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/%5BFull%20Ver.%5D%20Weathering%20With%20You%20-%20Grand%20Escape%20MV%20(1).mp3',
            cover: 'https://i.redd.it/90b6vmtstvv41.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/grand_escape.lrc',
            theme: '#46718b'
        },
        {
            name: 'Paradisus Paradoxum',
            artist: 'Myth & Roid',
            url: 'https://music.yolodev.workers.dev/1:/Music/Paradisus-Paradoxum.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/paradisus.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/paradisus.lrc',
            theme: '#46718b'
        },
        {
            name: 'Styx Helix',
            artist: 'Myth & Roid',
            url: 'https://music.yolodev.workers.dev/1:/Music/Styx_Helix.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/styxhelix.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/styxhelix.lrc',
            theme: '#46718b'
        },
        {
            name: 'Redo',
            artist: 'Konomi Suzuki',
            url: 'https://music.yolodev.workers.dev/1:/Music/Re_zero_op1.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/redo.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/redo.lrc',
            theme: '#46718b'
        },
        {
            name: 'Fireworks',
            artist: 'Daoko x Kenshi Yonezu',
            url: 'https://music.yolodev.workers.dev/1:/Music/fireworks.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/fireworks.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/fireworks.lrc',
            theme: '#46718b'
        },
        {
            name: 'Lemon',
            artist: 'Kenshi Yonezu',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20MV%E3%80%8CLemon%E3%80%8D.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/lemon.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/lemon.lrc',
            theme: '#46718b'
        },
        {
            name: 'Lemon [Cover]',
            artist: 'KOBASOLO & Harutya',
            url: 'https://music.yolodev.workers.dev/1:/Music/lemon.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/lemon_kobasolo.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/lemon_kobasolo.lrc',
            theme: '#46718b'
        },
        {
            name: 'Say So [Jap Cover]',
            artist: 'Rainych',
            url: 'https://music.yolodev.workers.dev/1:/Music/sayso.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/sayso.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/sayso.lrc',
            theme: '#46718b'
        },
        {
            name: 'Los! Los! Los!',
            artist: 'Aoi Yuki',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E5%B9%BC%E5%A5%B3%E6%88%A6%E8%A8%98%20ED%20Youjo%20Senki%20Ending%20%E3%80%8CFULL%E3%80%8D%20-%20Los%20Los%20Los%20-%20Tanya%20Degurechaff%20(%E6%82%A0%E6%9C%A8%20%E7%A2%A7).mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/losloslos.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/losloslos.lrc',
            theme: '#46718b'
        },
        {
            name: 'Kamado Tanjiro no uta',
            artist: 'Ryiandi Kusuma',
            url: 'https://music.yolodev.workers.dev/1:/Music/Demon%20Slayer%20Kimetsu%20no%20Yaiba%20ED%20(Ep19)%20Full%20-%20Kamado%20Tanjirou%20no%20Uta.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/tanjiro_no_uta.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/tanjiro_uta.lrc',
            theme: '#46718b'
        },
        {
            name: 'Yoru ni kakeru',
            artist: 'Yoasobi',
            url: 'https://music.yolodev.workers.dev/1:/Music/YOASOBI%20-%20%E5%A4%9C%E3%81%AB%E9%A7%86%E3%81%91%E3%82%8B%20Yoru%20ni%20Kakeru.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/Yoru_ni_Kakeru_cover_art.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/yoru_ni.lrc',
            theme: '#46718b'
        },
        {
            name: 'Ano yume wo nazotte',
            artist: 'Yoasobi',
            url: 'https://music.yolodev.workers.dev/1:/Music/YOASOBI%E3%80%8C%E3%81%82%E3%81%AE%E5%A4%A2%E3%82%92%E3%81%AA%E3%81%9E%E3%81%A3%E3%81%A6%E3%80%8D%20Official%20Music%20Video.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/Ano_Yume_o_Nazotte_cover_art.jpg',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'PHOENIX',
            artist: 'BURNOUT SYNDROMES',
            url: 'https://music.yolodev.workers.dev/1:/Music/Haikyuu%20Season%204%20Opening%20Full%E3%80%8EBURNOUT%20SYNDROMES%20-%20PHOENIX%E3%80%8F.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/phoenix_haikyuu.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/phoenix.lrc',
            theme: '#46718b'
        },
        {
            name: 'Fly High!!!',
            artist: 'BURNOUT SYNDROMES',
            url: 'https://music.yolodev.workers.dev/1:/Music/flyhigh.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/flyhigh.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/flyhigh.lrc',
            theme: '#46718b'
        },
        {
            name: 'Hikaiare',
            artist: 'BURNOUT SYNDROMES',
            url: 'https://music.yolodev.workers.dev/1:/Music/hikariare.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/hikariare.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/hikariare.lrc',
            theme: '#46718b'
        },
        {
            name: 'Veil',
            artist: 'Keina Suda',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E9%A0%88%E7%94%B0%E6%99%AF%E5%87%AA%E3%80%8Cveil%E3%80%8DMV.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/veil.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/veil.lrc',
            theme: '#46718b'
        },
        {
            name: 'Peace Sign',
            artist: 'Kenshi Yonezu',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20MV%E3%80%8C%E3%83%94%E3%83%BC%E3%82%B9%E3%82%B5%E3%82%A4%E3%83%B3%E3%80%8DKenshi%20Yonezu%20Peace%20Sign.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/peace_sign.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/menecho007/animemusic@master/lrc/peacesign.lrc',
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
