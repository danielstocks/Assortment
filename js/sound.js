(function(exports) {

window.AudioContext = window.AudioContext || window.webkitAudioContext

var sound = {}
var minFreq = 175;
var maxFreq = 600;
var context = new AudioContext();
var volume = 0.5;

function playOscillator(freq, type, pan) {
    var node = context.createGain();
    var panner = context.createPanner();
    var oscillator = context.createOscillator();
    if(pan) {
      panner.setPosition(10, 5, 0);
    } else {
      panner.setPosition(-10, -5, 0);
    }
    node.connect(panner);
    panner.connect(context.destination);
    node.gain.value = 0.0;
    oscillator.type = type;
    oscillator.frequency.value = freq;
    oscillator.connect(node);
    oscillator.start(context.currentTime);
    node.gain.value = volume;
    oscillator.stop(context.currentTime + 0.5);

    // The sound should last for 250ms
    setTimeout(function() {
      node.gain.value = 0;
    }, 300);
    return oscillator;
}


sound.draw = function(i) {
  var step = ((maxFreq - minFreq) / currentList.length);
  var v1 = (swaps[i][1] * step) + minFreq;
  var v2 = (swaps[i][2] * step) + minFreq;
  if(isFinite(v1)) {
    playOscillator(v1, "triangle", true);
  }
  if(isFinite(v2)) {
    playOscillator(v2, "square");
  }
}

sound.mute = function() {
  volume = 0;
}

sound.unmute = function() {
  volume = 0.5;
}

state.on("sound-mute", sound.mute);
state.on("sound-unmute", sound.unmute);

exports.sound = sound;

})(window);
