```js
// Library to make simplified HTTP client requests
var request = require('request');

// Construct the signal to send
var signal = {
    'zoneId': 'KEY_Q',
    'color': '#FF0000',
    'effect': 'SET_COLOR',
    'pid': 'DK5QPID',
    'clientName': 'Local Node script',
    'message': 'Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/',
    'name': 'New Q app version available'
};
// HTTP POST request to the cloud
request.post({
    url: backendUrl + '/api/1.0/signals',
    headers: headers,
    body: signal,
    json: true
}, function (error, response) {
    // OK
    if (response && response.statusCode == 200) {
        console.log('response', response.body);
        return;
    }
    // KO
    if (error) {
        console.error(error);
    }
});

```
