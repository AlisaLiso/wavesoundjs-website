import WaveSoundjs from 'wavesoundjs';
import points from './points';
import syntaxHighlight from './syntaxHighlight'

syntaxHighlight(document.getElementById("html"));
const player_container = document.querySelector('.container');

WaveSoundjs.create({
  container: player_container,
  points: points
})
