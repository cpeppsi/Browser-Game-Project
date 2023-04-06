//setting variables
let canvas;
let ctx;


//adding window.onload to execute functions on browser
window.onload = function() {
  //loading canvas onto page and adding 2d context
  canvas = document.getElementById('map')
  ctx = canvas.getContext('2d')

  //setiing size of canvas
  document.getElementById('map').height = window.innerHeight;
  document.getElementById('map').width = window.innerWidth;
}