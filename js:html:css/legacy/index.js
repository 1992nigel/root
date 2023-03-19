console.log('from: index.js');

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
};

var currentseconds = 0;
var currentframe = 0;

function setIntervalFunction() {

  setInterval(
  function(){
    currentframe += 1;
    console.log("24 frames: " + currentframe);
    
    if (currentframe == 24) {
      currentframe = 0;
    }

  }, (1000/24));
  
  setInterval(
  function(){
    currentseconds += 1;
    console.log("currentseconds: " + currentseconds);
  },1000);

};

window.onload = function() {
	console.log('window.onload');
	setIntervalFunction();
};