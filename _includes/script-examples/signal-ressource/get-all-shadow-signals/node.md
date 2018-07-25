```js
// Library to make simplified HTTP client requests
// if not installed run npm install request
var request = require('request');

// HTTP POST request to the cloud
request.get({
    url: backendUrl + '/api/1.0/signals/shadows',
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
