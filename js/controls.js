(function(exports) {

var controls = {
  randomize : document.getElementById("randomize"),
  play : document.getElementById("play"),
  mute : document.getElementById("mute"),
  items : document.getElementById("num-items")
}

controls.mute.onclick = function(e) {
  e.preventDefault();
  if(this.innerHTML.trim() == "mute") {
    state.trigger("sound-mute");
  } else {
    state.trigger("sound-unmute");
  }
}

controls.items.onchange = function() {
  state.trigger("animation-stop");
  currentList = randomArray();
  state.trigger("new-list");
  chart.draw();
}

controls.randomize.onclick = function(e) {
  e.preventDefault();
  state.trigger("animation-stop");
  currentList = randomArray();
  state.trigger("new-list");
  chart.draw();
}

sorted = false;
controls.play.onclick = function(e) {
  e.preventDefault();
  if(this.innerHTML.trim() == "pause") {
    return state.trigger("animation-pause");
  }
  if(!sorted) {
    swaps = [];
    sort(currentList);
    sorted = true;
  }
  state.trigger("animation-play", [swaps]);
}

state.on("new-list", function() {
  sorted = false;
});
state.on("animation-end", function() {
  controls.play.innerHTML = "replay";
});
state.on("animation-stop", function() {
  controls.play.innerHTML = "play";
});
state.on("animation-pause", function() {
  controls.play.innerHTML = "play";
});
state.on("animation-play", function() {
  controls.play.innerHTML = "pause";
});

state.on("sound-mute", function() {
  controls.mute.innerHTML = "unmute";
});
state.on("sound-unmute", function() {
  controls.mute.innerHTML = "mute";
});

})(window);
