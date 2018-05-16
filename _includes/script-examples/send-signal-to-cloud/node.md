```js
"use strict";

/**
 * Set Das Keyboard 5Q key A to red by sending a signal to the 
 * Q desktop public API.
 */
var request = require('request');
// run  npm install readline-sync  if cannot find module readline-sync
var readline = require('readline-sync');

let urlToken = "https://q.daskeyboard.com/oauth/1.4/token";
let urlSignal = "https://q.daskeyboard.com/api/1.0/signals";

console.log("Please enter your Q cloud credentials");
var email = readline.question("email: ");

var password = readline.question("password: ", {
    hideEchoBack: true
});
// creating the user
let user = {
        "email": email,
        "password": password,
        "grant_type": "password"
    }
    // creating the signal
let signal = {
    "pid": "DK5QPID",
    "zoneId": "KEY_A",
    "color": "#F00",
    "effect": "SET_COLOR",
    "name": "Hello message title",
    "message": "signal sent by a javascript script",
    "shouldNotify": true
}

let access_token;
// getting the Oauth token
request.post({
    url: urlToken,
    headers: {
        "Content-Type": "application/json"
    },
    body: user,
    json: true
}, function(error, response, body) {
    // checking the response
    if (response.statusCode != 200) {
        console.log("ERROR: ", body);
        process.exit(1);
    } else {
        // sending the signal with the token
        access_token = response.body['access_token'];
        request.post({
            url: urlSignal,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + access_token
            },
            body: signal,
            json: true
        }, function(error, response, body) {
            // checking the response
            if (response.statusCode != 200) {
                console.log("Error: ", body);
                process.exit(1);
            } else {
                console.log("OK");
            }
        })
    }
});
```