# Quick Start: Das Keyboard Q REST API Documentation

Save your account credentials:
```sh
email="YOUR_EMAIL"
password="YOUR_PASSWORD"
```

Get your Oauth client id:
```sh
clientId=$(curl -X POST -H 'Content-Type: application/json' -d '{"email": "$email", "password": "$password"}' http://q.daskeyboard.com/oauth/credentials | sed -rn 's/^\{"clientId":"([0-9a-zA-Z]+)",".*/\1/p')
```
Get the Oauth code:
```sh
code=$(curl -X POST -d "client_id=$clientId" -d "email=$email" -d "password=$password" http://k.daskeyboard.com/oauth/code | sed -rn 's/\^{"code":([0-9]*)\}/\1/p')
```
Get the Oauth access_token:
```sh
token=$(curl -X POST -d "client_id=$clientId" -d "grant_type=access_token" -d "code=$code" http://k.daskeyboard.com/oauth/token | sed -rn 's/^\{"access_token":"([0-9a-zA-Z]+)",".*/\1/p')
```
Create your Signal:
```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer $token" -X POST http://q.daskeyboard.com/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "color": "#008000"}'
```

# Step by step: Das Keyboard Q: REST API Documentation

This document explains how to use the Q API. To create, update and delete Signals, two options are offered: sending the request to the Server or sending it directly to the desktop application.  
The Cloud and the desktop software use similar routes, but you won't need to send authentication parameters locally. What's more, the desktop software is run on a random port, which can be retrieved in the file `~/.quio/q-api-port.txt`.
In a terminal, the port can be obtained with the following:
```sh
PORT=$(cat ~/.quio/q-api-port.txt)
```

## Authentication: Oauth2 (Cloud only)

