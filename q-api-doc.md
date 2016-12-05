Here is a short documentation of the Q-API.



# Authentication: Oauth2

The Das Keyboard Q server uses Oauth2 authentication, so in order to perform a requests, you will need to send a token. But first, you will need to use your client credentials. 

### Own client credentials

When you signed up on http://q.daskeyboard.com/, client credentials have been generated for you. To get them, you can use the following command:

```sh
curl -X POST -H "Content-Type: application/json" -d "{email: 'EMAIL', password: 'PASSWORD'}" http://q.daskeyboard.com/oauth/credentials
```
Parameters required: EMAIL and PASSWORD.

### Token 

Use the following command to obtain an access token.
First, you need to ask a code:
```sh
curl -X POST -d "client_id=CLIENT_ID" -d "email=EMAIL" -d "password=PASSWORD" http://q.daskeyboard.com/oauth/code
```
Parameters required: CLIENT_ID, EMAIL and PASSWORD.
You should receive a JSON object with a code (if not, an error should be received). You can then ask an access token:
```sh
curl -X POST -d "client_id=CLIENT_ID" -d "client_secret=CLIENT_SECRET" -d "grant_type=access_token" -d "code=CODE" http://q.daskeyboard.com/oauth/token
```
Parameters required: CLIENT_ID, CLIENT_SECRET and CODE.
The response contains a JSON object with your access_token, refresh_token and your user_id.

To get a new access_token, the following command can be used:
```sh
curl -X POST -d "client_id=CLIENT_ID" -d "client_secret=CLIENT_SECRET" -d "grant_type=refresh_token" -d "refresh_token=REFRESH_TOKEN" -i http://q.daskeyboard.com/oauth/refresh_token
```
Parameters required: CLIENT_ID, CLIENT_SECRET and REFRESH_TOKEN.

### Authorized clients

You can obtain the list of the clients which you have linked your account to (e.g. Zapier or IFTTT):
```sh
curl -X GET -H "Authorization: Bearer ACCESS_TOKEN" http://q.daskeyboard.com/api/1.0/users/authorized_clients
```
Parameters required: ACCESS_TOKEN.
You should receive a JSON Array, with each JSON object having the structure:
```json
{
    "name": "Name of the client"
}
```

### Revoke a client

If you want to revoke a client (which will remove your tokens for this one), you only need to know its name:
```sh
curl -X POST -H "Authorization: Bearer ACCESS_TOKEN" -H "Content-Type: application/json" -d "{name: CLIENT_NAME}" http://q.daskeyboard.com/api/1.0/users/revoke_client
```
Parameters required: ACCESS_TOKEN, CLIENT_NAME. If the operation succeeds, you should receive a 200 response.

# Constants
For the following requests, you will need to replace ACCESS_TOKEN by your own token, obtained with the above instructions.

### Devices Definitions
Returns the list of available devices (JSON Array).
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/device_definitions
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
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/devices
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
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/colors
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
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/PID/zones
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
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/PID/effects
```
The GET parameter **PID** must correspond to an existing device's pid.
Each JSON object will have the structure:
```json
{
    "code": "code of the effect (string)",
    "name": "name of the zone (string)"
}
```

# Signals

### Creation

Creates a Signal with the given attributes.
Example of simple Signal:
```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer ACCESS_TOKEN" -X POST http://q.daskeyboard.com/api/1.0/signal/CLIENT_ID -d "{'name': 'My first Signal', 'pid': 'DK5QPID', 'zoneId': 'KEY_S'}"
```

Example of more detailed Signal:
```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer ACCESS_TOKEN" -X POST http://q.daskeyboard.com/api/1.0/signal/CLIENT_ID -d "{'name': 'My first Signal', 'pid': 'DK5QPID', 'zoneId': 'KEY_S', 'message': 'It worked', 'effect': 'BLINK', 'color': '#02C', 'shouldNotify': true, 'isRead': true, 'isArchived': true, 'isMuted': true}"
```

Required fields:
The field **name** must contain a string.
The field **pid** must contain a string corresponding to the PID of an existing device.
The field **zoneId** must contain a string corresponding to a zone belonging to the device chosen.

Optional fields:
The field **message** must contain a string (default: empty string "").
The field **effect** must contain a string corresponding to an existing effect (default: "SET_COLOR").
The field **color** must contain a string corresponding to a color. It has to begin by the character '#' and be followed by 3 or 6 hexadecimal digits (default: "#FF0").
The field **shouldNotify** must contain a boolean (default: false). If the Signal is read or archived, no notification will be displayed.
The field **isRead** must contain a boolean (default: false).
The field **isArchived** must contain a boolean (default: false).
The field **isMuted** must contain a boolean (default: false).

The response is a JSON object containing the id of the signal created.

### List
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/signals
```
In order to obtain a list of Signals created after a certain time:
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/signals/after/EPOCH_TIME
```
GET parameters can also be added:

```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://q.daskeyboard.com/api/1.0/signals?pid=DK5QPID&page=0&size=4&sort=createdAt,DESC
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
    "origin": "origin of the Signal (string)",
    "message": "message of the Signal (string)",
    "readAt": "time at which the Signal has been read (long: epoch time, can be null)",
    "createdAt": "time at which the Signal has been created (long: epoch time)",
    "updatedAt": "time at which the Signal has been updated (long: epoch time)"
}
```

### Update
Only the fields **isMuted**, **isRead** and **isArchived** can be updated.
```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer ACCESS_TOKEN" -X PATCH http://q.daskeyboard.com/api/1.0/signals/ID/status -d '{"isRead": true, ""isArchived": false}'
```
The GET parameter **ID** must correspond to an existing Signal's id.

### Deletion

```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X DELETE http://q.daskeyboard.com/api/1.0/signals/ID
```
The GET parameter **ID** must correspond to an existing Signal's id.


# WebSockets

Our desktop and Android applications are connected to our server via WebSockets: you can do the same!

### Signals

The WebSockets endpoint for Signals is the following: ws://q.daskeyboard.com/ws/signal.
In order to be authenticated, you need to send your client id ("clientId: XXX") and your token ("accessToken: XXX").

### Profiles
# TODO
