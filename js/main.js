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
  removeQueryParamsFromUrl();
  if (oneTimeLoginToken) {
    console.log('getting api key from q-cloud');
    getAPIKeyWithOneTimeLoginToken(oneTimeLoginToken);
  } else {
    updateLoginDisplayElements(undefined);
    replaceALLApiKeyByStoredApiKey(undefined);
  }
}

function getCurrentUser() {
  const localAPIKey = getStoredAPIKey();
  $.getJSON("https://q.daskeyboard.com/api/1.0/users/me", localAPIKey)
    // post request success
    .done(function (data) {
      // store email 
      localStorage.setItem('email', data.email);
      // update the view with the new user info 
      updateLoginDisplayElements(data.email);
      replaceALLApiKeyByStoredApiKey(localAPIKey);
    })
    // error with POST request
    .fail(function () {
      // notify user that error happened
      logout();
    });
}

function onLoginToQCloud() {
  const callbackUrl = window.location.pathname;
  window.location = "http://localhost:4200?source=q-documentation"
    + '&callbackUrl=' + callbackUrl;

}

/**
 * 
 * redefine jquery post request to use application/json and stringify the data
 */
$.postJSON = function (url, data, callback) {
  return jQuery.ajax({
    'type': 'POST',
    'url': url,
    'contentType': 'application/json',
    'data': JSON.stringify(data),
    'dataType': 'json',
    'success': callback
  });
};

/**
 * 
 * redefine jquery post request to use application/json and stringify the data
 */
$.getJSON = function (url, apiKey, callback) {
  return jQuery.ajax({
    'type': 'GET',
    'url': url,
    headers: { 'X-API-KEY': apiKey },
    'contentType': 'application/json',
    'dataType': 'json',
    'success': callback
  });
};

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
  $.postJSON("https://q.daskeyboard.com/api/1.0/users/api_key", { oneTimeLoginToken: loginToken })
    // post request success
    .done(function (data) {
      // store apiKey in local storage
      const apiKey = data.value;
      localStorage.setItem('APIKey', apiKey);
      // notify user that the API key was fetched
      displayFlashNotice('info', 'fetched API Key ' + apiKey);
      getCurrentUser();
    })
    // error with POST request
    .fail(function () {
      // notify user that error happened
      updateLoginDisplayElements(undefined);
      replaceALLApiKeyByStoredApiKey(undefined);
      displayFlashNotice('error', 'Error while fetching API KEY');
    });
}

function getStoredAPIKey() {
  const apiKey = localStorage.getItem('APIKey');
  return apiKey;
}

/************************************************************************
 * 
 *  code used to display a notice popover for the user
 * 
 * 
 * *********************************************************************** 
 */

/**
 * Displays a bootstrap alert depending on the noticeType
 * noticeType can be 'info' and the bootstrap alert will be blue
 * or can be 'error' and the bootstrap alert will be red
 * @param {*} noticeType 
 * @param {*} message 
 */
function displayFlashNotice(noticeType, message) {
  // get the bootstrap alert div
  const flashNoticeDivId = '#flash-notice-section';
  const flashNoticeMessageId = '#flash-notice-message';
  const alertDiv = $(flashNoticeDivId);
  const alertMessage = $(flashNoticeMessageId);

  if (alertDiv && alertMessage) {
    // populate the content of the div with the message
    alertMessage.html(message);
    // remove the previous class lists
    alertDiv.removeClass(['alert-info', 'alert-danger']);
    switch (noticeType) {
      case 'info':
        alertDiv.addClass(['alert-primary']);
        break;

      case 'error':
        alertDiv.addClass(['alert-danger']);
        break;
    }

    // show the div
    alertDiv.css('display', 'block');

  }
}



/**
 * closes the flash notice component by hiding the element in the DOM
 */
function onCloseFlashNotice() {
  const flashNoticeDivId = 'flash-notice-section';
  const alertDiv = document.getElementById(flashNoticeDivId);
  if (alertDiv) {
    alertDiv.style.display = 'none';
  }
}

/************************************************************************
 * 
 *  END OF code used to display a notice popover for the user
 * 
 * 
 * *********************************************************************** 
 */

function removeQueryParamsFromUrl() {
  var newurl = window.location.pathname;
  window.history.pushState({ path: newurl }, '', newurl);
}

/**
 * Remove the stored apiKey
 * and update the views to display a none logged user
 */
function logout() {

  // remove api key and email from local storage
  localStorage.removeItem('APIKey');
  localStorage.removeItem('email');


  // reload page
  window.location.reload();
}

function updateLoginDisplayElements(currentUserEmail) {
  if (currentUserEmail) {
    // hide login message
    $('#header-login-message').css('display', 'none');
    // display welcome message
    $('#header-welcome-message').text('welcome ' + currentUserEmail);
    $('#header-welcome-message').css('display', 'inline-block');
    // display logout action
    $('#logout-action').css('display', 'inline-block');
  } else {
    // hide logout action
    $('#logout-action').css('display', 'none');
    // hide welcome message
    $('#header-welcome-message').css('display', 'none');
    // display login message
    $('#header-login-message').css('display', 'inline-block');
  }
}

/************************************************************************
 * 
 *  code used to display the dynamic content in the code pages
 * 
 * 
 * *********************************************************************** 
 */

function formatJSONCode() {
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

function replaceALLApiKeyByStoredApiKey(apiKey) {
  $("body").children().each(function () {
    if (!apiKey) {

      // TODO change with the root to the API Key explanation page
      const apiKeyMoreDetails = window.location.origin + '/get-started/download/';
      $(this).html($(this).html().replace(/\$API_KEY/g,
        // "<span class='span-code'data-toggle='tooltip' data-placement='top' "
        // + "title='Login to automatically see your own credential.' onclick='onLoginToQCloud()'>"
        // + "login to retrieve your api-key</span>"));
        "<button class='login-code-button' data-toggle='tooltip' data-html='true' title='This is a sample <a href="
        + apiKeyMoreDetails
        + ">API key</a>.<a href=\"#\" onclick=\"onLoginToQCloud()\">Login</a> to see examples "
        + "pre-filled with your keys.'>login to retrieve your api-key</button>"));
    } else {
      $(this).html($(this).html().replace(/\$API_KEY/g, apiKey));
    }
  });
}

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

/************************************************************************
 * 
 *  End of code used to display the dynamic content in the code pages
 * 
 * 
 * *********************************************************************** 
 */



$(document).ready(function () {
  const email = localStorage.getItem('email');
  const apiKey = getStoredAPIKey();
  console.log('apiKey', apiKey);
  console.log('email', email);

  if (email && apiKey) {
    updateLoginDisplayElements(email);
    replaceALLApiKeyByStoredApiKey(apiKey);
  } else {
    //get ApiKey if one time login token present in url
    getApiKeyIfOneTimeLoginTokenIsPresent();
  }




  formatJSONCode();

  // enable bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // enable bootstrap popovers
  $('[data-toggle="popover"]').popover();

  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});
