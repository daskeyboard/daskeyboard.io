```js
// Library to make simplified HTTP client requests
// if not installed run npm install request
var request = require('request');

var pid = 'DK5QPID';
var zoneId = '2,4';

request.delete({
    url: backendUrl + '/api/1.0/signals/pid/' + pid + '/zoneId/' + zoneId,
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
