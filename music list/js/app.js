let $ = document;

let players = $.querySelectorAll(".fa-play");
let audios = $.querySelectorAll("audio")

let musicName;

players.forEach(function (player) {
    player.addEventListener("click", function (event) {
        musicName = event.target.dataset.name;

        audios.forEach(function (audio) {
            if (audio.dataset.name === musicName) {
                audio.play();
            } else {
                audio.pause();
            }
        })
    })
})