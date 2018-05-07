---
layout: page
title: Das Keyboard Q REST API Documentation
permalink: /q-api-doc/
---
The developer Q API is a JSON REST API that allows control of the RGB settings of Q devices.

This document explains how to use the Q API. Two options are available: sending requests to the Q cloud service <https://q.daskeyboard.com/> or directly to the desktop application http://localhost:#port/... on the developer's machine.

The Q cloud service and the desktop software use similar endpoints. Note that the Q desktop HTTP server port number is `27301`.

Here are some useful links to get started smoothly:

- [Quick start]({{site.baseurl}}/q-api-quick-start/)
- [Community contributions]({{site.baseurl}}/contributed-links/)
- [API examples]({{site.baseurl}}/script-examples/)
- [Developer forum](https://qforum.daskeyboard.com)

## Authentication: Oauth2 (Cloud only)

The Das Keyboard Q Cloud service uses [Oauth2 authentication](https://oauth.net/2/), so in order to perform a request, you will need to send a token, which will require the use of your client credentials. Indeed, once a user account is created on the Q Cloud service, a client is automatically generated with the name "User_X" where X is a unique id associated to the user.

For example, if Bob signs up to the Q Cloud and has the id 87, a client will be generated for him with the name "User_87".

To get OAuth tokens, please read the [Q Authentication documentation]({{site.baseurl}}/q-authentication/).

### Note about data format

Responses sent by the server are in JSON format. However, the Q cloud service accepts both "application/json" and "application/x-www-form-urlencoded":

```sh
curl -X POST -H "Content-Type: application/json" -d '{"PARAM": "VALUE"}' https://q.daskeyboard.com/oauth/1.4/ENDPOINT
```

```sh
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "PARAM=VALUE" https://q.daskeyboard.com/oauth/1.4/ENDPOINT
```

### Getting the list of authorized clients

To send signals to your Q Cloud account, you need to authorize clients (e.g. Twitter, Zappier).
The following command gives the list of authorized clients.

Parameters required: ACCESS TOKEN.

```sh
curl -X GET -H 'Authorization: Bearer ACCESS_TOKEN' https://q.daskeyboard.com/api/1.0/users/authorized_clients
```

Result format:

```json
[
    {
        "name": "CLIENT_NAME"
    },
    {
        "name":"User_1055"
    },
    {
        "name":"IFTTT"
    },
    {
        "name":"Desktop App"
    }
]
```

### Revoking a client

To revoke a client, only its name is needed:

Parameters required: ACCESS TOKEN, CLIENT_NAME.

```sh
curl -X POST -H 'Authorization: Bearer ACCESS_TOKEN' -H 'Content-Type: application/json' -d '{"name": "CLIENT_NAME"}' https://q.daskeyboard.com/api/1.0/users/revoke_client
```

If the operation succeeds, you should receive a 200 response.

## Endpoints  (Cloud only)

Parameter required: ACCESS TOKEN.

### Devices Definitions

Returns the list of available devices (JSON Array).

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/device_definitions
```

Result format:

```json
[
    {
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
        "name":"Das Keyboard 5Q",
        "vid":"24F0",
        "pid":"DK5QPID",
        "modelNumber":"DKPK5Q0P0GZS0DEX",
        "description":"DK 5Q - The cloud connected keyboard by Das Keyboard",
        "languageLayout":
        {
            "language":"Spanish",
            "location":"Spain",
            "languageId":3082,
            "languageTag":"es-ES",
            "zones":[
                {
                    "ledIds":[25],
                    "id":25,
                    "code":"KEY_ESCAPE",
                    "description":"Escape"
                },
                {
                    "ledIds":[27],
                    "id":27,
                    "code":"KEY_F1",
                    "description":"F1"
                },
            ]
        }
    }
]
```

### Devices

Returns the list of devices linked to your account (JSON Array).

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/devices
```

Result format:

```json
[
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
    },
    {
        "id":1418,
        "userId":1055,
        "pid":"DK5QPID",
        "firmwareVersion":"0.0.0.0",
        "vid":"24F0",
        "description":"DK 5Q - The cloud connected keyboard by Das Keyboard",
        "uuid":"uuid to be set RtLWkEOPxm...",
        "versionNumber":1,
        "updateOrigin":null,
        "isDeleted":false,
        "createdAt":1520377021863,
        "updatedAt":1520377021863
    }
]
```

### Colors

Returns a list of predefined colors (JSON Array).

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/colors
```

Result format:

```json
[
    {
        "code": "hexadecimal code of the color (string beginning by the character '#' and followed by 3 hexadecimal digits)",
        "name": "name of the color (string)"
    },
    {
        "code":"#F00",
        "name":"Red"
    },
    {
        "code":"#0F0",
        "name":"Green"
    },
    {
        "code":"#00F",
        "name":"Blue"
    }
]
```

### Zones

Returns the list of a device's zones (JSON Array).

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/DK5QPID/zones
```

The GET parameter **DK5QPID** must correspond to an existing device's pid.
Each JSON object will have the structure:

Result format:

```json
[
    {
        "id": "id of the zone (string beginning by 'KEY_')",
        "name": "name of the zone (string)"
    },
    {
        "name":"Escape",
        "id":25
    },
    {
        "name":"F1",
        "id":27
    },
    {
        "name":"F3",
        "id":29
    },
    {
        "name":"C",
        "id":125
    },
    {
        "name":"V",
        "id":126
    },
    {
        "name":"Left Ctrl",
        "id":145
    }
    ...
]
```

### Effects

Returns the list of a available effects for a device (JSON Array).

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/DK5QPID/effects
```

The GET parameter **DK5QPID** must correspond to an existing device's pid.

Result format:

```json
[
    {
        "code": "code of the effect (string)",
        "name": "name of the zone (string)"
    },
    {
        "code":"SET_COLOR",
        "label":"set color"
    },
    {
        "code":"BLINK",
        "label":"Blink"
    },
    {
        "code":"RIPPLE",
        "label":"Ripple"
    },
    ...
]
```

## Signals

### Creating a signal (Cloud and local)

The Das Keyboard 5Q device RGB keys can be controlled via signals. 

Quick example of sending a signal on the key Q (DK5Q) using the XY coordinates:

- via the Cloud:

```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X POST https://q.daskeyboard.com/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "2,2", "color": "#008000"}'
```

- via local API:

```sh
curl -H 'Content-Type: application/json' -X POST  http://localhost:$PORT/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "2,2", "color": "#008000"}'
```

### Understanding zoneId

The zoneId is the id of the zone to light up.
There are three coordinates systems available:

-  Coordinate system XY

-  Coordinate system  zone code: KEY_{name-of-the-key}

-  Coordinate system linear

It is recommanded to use the coordinate system XY because it is compatible with every layouts.

For example, to send a signal on the key Q (US_layout): 

- 2,2

- KEY_Q

- 74 

![104Q.png](/DasKeyboard.github.io/images/104Q.png)

To send a signal on the key Q (105 keys layout): 

-  3,3 (different coordinates than with the 104 keys)

-  KEY_Q

- 99


![105Q.png](/DasKeyboard.github.io/images/105Q.png)


NB: 
"|-F" = left pipe and "|-R" = right pipe


### Example of more detailed signal

- Via the Cloud:

```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X POST https://q.daskeyboard.com/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "2,2", "message": "It worked", "effect": "BLINK", "color": "#008000", "action": "open:chrome", "shouldNotify": true, "isRead": true, "isArchived": true, "isMuted": true}'
```

- Via local API:

```sh
curl -H 'Content-Type: application/json' -X POST http://localhost:$PORT/api/1.0/signals -d '{"name": "Apple Stock increase", "pid": "DK5QPID", "zoneId": "2,2", "message": "It worked", "effect": "BLINK", "color": "#008000", "shouldNotify": true, "isRead": true, "isArchived": true, "isMuted": true}'
```


For more examples, please check out the [API examples]({{site.baseurl}}/script-examples/).


***Resource representations:***

**name**: string - name of Signal, e.g. "Apple Stock increase".

**pid**: string - pid of the device, e.g. "DK5QPID".

**zoneId**: string - id of the zone, e.g. "KEY_Q", "x,y", "74".  cf Understanding zoneId 

**color**: string which has to begin by the character '#' and be followed by 3 or 6 hexadecimal digits - color of the Signal, e.g. "#008000".

Optional fields:

**message**: string - message of Signal (default: empty string ""), e.g. "Lucky you! Apple stock is greater than $500".

**effect**: string - effect of the Signal (default: "SET_COLOR"), e.g. "BLINK".

**action**: string which is formatted "actionType:value" - action that can be triggered once the Signal has been received (the actionType is either "ur" or "open")

**shouldNotify**: boolean - indicates if the applications should create a notification when the Signal is received, only if it has not been read or archived (default: false), e.g. true.

**isRead**: boolean - indicates if the Signal has been read (default: false), e.g. true.

**isArchived**: boolean - indicates if the Signal has been archived (default: false), e.g. true.

**isMuted**: boolean - indicates if the Signal has been muted (default: false), e.g. true.

The response is a JSON object containing the id of the signal created.


### Getting the signals (Cloud only)

Parameter required: ACCESS TOKEN.

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/signals
```

In order to obtain a list of Signals created after a certain time:
Parameter required: ACCESS TOKEN, EPOCH_TIME.

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/signals/after/EPOCH_TIME
```

GET parameters can also be added:

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X GET https://q.daskeyboard.com/api/1.0/signals?pid=DK5QPID&page=0&size=4&sort=createdAt,DESC
```

Result format:

```json
{
    "content":
    [
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
        },
        {
            "id":526930,
            "zoneId":"75",
            "pid":"DK5QPID",
            "userId":1055,
            "name":"Today's forecast",
            "message":"Hope it's not too cold today!",
            "effect":"BLINK",
            "color":"#20DB0D",
            "isRead":true,
            "isMuted":false,
            "isArchived":false,
            "shouldNotify":true,
            "clientName":"IFTTT",
            "readAt":null,
            "action":null,
            "createdAt":1520438417719,
            "updatedAt":1520457724435
        },
        {
            "id":527432,
            "zoneId":"99",
            "pid":"DK5QPID",
            "userId":1055,
            "name":"Apple stodbf7c8ee834d382ddc1fdb490b0a17c0ease",
            "message":null,
            "effect":"SET_COLOR",
            "color":"#0F0",
            "isRead":true,
            "isMuted":false,
            "isArchived":true,
            "shouldNotify":false,
            "clientName":"NOTICE: zoneId automatically converted from KEY_A to 99. 1055 example@gmail.com null",
            "readAt":null,
            "action":null,
            "createdAt":1520456948981,
            "updatedAt":1520457728103
        },
        ...
    ],
    "size":50,
    "sort":"createdAt: ASC,zoneId: ASC",
    "hasNextPage":false,
    "page":0,
    "totalElements":41,
    "totalPages":1
}
```

### Updating a Signal status (Cloud only)

Q signal statuses work very much like an email from Gmail. It can be read or
unread, archived and muted. One cannot change the content of an email.
Only the signal fields `isMuted`, `isRead` and `isArchived` can be updated.

- `isRead`: a user has read the signal
- `isArchived`: archived signals are not visible but still present in the list
  of all signals
- `isMuted`: unused

Example: Updating a signal to 'isRead' = true status

```sh
curl -H 'Content-Type: application/json' -H 'Authorization: Bearer ACCESS_TOKEN' -X PATCH https://q.daskeyboard.com/api/1.0/signals/ID/status -d '{"isRead": true, "isArchived": false}'
```

The GET parameter **ID** must correspond to an existing signal's id.

### Deleting a Signal (Cloud only)

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' -X DELETE https://q.daskeyboard.com/api/1.0/signals/ID
```

The GET parameter **ID** must correspond to an existing signal's id.

### Getting color of zone id

When a signal is displayed on a zone id (i.e. one or more LEDs), the following
end point will return its color:

Endpoint:

```
GET https://q.daskeyboard.com/api/1.0/signals/{pid}/{zoneId}
```

Example:

Get color of zone id 83 for device 5Q keyboard:

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' https://q.daskeyboard.com/api/1.0/signals/DK5QPID/83
```

Result format:

```json
{
    "color": "#F00"
}
```

### Getting device shadow

A device shadow is a set of most recent signals per zone, i.e. what is currently displayed on the device.

Example:

Get the shadow of DK5QPID.

```sh
curl -H 'Authorization: Bearer ACCESS_TOKEN' https://q.daskeyboard.com/api/1.0/signals/shadows/DK5QPID```

Result format:

```json
{
    "content":
    [
        {
        "id":524561,
        "zoneId":"78",
        "pid":"DK5QPID",
        "userId":6,
        "name":"signal name",
        "message":"messagebody",
        "effect":"BLINK",
        "color":"#00aced",
        "isRead":false,
        "isMuted":false,
        "isArchived":false,
        "shouldNotify":true,
        "clientName":"IFTTT",
        "readAt":null,
        "action":null,
        "createdAt":1520349790354,
        "updatedAt":1520349790356
        },
        ...
    ],
  "size":7,
  "sort":"",
  "hasNextPage":false,
  "page":0,
  "totalElements":7,
  "totalPages":1
}
```
