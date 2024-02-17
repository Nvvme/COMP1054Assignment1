// the below code is taken from https://stackoverflow.com/questions/63733319/javascript-mp3-player-play-pause-toggle-functionality
//its A simple music player

var playButton = document.querySelector('#play-button');
var firstSong = new Audio('https://ia804504.us.archive.org/14/items/IDontWantToSetTheWorldOnFireTheInkSpots/I%20Don%27t%20Want%20To%20Set%20The%20World%20On%20Fire-The%20Ink%20Spots.mp3?cnt=0');
//asset taken from archive.org
// my song
var trackList = [firstSong];

function currentSong() {
    for(var i=0; i<trackList.length; i++) {
        var songID = document.querySelector('#stateicon');
        if (trackList[i].paused) {
            songID.className = 'fas fa-pause';
            trackList[i].play();
        } else {
            songID.className = 'fas fa-play';
            trackList[i].pause();
        }
    }
}
// we don't really need the forward and backward buttons




//A special surprise
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles.css'; 
        link.id = 'dynamic-style'; // Assigned an ID for easy removal

        document.head.appendChild(link);

        //timeout to remove the link after 1 minute
        setTimeout(function() {
            const dynamicStyle = document.getElementById('dynamic-style');
            if (dynamicStyle) {
                document.head.removeChild(dynamicStyle);
            }
        }, 60000); // 60000 milliseconds = 1 minute
    });
});
