// initialize
console.log('from script.js');

console.log(localStorage);

var newPageLoadCountValue = Number(localStorage.getItem('pageLoadCount')) + 1;
localStorage.setItem('pageLoadCount', newPageLoadCountValue);

console.log(localStorage.pageLoadCount);


// elements
var search = document.getElementById("s");
var body = document.getElementById("body");
var main = document.getElementById("main");

// ui states
var ui_switch_1 = false;
var ui_switch_2 = false;
var ui_switch_searchform = false;

var menu_ui = false;
var menu_div;

// functions
function cLog(x) {
    console.log('from: cLog = ' + x);
}

if ( (document.getElementById("menu")) ) {
  document.getElementById("menu").addEventListener("click", function() {

    if (menu_ui) {
      body.classList.add("menu");
      body.classList.remove("menu");
      menu_ui = false;
      cLog('menu: ' + menu_ui);
      return;
    }

    if (!menu_ui) {
      body.classList.remove("menu");
      body.classList.add("menu");
      menu_ui = true;
      cLog('menu: ' + menu_ui);
      return;
    }
  });
};

document.getElementById("searchform").addEventListener("click", function() {

  // check for focus
  var isFocused = (document.activeElement === search);

  if (!isFocused) {
    body.classList.add("ui_switch_searchform_false");
    body.classList.remove("ui_switch_searchform_true");
    ui_switch_searchform = false;
    cLog('ui_switch_searchform: ' + ui_switch_searchform);
    return;
  }

  if (isFocused) {
    body.classList.remove("ui_switch_searchform_false");
    body.classList.add("ui_switch_searchform_true");
    ui_switch_searchform = true;
    cLog('ui_switch_searchform: ' + ui_switch_searchform);
    return;
  }

  console.log(isFocused);

});

// class
var uiFocusSearch = function() {
    search.focus();
};

var uiSwitcher1 = function() {

  if (!ui_switch_1) {
    body.classList.add("ui_switch_1_false");
    body.classList.remove("ui_switch_1_true");
    ui_switch_1 = true;
    cLog('ui_switch_1: ' + ui_switch_1);
    return;
  }

  if (ui_switch_1) {
    body.classList.remove("ui_switch_1_false");
    body.classList.add("ui_switch_1_true");
    ui_switch_1 = false;
    cLog('ui_switch_1: ' + ui_switch_1);
    return;
  }

};

var uiSwitcher2 = function() {

  if (!ui_switch_2) {
    body.classList.add("ui_switch_2_false");
    body.classList.remove("ui_switch_2_true");
    ui_switch_2 = true;
    cLog('ui_switch_2: ' + ui_switch_2);
    return;
  }

  if (ui_switch_2) {
    body.classList.remove("ui_switch_2_false");
    body.classList.add("ui_switch_2_true");
    ui_switch_2 = false;
    cLog('ui_switch_2: ' + ui_switch_2);
    return;
  }

};


// events
window.addEventListener("click", function() {

  // check for focus
  var isFocused = (document.activeElement === search);

  if (!isFocused) {
    body.classList.add("ui_switch_searchform_false");
    body.classList.remove("ui_switch_searchform_true");
    ui_switch_searchform = false;
    cLog('ui_switch_searchform: ' + ui_switch_searchform);
    return;
  }

  if (isFocused) {
    body.classList.remove("ui_switch_searchform_false");
    body.classList.add("ui_switch_searchform_true");
    ui_switch_searchform = true;
    cLog('ui_switch_searchform: ' + ui_switch_searchform);
    return;
  }

  console.log(isFocused);

});

window.onload = function() {
  console.log("window.onload");
};