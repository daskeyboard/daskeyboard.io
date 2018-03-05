# Das Keyboard Q REST API Documentation

This document explains how to use the Q API. To create, update and delete Signals, two options are available: sending the request to the Q cloud service (https://q.daskeyboard.com/ or directly to the desktop application (http://localhost:#port/...

The Q cloud service and the desktop software use similar routes, however the HTTP port # of the Q desktop HTTP server is `27301`.

Too much info? Read the quick-start guide: 
https://github.com/DasKeyboard/q/blob/master/q-api-quick-start.md

## Authentication: Oauth2 (Cloud only)

The Das Keyboard Q Cloud service uses Oauth2 authentication (https://oauth.net/2/), so in order to perform a request, you will need to send a token, which will require the use of your client credentials. Indeed, once a user account is created on the Q Cloud service, a client is automatically generated with the name "User_X" where X is a unique id associated to the user.
For example, if Bob signs up to the Q Cloud and has the id 87, a client will be generated for him with the name "User_87".

To get OAuth tokens, please read the Q Authentication documentation at
 https://github.com/DasKeyboard/q/blob/master/q-authentication.md

### Short note about data format

All the responses sent by the server are in JSON format. However, we accept both "application/json" and "application/x-www-form-urlencoded". The following curl requests will be sent with JSON data, but the two following command are equivalent:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"PARAM": "VALUE"}' https://q.daskeyboard.com/oauth/1.4/ENDPOINT
```

```sh
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "PARAM=VALUE" https://q.daskeyboard.com/oauth/1.4/ENDPOINT
```

### Getting the list of authorized clients

In order for 3rd parties, called Clients (e.g. Twitter, Zappier), to send Signals to your Q CLoud account, you need to authorize them.  
The following command gives the list of authorized Clients.

```sh
curl -X GET -H 'Authorization: Bearer ACCESS_TOKEN' https://q.daskeyboard.com/api/1.0/users/authorized_clients
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
curl -X POST -H 'Authorization: Bearer ACCESS_TOKEN' -H 'Content-Type: application/json' -d '{"name": "CLIENT_NAME"}' https://q.daskeyboard.com/api/1.0/users/revoke_client
```

Parameters required: ACCESS_TOKEN, CLIENT_NAME. If the operation succeeds, you should receive a 200 response.

## Endpoints  (Cloud only)

For the following requests, you will need to replace ACCESS_TOKEN by your own token, obtained with the above instructions.

### Devices Definitions

Returns the list of available devices (JSON Array).

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/device_definitions

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
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/devices
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
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/colors
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
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/DK5QPID/zones
```

The GET parameter **DK5QPID** must correspond to an existing device's pid.  
Each JSON object will have the structure:

FIXME

```json
{
    "id": "id of the zone (string beginning by 'KEY_')",
    "name": "name of the zone (string)"
}
```

### Effects

Returns the list of a available effects for a device (JSON Array).
```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/DK5QPID/effects
```
The GET parameter **DK5QPID** must correspond to an existing device's pid.  
Each JSON object will have the structure:
```json
{
    "code": "code of the effect (string)",
    "name": "name of the zone (string)"
}
```

## Signals 

### Creating a Signal (Cloud and local)

The DasKeyboard 5Q RG keys can be controlled via Signals. An example of Signal would be:  
Apple Stock > $500 => set A key to green.

Creates a Signal with the given attributes. 

Example of simple Signal (Cloud):

```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X POST https://q.daskeyboard.com/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "color": "#008000"}'
```

Example of simple Signal (local):

```sh
curl -H 'Content-Type: application/json' -X POST http://localhost:$PORT/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "color": "#008000"}'
```

Example of more detailed Signal (Cloud):

```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X POST https://q.daskeyboard.com/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "message": "It worked", "effect": "BLINK", "color": "#008000", "action": "open:chrome", "shouldNotify": true, "isRead": true, "isArchived": true, "isMuted": true}'
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
**action** string which is formatted "actionType:value" - action that can be triggered once the Signal has been received (the actionType is either "ur" or "open")
**shouldNotify** boolean - indicates if the applications should create a notification when the Signal is received, only if it has not been read or archived (default: false), e.g. true.
**isRead** boolean - indicates if the Signal has been read (default: false), e.g. true.
**isArchived** boolean - indicates if the Signal has been archived (default: false), e.g. true.
**isMuted** boolean - indicates if the Signal has been muted (default: false), e.g. true.

The response is a JSON object containing the id of the signal created.

### Getting the signals (Cloud only)

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/signals
```

In order to obtain a list of Signals created after a certain time:

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/signals/after/EPOCH_TIME
```

GET parameters can also be added:

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/signals?pid=DK5QPID&page=0&size=4&sort=createdAt,DESC
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
    "action": "action linked to the Signal (string)",
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

### Updating a Signal (Cloud only)

Only the fields **isMuted**, **isRead** and **isArchived** can be updated.

```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X PATCH https://q.daskeyboard.com/api/1.0/signals/ID/status -d '{"isRead": true, "isArchived": false}'
```

The GET parameter **ID** must correspond to an existing Signal's id.

### Deleting a Signal (Cloud only)

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X DELETE https://q.daskeyboard.com/api/1.0/signals/ID
```

The GET parameter **ID** must correspond to an existing Signal's id.
