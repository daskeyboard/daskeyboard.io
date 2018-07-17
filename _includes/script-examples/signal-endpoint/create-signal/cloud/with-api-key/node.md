```js
// Library to make simplified HTTP client requests
const request = require('request');

// Construct the signal to send
const signal = {
  'zoneId': 'KEY_Q',
  'color': '#FF0000',
  'effect': 'SET_COLOR',
  'pid': 'DK5QPID',
  'clientName': 'Cloud Node script',
  'message': 'Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/',
  'name': 'New Q app version available'
}


// HTTP POST request to the cloud
request.post({
  url: 'https://q.daskeyboard.com/api/1.0/signals',
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "$API_KEY"
  },
  body: signal,
  json: true
}, (error: any, response: any) => {
  // OK
  if (response.statusCode == 200) {
    console.log('response', response.body);
    return;
  }

 // ERROR
  if (response.body.error) {
    console.log('error message', response.body);
    return;
  }
});
```