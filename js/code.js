function load() {
  var jsonCode = document.getElementsByClassName('json-code');
  for (var i = 0; i < jsonCode.length; i++) {
    var content = jsonCode[i].textContent;
    jsonCode[i].innerHTML = syntaxHighlight(content);

  }
};


/**
 * copy the content of the element given in param
 * 
 * @param {*} elementId id of the HTML element
 */
function copyToClipBoard(elementId) {
  var range = document.createRange();
  var copyText = document.getElementById(elementId);
  if (!copyText) {
    return;
  }
  range.selectNode(copyText);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy")
  selection.removeAllRanges();
};


/**
 * Use to beautify json code
 * @param {*} json 
 */
function syntaxHighlight(json) {
  if (typeof json != 'string') {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    // if (cls === 'string') {
    //   return '<span class="' + cls + '">' + match + '</span><br>';
    // } else {
    //   return '<span class="' + cls + '">' + match + '</span>';
    // }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

window.addEventListener("load", function (event) {
  load();
});
