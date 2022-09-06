
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        
        height: "390",
        width: "520",
        videoId: '74icGOK7jKw',
        playerVars: {
            autoplay: 0,
            controls: 1,
            showinfo: 0, 
            modestbranding: 0, 
            start: 30
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    // $("#playButton").on("click", function () {
    //     $("h2").text(player.getVideoData().title);
    //     player.playVideo();
    // }
    // )
    player.playVideo();
    player.seekTo(65);
    setInterval(function () {
        var sec = Math.round(player.getCurrentTime() * 10) / 10;
        if (sec > 555) {
            player.seekTo(65);
        }
        if (sec < 65) {
            player.seekTo(65);
        }
    }, 1000);
}


