(function(exports) {

var chart = {}
var canvas = document.getElementById('chart')
var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false

chart.draw = function(i) {

  var list = currentList;
  var listLength = list.length;
  var barWidth = canvas.width / listLength;
  var barHeight = canvas.height / listLength;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  list.forEach(function(item, index) {

    ctx.fillStyle = "#ccc";
    if(swaps[i]) {
      if(index == swaps[i][1]) {
        ctx.fillStyle = "green";
      }
      if(index == swaps[i][2]) {
        ctx.fillStyle = "maroon";
      }
    }

    ctx.fillRect(index * barWidth, canvas.height, barWidth - 1, -item * barHeight)
  });
}

chart.fillScreen = function() {
  w = canvas.parentNode.offsetWidth;
  h = canvas.parentNode.offsetHeight;
  canvas.width = w;
  canvas.height = (h - 44)
}

window.onresize = function() {
  chart.fillScreen();
  chart.draw();
}

exports.chart = chart

})(window);