The Das Keyboard Q Cloud service uses Oauth2 authentication (https://oauth.net/2/), so in order to perform a request, you will need to send a token, which will require the use of your client credentials. Indeed, once a user account is created on the Q Cloud service, a client is automatically generated with the name "User_X" where X is a unique id associated to the user.
For example, if Bob signs up to the Q Cloud and has the id 87, a client will be generated for him with the name "User_87".

### Getting your Oauth credentials

When you signed up on http://q.daskeyboard.com/, client credentials have been generated for you. To get them, you can use the following command:

```sh
curl -X POST -H 'Content-Type: application/json' -d '{"email": "EMAIL", "password": "PASSWORD"}' http://q.daskeyboard.com/oauth/credentials
```
Parameters required: EMAIL and PASSWORD.

### Getting your Oauth Token 

Use the following command to obtain an access token.  
First, you need to ask a code:
```sh
curl -X POST -d 'client_id=CLIENT_ID' -d 'email=EMAIL' -d 'password=PASSWORD' http://q.daskeyboard.com/oauth/code
```
Parameters required: CLIENT_ID, EMAIL and PASSWORD.  
You should receive a JSON object with a code (if not, an error should be received). You can then ask an access token:
```sh
curl -X POST -d 'client_id=CLIENT_ID' -d 'grant_type=access_token' -d 'code=CODE' http://q.daskeyboard.com/oauth/token
```
Parameters required: CLIENT_ID and CODE.  
The response contains a JSON object with your access_token, refresh_token and your user_id.

### Refreshing your Oauth Token 

An access token expirex after a certain time, so you will probably need to get a new one.
```sh
curl -X POST -d 'client_id=CLIENT_ID' -d 'grant_type=refresh_token' -d 'refresh_token=REFRESH_TOKEN' -i http://q.daskeyboard.com/oauth/refresh_token
```
Parameters required: CLIENT_ID and REFRESH_TOKEN.

### Getting the list of authorized Clients

In order for 3rd parties, called Clients (e.g. Twitter, Zappier), to send Signals to your Q CLoud account, you need to authorize them.  
The following command gives the list of authorized Clients.
```sh
curl -X GET -H 'Authorization: Bearer ACCESS_TOKEN' http://q.daskeyboard.com/api/1.0/users/authorized_clients
```
Parameters required: ACCESS_TOKEN.  
You should receive a JSON Array, with each JSON object having the structure:
```json
{
    "name": "CLIENT_NAME"
}
```

### Revoking a client

To revoke a client, only its name is needed:
```sh
curl -X POST -H 'Authorization: Bearer ACCESS_TOKEN' -H 'Content-Type: application/json' -d '{"name": "CLIENT_NAME"}' http://q.daskeyboard.com/api/1.0/users/revoke_client
```
Parameters required: ACCESS_TOKEN, CLIENT_NAME. If the operation succeeds, you should receive a 200 response.

## Endpoints  (Cloud only)
For the following requests, you will need to replace ACCESS_TOKEN by your own token, obtained with the above instructions.

### Devices Definitions
Returns the list of available devices (JSON Array).
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/device_definitions
```
Each JSON object will have the structure:
```json
{
    "latestFirmwareVersion": "latest version of the firmware (string)",
    "name": "name of the product (string)",
    "vid": "vid of the product (string)",
    "pid": "pid of the product (string)",
    "modelNumber": "number of the model (string)",
    "description": "description (string)",
    "zones": [
      {
        "id": "id (string)",
        "description": "description (string)"
      },
      {
        "id": "id (string)",
        "description": "description (string)"
      },
      ...
    ],
    "vidPid": {
      "pid": "pid of the product (string)",
      "vid": "vid of the product (string)"
    }
}
```

### Devices
Returns the list of devices linked to your account (JSON Array).
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/devices
```
Each JSON object will have the structure:
```json
{
    "id": "id of the device (int)", 
    "userId": "id of the user (int)", 
    "pid": "pid of the product (string)",
    "firmwareVersion": "version of the firmware (string)",
    "vid": "vid of the product (string)",
    "description": "description (string)",
    "zones": [
      {
        "id": "id (string)",
        "description": "description (string)"
      },
      {
        "id": "id (string)",
        "description": "description (string)"
      },
      ...
    ]
}
```


### Colors
Returns a list of predefined colors (JSON Array).
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/colors
```
Each JSON object will have the structure:
```json
{
    "code": "hexadecimal code of the color (string beginning by the character '#' and followed by 3 hexadecimal digits)",
    "name": "name of the color (string)"
}
```

### Zones
Returns the list of a device's zones (JSON Array).
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/PID/zones
```
The GET parameter **PID** must correspond to an existing device's pid.  
Each JSON object will have the structure:
```json
{
    "id": "id of the zone (string beginning by 'KEY_')",
    "name": "name of the zone (string)"
}
```

### Effects
Returns the list of a available effects for a device (JSON Array).
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/PID/effects
```
The GET parameter **PID** must correspond to an existing device's pid.  
Each JSON object will have the structure:
```json
{
    "code": "code of the effect (string)",
    "name": "name of the zone (string)"
}
```

## Signals  (Cloud and local)

### Creating a Signal

The DasKeyboard 5Q RG keys can be controlled via Signals. An example of Signal would be:  
Apple Stock > $500 => set A key to green.

Creates a Signal with the given attributes.  
Example of simple Signal (Cloud):
```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X POST http://q.daskeyboard.com/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "color": "#008000"}'
```
Example of simple Signal (local):
```sh
curl -H 'Content-Type: application/json' -X POST http://localhost:$PORT/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "color": "#008000"}'
```

Example of more detailed Signal (Cloud):
```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X POST http://q.daskeyboard.com/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "message": "It worked", "effect": "BLINK", "color": "#008000", "shouldNotify": true, "isRead": true, "isArchived": true, "isMuted": true}'
```
Example of more detailed Signal (local):
```sh
curl -H 'Content-Type: application/json' -X POST http://localhost:$PORT/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "message": "It worked", "effect": "BLINK", "color": "#008000", "shouldNotify": true, "isRead": true, "isArchived": true, "isMuted": true}'
```

Required fields:  
**name**: string - name of Signal, e.g. "Apple Stock increase".  
**pid** string - pid of the device, e.g. "DK5QPID".  
**zoneId** string - id of the zone, e.g. "KEY_A".  
**color** string which has to begin by the character '#' and be followed by 3 or 6 hexadecimal digits - color of the Signal, e.g. "#008000".  
  
Optional fields:  
**message** string - message of Signal (default: empty string ""), e.g. "Lucky you! Apple stock is greater than $500".  
**effect** string - effect of the Signal (default: "SET_COLOR"), e.g. "BLINK".  
**shouldNotify** boolean - indicates if the applications should create a notification when the Signal is received, only if it has not been read or archived (default: false), e.g. true.  
**isRead** boolean - indicates if the Signal has been read (default: false), e.g. true.  
**isArchived** boolean - indicates if the Signal has been archived (default: false), e.g. true.  
**isMuted** boolean - indicates if the Signal has been muted (default: false), e.g. true.  
  
The response is a JSON object containing the id of the signal created.

### Getting the Signals
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/signals
```
In order to obtain a list of Signals created after a certain time:
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/signals/after/EPOCH_TIME
```
GET parameters can also be added:

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET http://q.daskeyboard.com/api/1.0/signals?pid=DK5QPID&page=0&size=4&sort=createdAt,DESC
```
You should receive a JSON object as following:
```json
{
    "size": "number of Signals displayed by page (integer)",
    "sort": "Signals sorting (string)",
    "hasNextPage": "indicates if there are still Signals to be retrieved on next pages (boolean)",
    "totalElements": "total number of Signals (integer)",
    "totalPages": "total number of pages (integer)",
    "content": "Signals (JSON array)"
}
```
Each Signal is a JSON object with the following format:
```json
{
    "id": "id of the Signal (long)",
    "userId": "id of the user (integer)",
    "pid": "pid of the device (string)",
    "zoneId": "id of the zone (string)",
    "name": "name of the Signal (string)",
    "color": "color of the Signal (string beginning by the character '#' and followed by 3 hexadecimal digits)",
    "effect": "effect of the Signal (string)",
    "isRead": "indicates if the Signal has been read (boolean)",
    "isMuted": "indicates if the Signal has been muted (boolean)",
    "isArchived": "indicates if the Signal has been archived (boolean)",
    "shouldNotify": "indicates if the Signal should notify the user when received (boolean)",
    "clientName": "name of the Client who created the Signal (string)",
    "message": "message of the Signal (string)",
    "readAt": "time at which the Signal has been read (long: epoch time, can be null)",
    "createdAt": "time at which the Signal has been created (long: epoch time)",
    "updatedAt": "time at which the Signal has been updated (long: epoch time)"
}
```

### Updating a Signal
Only the fields **isMuted**, **isRead** and **isArchived** can be updated.
```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X PATCH http://q.daskeyboard.com/api/1.0/signals/ID/status -d '{"isRead": true, "isArchived": false}'
```
The GET parameter **ID** must correspond to an existing Signal's id.

### Deleting a Signal

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X DELETE http://q.daskeyboard.com/api/1.0/signals/ID
```
The GET parameter **ID** must correspond to an existing Signal's id.
