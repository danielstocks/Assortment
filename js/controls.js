(function(exports) {

var controls = {
  randomize : document.getElementById("randomize"),
  play : document.getElementById("play"),
  items : document.getElementById("num-items")
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

})(window);
