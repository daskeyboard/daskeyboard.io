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

const backendUrl = 'http://localhost:27301'

const requestHeaders =  {
    "Content-Type": "application/json"
  };



// HTTP POST request to the cloud
request.post({
  url: backentUrl + '/api/1.0/signals',
  headers: requestHeaders,
  body: signal,
  json: true
}, function (error: any, response: any) {

  // OK
  if (response.statusCode == 200) {
      console.log('response', response.body);
      return;
  }
});

```
