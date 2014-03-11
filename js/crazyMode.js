(function(exports){

  var running = false;
  var frame;
  function animate() {
    currentList = randomArray(100);
    chart.fillScreen();
    chart.draw();
    frame = window.requestAnimationFrame(animate);
  }
  crazyMode = {}
  crazyMode.start = function() {
    if(!running) {
      animate();
    }
    running = true;
  }
  crazyMode.stop = function() {
    window.cancelAnimationFrame(frame);
    running = false;
  };
  exports.crazyMode = crazyMode;

})(window);
