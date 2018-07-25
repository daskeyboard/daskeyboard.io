```js
// Library to make simplified HTTP client requests
// if not installed run npm install request
var request = require('request');

var signalId = 392;

// HTTP POST request to the cloud
request.delete({
    url: backendUrl + '/api/1.0/signals/' + signalId ,
    headers: headers,
    json: true
}, function (error, response) {
    // OK
    if (response && response.statusCode == 200) {
        console.log('response', response.body);
    }
    // KO from API response
    if(response && response.statusCode != 200){
        console.error(response.body);
    }
    // KO
    if (error) {
        console.error(error);
    }
});

```
