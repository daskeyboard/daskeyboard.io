var xhr = new XMLHttpRequest();

function redirectToHomePage() {
  window.location.pathname = 'index';
}

/**
 * Look for a query param in an url
 * return this param or undefined if not found
 * @param {*} name of the query param
 * @param {*} url url
 */
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getApiKeyIfOneTimeLoginTokenIsPresent() {
  const oneTimeLoginToken = getParameterByName('oneTimeLoginToken', window.location.href);
  if (oneTimeLoginToken) {
    console.log('getting api key from q-cloud');
    getAPIKeyWithOneTimeLoginToken(oneTimeLoginToken);
  }
}

/**
 * Get API key from the Q Cloud using a one time login token and store it in the local
 * storage
 * @param {*} loginToken 
 */
function getAPIKeyWithOneTimeLoginToken(loginToken) {
  if (!loginToken) {
    console.error('no login token provided');
    return;
  }

  xhr.open('POST', "https://q.daskeyboard.com/api/1.0/users/api_key", true);
  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/json");
  const body = {
    oneTimeLoginToken: loginToken
  }
  xhr.send(JSON.stringify(body));
  xhr.onreadystatechange = processAPIKeyRequest;
}

function processAPIKeyRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    switch (xhr.status) {
      case 200:
        const response = JSON.parse(xhr.responseText);
        const apiKey = response.value;
        console.log('fetched api key', apiKey);
        localStorage.setItem('APIKey', apiKey);
        break;
      default:
        break;
    }
    // var response = JSON.parse(xhr.responseText);
    return false;
  }
}

function getStoredAPIKey() {
  const apiKey = localStorage.getItem('APIKey');
  return apiKey;
}

/**
 * Displays a bootstrap alert depending on the noticeType
 * noticeType can be 'info' and the bootstrap alert will be blue
 * or can be 'error' and the bootstrap alert will be red
 * @param {*} noticeType 
 * @param {*} message 
 */
function displayFlashNotice(noticeType, message) {
  // get the bootstrap alert div
  const flashNoticeDivId = 'flash-notice-section';
  const alertDiv = document.getElementById(flashNoticeDivId);

  if (alertDiv) {
    // populate the content of the div with the message
    alertDiv.textContent = message;
    // remove the previous class lists
    alertDiv.classList.remove(['alert-info', 'alert-danger']);
    switch (noticeType) {
      case 'info':
        alertDiv.classList.add(['alert-info']);
        break;

      case 'error':
        alertDiv.classList.add(['alert-danger']);
        break;
    }

    // show the div
    $('.alert').addClass('test');
  }
}
$(document).ready(function () {
  console.log('READY');
  // displayFlashNotice('info', 'test1');
  getApiKeyIfOneTimeLoginTokenIsPresent();
});
