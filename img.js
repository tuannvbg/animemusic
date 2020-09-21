// For random image

var randomImg=["https://catbox.moe/pictures/qts/1416301704148.png","https://catbox.moe/pictures/qts/1424092566613.png","https://catbox.moe/pictures/qts/1428177904344.png","https://catbox.moe/pictures/qts/1428707759205.png","https://catbox.moe/pictures/qts/1435212506997.png","https://catbox.moe/pictures/qts/1444797896875.png","https://catbox.moe/pictures/qts/1512072270390.png","https://catbox.moe/pictures/qts/1512276789957.png","https://catbox.moe/pictures/qts/patreon-3.png","https://mocah.org/uploads/posts/4561885-anime.png"];

var num = Math.floor(Math.random() * randomImg.length );

var imgUrl = randomImg[num];

document.getElementById('grillImg').src=imgUrl;

var backup="https://mocah.org/uploads/posts/4561885-anime.png";

function SaveImgUrl(url) {
    var img = document.getElementById("grillImg");
    if (!img.src || !img.src.length || img.src.length === 0) {
        img.src = url;
    }
}

SaveImgUrl(backup);
