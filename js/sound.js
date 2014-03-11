(function(exports) {

window.AudioContext = window.AudioContext||window.webkitAudioContext

var minFreq = 200;
var maxFreq = 1100;
var context = new AudioContext();
var sound = {}

gainNode = context.createGainNode();
oscillator = context.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(context.destination);
gainNode.gain.value = 0.0;
oscillator.start(0);

sound.draw = function(i) {
  var step = ((maxFreq - minFreq) / currentList.length);
  oscillator.frequency.value = (swaps[i][1] * step) + minFreq;
}

sound.mute = function() {
  gainNode.gain.value = 0.0;
}

sound.unmute = function() {
  gainNode.gain.value = 0.1;
}

oscillator.frequency.value += 10
exports.sound = sound;

})(window);
