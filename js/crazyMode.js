((exports => {

  var running = false;
  var frame;
  function animate() {
    currentList = randomArray(100);
    chart.fillScreen();
    chart.draw();
    frame = window.requestAnimationFrame(animate);
  }
  crazyMode = {}
  crazyMode.start = () => {
    if(!running) {
      animate();
    }
    running = true;
  }
  crazyMode.stop = () => {
    window.cancelAnimationFrame(frame);
    running = false;
  };
  exports.crazyMode = crazyMode;

}))(window);
