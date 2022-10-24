import vimeoPlayer from '@vimeo/player';
import throttle from 'throttleit';
const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);
setCurrentTime();

player.on('timeupdate', throttle(pauseTime,1000));

function pauseTime(data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
}
function setCurrentTime() {
  const timeToPause = localStorage.getItem('videoplayer-current-time');
  if (timeToPause) {
    player.setCurrentTime(timeToPause);
  }
}
