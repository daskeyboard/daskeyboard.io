```js
"use strict";

var request = require('request');
// Q desktop public API url
let apiUrl = "http://localhost:27301/api/1.0/signals";
// creating the signal to colorize the key A in red
let signal = {
    "pid": "DK5QPID",
    "zoneId": "KEY_A",
    "color": "#F00",
    "effect": "SET_COLOR",
    "name": "Hello message title",
    "message": "Message body goes here...",
    "shouldNotify": true 
 }
// sending the signal
request.post({
     url: apiUrl,
     headers: {
        "Content-Type": "application/json"
     },
     body: signal,
     json:true
}, function(error, response, body){
    // checking the response
   if(response.statusCode == 200){
       console.log("\n\nOK");
   } else {
       console.log("ERROR: ", body);
       process.exit(1);
   }

});
```