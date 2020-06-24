console.log('from script.js');

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