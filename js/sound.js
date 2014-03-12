(function(exports) {

window.AudioContext = window.AudioContext || window.webkitAudioContext

var minFreq = 150;
var maxFreq = 500;
var context = new AudioContext();
var sound = {}

var pannerNode = context.createPanner();
pannerNode.setPosition(10, 5, 0);

var pannerNode2 = context.createPanner();
pannerNode2.setPosition(-10, -5, 0);

var gainNode = context.createGain();
var gainNode2 = context.createGain();

gainNode.connect(pannerNode);
gainNode.gain.value = 0.0;

gainNode2.connect(pannerNode2);
gainNode2.gain.value = 0.0;

pannerNode.connect(context.destination);
pannerNode2.connect(context.destination);

function osc(type, pan) {
  var oscillator = context.createOscillator();
  oscillator.type = type;
  if(pan == "left") {
    oscillator.connect(gainNode);
  } else {
    oscillator.connect(gainNode2);
  }
  oscillator.start(0);
  oscillator.frequency.value = 0;
  return oscillator
}

sound.draw = function(i) {
  var step = ((maxFreq - minFreq) / currentList.length);
  var o1 = osc(1, "left");
  var o2 = osc(2, "right");
  o1.frequency.value = (swaps[i][1] * step) + minFreq;
  o2.frequency.value = (swaps[i][2] * step) + minFreq;
  window.setTimeout(function() {
    o1.stop(0);
    o1.disconnect();
    o2.disconnect();
  }, 50);
}

sound.mute = function() {
  gainNode.gain.value = 0.0;
  gainNode2.gain.value = 0.0;
}

sound.unmute = function() {
  gainNode.gain.value = 0.05;
  gainNode2.gain.value = 0.05;
}

state.on("sound-mute", sound.mute);
state.on("sound-unmute", sound.unmute);

exports.sound = sound;

})(window);
