// initialize
console.log('from script.js');

// elements
var search_menu = document.getElementById("search_menu");
var body = document.getElementById("body");
var main = document.getElementById("main");

// ui
var ui_switch_search = false;


// class checker
if (ui_switch_search == false) {
  body.classList.add("ui_switch_search_false");
}

// functions
function copy_Link() {
  /* Get the text field */
  var parentNode = event.target.parentNode;
  var targetChildNode = parentNode.childNodes[1].value;
  console.log(parentNode);
  console.log(targetChildNode);

  var copyText = parentNode.childNodes[1];

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  console.log("Copied the text: " + targetChildNode);
};

function cLog(x) {
    console.log('from: cLog = ' + x);
}

// events
search_menu.addEventListener("click", function() {

  if (ui_switch_search == false) {
    body.classList.add("ui_switch_search_false");
    body.classList.remove("ui_switch_search_true");
    ui_switch_search = true;
    cLog('ui_switch_search: ' + ui_switch_search);
    return;
  }

  if (ui_switch_search == true) {
    body.classList.remove("ui_switch_search_false");
    body.classList.add("ui_switch_search_true");
    ui_switch_search = false;
    cLog('ui_switch_search: ' + ui_switch_search);
    return;
  }


});

window.onload = function() {
  console.log("window.onload");
}