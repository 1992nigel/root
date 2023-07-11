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
    //console.log("24 frames: " + currentframe);
    
    if (currentframe == 24) {
      currentframe = 0;
    }

  }, (1000/24));
  
  setInterval(
  function(){
    currentseconds += 1;
    //console.log("currentseconds: " + currentseconds);
  },1000);

};


var content = document.getElementById("content");

var menu_top = document.getElementById("menu_top");
var menu_mid = document.getElementById("menu_mid");
var menu_bottom = document.getElementById("menu_bottom");
var signal = document.getElementById("signal");

console.log(window);

signal.innerHTML = content.scrollTop;

// onscroll events

content.onscroll = function(e) {

  new_scroll = this.scrollTop;

  if (new_scroll==0) {

    menu_top.classList.remove("started_scrolling");
    menu_mid.classList.remove("started_scrolling");
    menu_bottom.classList.remove("started_scrolling");
  
  };

  if (new_scroll>0) {

    menu_top.classList.add("started_scrolling");
    menu_mid.classList.add("started_scrolling");
    menu_bottom.classList.add("started_scrolling");
  
  };


  signal.innerHTML = 'scrollTop:' + this.scrollTop;

  console.log(e);
  console.log(this.scrollTop);
  console.log(this.scrollLeft);

};

// mouse events

menu_top.onmouseover = function(e) {
  console.log('mouseover' + e)
};

menu_top.onmouseout = function(e) {
  console.log('mouseout' + e)
};

menu_top.onclick = function(e) {
  console.log('onclick' + e)
};

menu_top.oncontextmenu = function(e) {
  console.log('oncontextmenu' + e)
};

menu_top.ondblclick = function(e) {
  console.log('ondblclick' + e)
};

menu_top.onmousedown = function(e) {
  console.log('onmousedown' + e)
};

menu_top.onmouseenter = function(e) {
  console.log('onmouseenter' + e)
};

menu_top.onmouseleave = function(e) {
  console.log('onmouseleave' + e)
};

menu_top.onmousemove = function(e) {
  console.log('onmousemove' + e)
};

menu_top.onmouseout = function(e) {
  console.log('onmouseout' + e)
};

menu_top.onmouseover = function(e) {
  console.log('onmouseover' + e)
};

menu_top.onmouseup = function(e) {
  console.log('onmouseup' + e)
};

// window events

window.onload = function() {
	console.log('window.onload');
	setIntervalFunction();
};