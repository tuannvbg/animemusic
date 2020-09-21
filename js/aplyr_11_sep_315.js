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
            lrc: 'https://files.catbox.moe/fyv5b2.lrc',
            theme: '#616161'
        },
        {
            name: 'Zen Zen Zense',
            artist: 'RADWIMPS',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
            theme: '#616161'
        },
        { 
            name: 'Shinzou wo Sasageyo',
            artist: 'Linked Horizon',
            url: 'https://music.yolodev.workers.dev/1:/Music/Linked%20Horizon%20-%20Shinzou%20wo%20Sasageyo%20%5BVOSTFR%5D.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/Annotation%202020-09-10%20162421.png',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        { 
            name: 'Unravel',
            artist: 'TK',
            url: 'https://music.yolodev.workers.dev/1:/Music/unravel%20-%20TK%20from%20%E5%87%9B%E3%81%A8%E3%81%97%E3%81%A6%E6%99%82%E9%9B%A8%20%5BOriginal%5D.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/unravel%20final.png',
            theme: '#46718b'
        },
        { 
            name: 'Kawaki wo ameku',
            artist: 'Minami',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E7%BE%8E%E6%B3%A2%E3%80%8C%E3%82%AB%E3%83%AF%E3%82%AD%E3%83%B2%E3%82%A2%E3%83%A1%E3%82%AF%E3%80%8DMV.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/crying%20for%20rain.png',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: 'Ai ni Dekiru Koto wa Mada Aru Kai',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/%E6%84%9B%E3%81%AB%E3%81%A6%E3%82%99%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%BE%E3%81%9F%E3%82%99%E3%81%82%E3%82%8B%E3%81%8B%E3%81%84%20RADWIMPS%20MV.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/what%20more%20can%20lovd%20do.png',
            lrc: '',
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
            lrc: '',
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
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Nandemonnaiya',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/Nandemonaiya%20(Movie%20Version)%20-%20RADWIMPS%20Kimi%20No%20Na%20Wa%20(Your%20Name.).mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/nandemonaiya.png',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Inferno',
            artist: 'Mrs. GREEN APPLE',
            url: 'https://music.yolodev.workers.dev/1:/Music/Mrs.%20GREEN%20APPLE%20-%20%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A7%E3%83%AB%E3%83%8E%EF%BC%88Inferno%EF%BC%89.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/inferno%20.png',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'PHOENIX',
            artist: 'BURNOUT SYNDROMES',
            url: 'https://music.yolodev.workers.dev/1:/Music/Haikyuu%20Season%204%20Opening%20Full%E3%80%8EBURNOUT%20SYNDROMES%20-%20PHOENIX%E3%80%8F.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/burnout%20syndromes.png',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Colors',
            artist: 'Flow',
            url: 'https://music.yolodev.workers.dev/1:/Music/FLOW%20-%20Colors.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/flow%20(code%20geass).png',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Gurenge',
            artist: 'LiSA',
            url: 'https://music.yolodev.workers.dev/1:/Music/Demon%20Slayer%20Kimetsu%20no%20Yaiba%20Opening%20Full%E3%80%8ELiSA%20-%20Gurenge%E3%80%8F%E3%80%90ENG%20Sub%E3%80%91.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/gurenge.png',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'BLUE ENCOUNT',
            artist: 'Polaris',
            url: 'https://music.yolodev.workers.dev/1:/Music/Boku%20no%20Hero%20Academia%20Season%204%20Opening%20Full%E3%80%8EBLUE%20ENCOUNT%20-%20Polaris%E3%80%8F.mp3',
            cover: 'https://music.yolodev.workers.dev/1:/Poster/blue%20encount.png',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Black Rover',
            artist: 'Vickeblanka',
            url: 'https://music.yolodev.workers.dev/1:/Music/Black%20Clover%20Opening%203%20Full%E3%80%8EBlack%20Rover%E3%80%8Fby%20Vickeblanka%20.mp3',
            cover: 'https://c-sf.smule.com/rs-s80/arr/af/7d/c7f63590-2a0b-46a7-ac3f-cbe25ea165f8_1024.jpg',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Black Catcher',
            artist: 'Vickeblanka',
            url: 'https://music.yolodev.workers.dev/1:/Music/Black%20Clover%20Opening%2010%20Full%E3%80%8EVickeblanka%20-%20Black%20Catcher%E3%80%8F.mp3',
            cover: 'https://c-sf.smule.com/rs-s-sf-1/arr/f0/58/3d4e01ef-3903-45ed-841d-fc5ed31fe0b7_1024.jpg',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Fukashigi no Carte',
            artist: 'Shayne',
            url: 'https://music.yolodev.workers.dev/1:/Music/[%E4%B8%8D%E5%8F%AF%E6%80%9D%E8%AD%B0%E3%81%AE%E3%82%AB%E3%83%AB%E3%83%86]%20Fukashigi%20no%20Carte%20FULL%20VER..mp3',
            cover: 'https://i1.sndcdn.com/artworks-000606986371-ebh2wq-t500x500.jpg',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Grand Escape',
            artist: 'RADWIMPS',
            url: 'https://music.yolodev.workers.dev/1:/Music/%5BFull%20Ver.%5D%20Weathering%20With%20You%20-%20Grand%20Escape%20MV%20(1).mp3',
            cover: 'https://i.redd.it/90b6vmtstvv41.jpg',
            lrc: '',
            theme: '#46718b'
        }
    ]
});
/*
const ap_min = new APlayer({
    container: document.getElementById('aplayer-min'),
    lrcType: 3,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    fixed: true,
    audio: [{
        name: 'Mukanjyo',
        artist: 'Survive Said The Prophet',
        url: 'https://music.yolodev.workers.dev/1:/mukanjyo.mp3',
        cover: 'https://music.yolodev.workers.dev/1:/mukanjyo_poster.jpg',
        lrc: 'mukanjyo_lrycs.lrc',
        theme: '#ebd0c2'
    },
    {
        name: 'Zen Zen Zense',
        artist: 'RADWIMPS',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
        theme: '#505d6b'
    },
    {
        name: 'name2',
        artist: 'artist2',
        url: 'url2.mp3',
        cover: 'cover2.jpg',
        lrc: 'lrc2.lrc',
        theme: '#46718b'
    }]
});


*/

/*
        {
            name: '',
            artist: '',
            url: '',
            cover: '',
            lrc: '',
            theme: '#46718b'
        },
*/

