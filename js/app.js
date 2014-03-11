(function(exports){

var currentList = randomArray();
var initial = window.location.hash.replace("#","") || "quick";
var sort = window[initial + "Sort"];
var topBar = document.getElementById("top");

function init() {
  chart.fillScreen();
  chart.draw(0, currentList);
  if(initial == "about"){
    document.body.classList.add("about");
    crazyMode.start();
  }
}

topBar.onclick = function(e) {

  if(e.target.id == "github") {
    return;
  }

  if(e.target.nodeName == "A") {

    state.trigger("animation-stop");

    topBar.querySelectorAll("a").forEach(function(el) {
      el.classList.remove("active");
    });
    e.target.classList.add("active");

    if(e.target.id == "nav-about") {
      document.body.classList.add("about");
      crazyMode.start();
      return;
    }

    document.body.classList.remove("about");
    crazyMode.stop();
    exports.sort = window[e.target.hash.replace("#","") + "Sort"];
    exports.currentList = randomArray();
    state.trigger("new-list");
    chart.draw();
  }
}

document.getElementById("nav-"+initial).classList.add("active");
NodeList.prototype.forEach = Array.prototype.forEach;

window.addEventListener('blur', function() {
  state.trigger("animation-pause");
});

exports.init = init;
exports.state = new EventEmitter();
exports.swaps = [];
exports.currentList = currentList;
exports.sort = sort;

})(window);
