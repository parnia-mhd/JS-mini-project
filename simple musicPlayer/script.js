let audioElem = document.querySelector("audio");
let musicSrc = [
    'media/bazar.m4a',
    'media/html.m4a',
    'media/kar.m4a'
];
let audioIndex = 0;


function minusHandler() {
    audioElem.currentTime -= 5;
}

function previousMusicHandler() {
    audioIndex--;
    if (audioIndex < 0) {
        audioIndex = 2;
    }
    audioElem.setAttribute("src", musicSrc[audioIndex]);
    playHandler();
}

function playHandler() {
    audioElem.play()
    console.log("play shod :)");
}

function pauseMusicHandler() {
    audioElem.pause();
    console.log("pause shod :)");
}

function NextMusicHandler() {
    audioIndex++;
    if (audioIndex > musicSrc.length - 1) {
        audioIndex = 0;
    }
    audioElem.setAttribute("src", musicSrc[audioIndex])
    playHandler()
}

function playBackRateHandler() {
    audioElem.playbackRate = 2;
}

function plusHandler() {
    audioElem.currentTime += 5;
}