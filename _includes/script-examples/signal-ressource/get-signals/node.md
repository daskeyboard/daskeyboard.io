```js
// Library to make simplified HTTP client requests
// if not installed run npm install request
var request = require('request');

// page to query
var pageNumber = 0;

// number of signal per page
var numberOfSignalsPerPage = 2;

// sort order
var sortOrder = 'ASC' // or DESC

var params = '?page=' + pageNumber + '&size=' + numberOfSignalsPerPage
      + '&sort=createdAt,' + sortOrder;

// HTTP GET request to the cloud
request.get({
    url: backendUrl + '/api/1.0/signals' + params,
    headers: headers,
    json: true
}, function (error, response) {
    // OK
    if (response && response.statusCode == 200) {
        console.log('response', response.body);
    }
        // OK from API response
    if(response && response.statusCode != 200){
        console.error(response.body);
    }
    // OK
    if (error) {
        console.error(error);
    }
});

```
