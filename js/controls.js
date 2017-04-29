((exports => {

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

controls.items.onchange = () => {
  state.trigger("animation-stop");
  currentList = randomArray();
  state.trigger("new-list");
  chart.draw();
}

controls.randomize.onclick = e => {
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

state.on("new-list", () => {
  sorted = false;
});
state.on("animation-end", () => {
  controls.play.innerHTML = "replay";
});
state.on("animation-stop", () => {
  controls.play.innerHTML = "play";
});
state.on("animation-pause", () => {
  controls.play.innerHTML = "play";
});
state.on("animation-play", () => {
  controls.play.innerHTML = "pause";
});

state.on("sound-mute", () => {
  controls.mute.innerHTML = "unmute";
});
state.on("sound-unmute", () => {
  controls.mute.innerHTML = "mute";
});

}))(window);
