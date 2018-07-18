

/**
 * If there is a language remembered by the app
 * Show all the tabs linked to this language
 */
function showLastSelectedCodingLanguage() {
  // select the language persisting in the local storage
  const language = localStorage.getItem('lastSelectedCodingLanguage');

  if (language) {
    $('.' + language).tab('show') // Select tab by name
  }
}


/**
 * Listens to the click events on the code tab selection 
 * and remembers the last code language selected
 */
function listenToCodingLanguageTabSelection() {
  $('.code-nav-tabs a').on('click', function (e) {
    e.preventDefault();

    // put the selected tab link classes in an array
    const selectedTabClassList = $(this).attr('class').split(" ");

    // find the last selected coding language (example node-language or curl-language)
    const lastSelectedCodingLanguage = selectedTabClassList.find(function (element) {
      return element.includes('language');
    });

    // Persist in local storage so we can pre-select around the site
    if (localStorage) {
      localStorage.setItem('lastSelectedCodingLanguage', lastSelectedCodingLanguage);
    }
  });
}

/**
 * Listens to the click events on the server tab selection 
 * and remembers the last server selected (local or cloud)
 */
function listenToAPIServerTabSelection() {
  $('.cloud-or-local-nav a').on('click', function (e) {
    e.preventDefault();

    // put the selected tab link classes in an array
    const selectedTabClassList = $(this).attr('class').split(" ");

    // find the last selected server (cloud-server or local-server)
    const lastSelectedServer= selectedTabClassList.find(function (element) {
      return element.includes('server');
    });

    // Persist in local storage so we can pre-select around the site
    if (localStorage) {
      localStorage.setItem('lastSelectedServer', lastSelectedServer);
    }
  });
}


/**
 * If there is a server remembered by the app
 * Show all the tabs linked to this server
 */
function showLastSelectedServer() {
  // select the server persisting in the local storage
  const server = localStorage.getItem('lastSelectedServer');

  if (server) {
    $('.' + server).tab('show') // Select tab by name
  }
}

$(document).ready(function () {
  listenToCodingLanguageTabSelection();
  showLastSelectedCodingLanguage();

  listenToAPIServerTabSelection();
  showLastSelectedServer();
});