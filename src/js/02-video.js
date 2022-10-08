
import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
  


player.on('timeupdate', throttle(onTimeSet, 1000));
 
function onTimeSet({ seconds }) {
    console.log(seconds) 
localStorage.setItem(LOCALSTORAGE_KEY, seconds)
} 

    let savedTimeSet = localStorage.getItem(LOCALSTORAGE_KEY) === null ? 0 : localStorage.getItem(LOCALSTORAGE_KEY);
    player.setCurrentTime(savedTimeSet) 
  