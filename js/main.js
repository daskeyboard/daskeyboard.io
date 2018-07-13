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
  removeQueryParamsFromUrl();
  if (oneTimeLoginToken) {
    console.log('getting api key from q-cloud');
    getAPIKeyWithOneTimeLoginToken(oneTimeLoginToken);
  }
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

function getCurrentUser() {
  const localAPIKey = getStoredAPIKey();
  $.getJSON("https://q.daskeyboard.com/api/1.0/users/me", localAPIKey)
    // post request success
    .done(function (data) {
      console.log('data', data);
      updateLoginDisplayElements(data);
    })
    // error with POST request
    .fail(function () {
      // notify user that error happened
      logout();
    });
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
  window.history.pushState({ path: '/' }, '', '/');
}

/**
 * Remove the stored apiKey
 * and update the views to display a none logged user
 */
function logout() {
  localStorage.removeItem('APIKey');
  updateLoginDisplayElements(undefined);
}

function updateLoginDisplayElements(currentUser) {
  console.log('currentUser', currentUser);
  if (currentUser) {
    // hide login message
    $('#header-login-message').css('display', 'none');
    // display welcome message
    $('#header-welcome-message').text('welcome ' + currentUser.email);
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


$(document).ready(function () {
  getCurrentUser();
  getApiKeyIfOneTimeLoginTokenIsPresent();
});
