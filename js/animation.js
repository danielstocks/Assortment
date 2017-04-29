((exports => {

var animation = {};
var frame;
var i = 0;

/* Limit framerate */
var fps = 60;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

document.getElementById("fps").onchange = function() {
  fps = parseInt(this.value);
  interval = 1000/fps;
}

animation.start = list => {
  sound.unmute();
  (function animloop(timestamp){
    frame = window.requestAnimationFrame(animloop);

    now = Date.now();
    delta = now - then;

    if (delta > interval) {
      then = now - (delta % interval);
      if(i < list.length) {
        currentList = list[i][0];
        chart.draw(i);
        sound.draw(i);
      } else {
        chart.draw(i);
        sound.mute();
        state.trigger("animation-stop");
        state.trigger("animation-end");
        rewind();
        return;
      }
      i++;
    }
  })();
}

function rewind() {
  i = 0;
}

animation.pause = () => {
  window.cancelAnimationFrame(frame);
  sound.mute();
}

animation.stop = () => {
  sound.mute();
  window.cancelAnimationFrame(frame);
  frame = null;
  i = 0;
}

state.on("animation-pause", animation.pause);
state.on("animation-play", animation.start);
state.on("animation-stop", animation.stop);


}))(window);
