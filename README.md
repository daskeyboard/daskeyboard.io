# Oauth2

Our server uses the authentication system Oauth2: to perform your requests, you will need to send a token.In order to do that, use the following instructions to get a token.
First, you need to ask a code:
```sh
curl -X POST -d "client_id=CLIENT_ID" -d "email=EMAIL" -d "password=PASSWORD" http://k.daskeyboard.com/oauth/code
```
You should receive a JSON object with a code (if not, an error should be received). You can then ask an access token:
```sh
curl -X POST -d "client_id=CLIENT_ID" -d "client_secret=CLIENT_SECRET" -d "grant_type=access_token" -d "code=CODE" http://k.daskeyboard.com/oauth/token
```
You should receive a JSON object containing your access_token, your refresh_token and your user_id (if not, an error should be received).
To get a new access_token, the following instruction can be used:
```sh
curl -X POST -d "client_id=CLIENT_ID" -d "client_secret=CLIENT_SECRET" -d "grant_type=refresh_token" -d "refresh_token=REFRESH_TOKEN" -i http://k.daskeyboard.com/oauth/refresh_token
```

# Constants
The following GET requests should return an JSON array containing the desired objects.

### Products
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://k.daskeyboard.com/api/1.0/products
```
Each object will have the structure:
```json
{
    "name": "name of the product (string)",
    "pid": "pid of the product (string)"
}
```

### Colors
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://k.daskeyboard.com/api/1.0/colors
```
Each object will have the structure:
```json
{
    "code": "hexadecimal code of the color (string beginning by the character '#' and followed by 3 hexadecimal digits)",
    "name": "name of the color (string)"
}
```

### Zones
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://k.daskeyboard.com/api/1.0/PID/zones
```
The GET parameter **PID** must correspond to an existing device's pid.
Each object will have the structure:
```json
{
    "id": "id of the zone (string beginning by 'KEY_')",
    "name": "name of the zone (string)"
}
```

### Effects
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://k.daskeyboard.com/api/1.0/PID/effects
```
The GET parameter **PID** must correspond to an existing device's pid.
Each object will have the structure:
```json
{
    "code": "code of the effect (string)",
    "name": "name of the zone (string)"
}
```

# Signals
### List
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://k.daskeyboard.com/api/1.0/signals
```
In order to obtain only the Signals after a certain time:
```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://k.daskeyboard.com/api/1.0/signals/after/EPOCH_TIME
```
GET parameters can also be added:

```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X GET http://k.daskeyboard.com/api/1.0/signals?pid=DK5QPID&page=0&size=4&sort=createdAt,DESC
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

### Creation

```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer ACCESS_TOKEN" -X POST http://k.daskeyboard.com/api/1.0/signal/CLIENT_ID -d "{'name': 'My first Signal', 'message': 'It worked!', 'pid': 'DK5QPID', 'zone_id': 'KEY_S', 'effect': 'BLINK', 'notify': true, 'color': '#F0F'}"
```
Every field is needed.
The fields **name** and **message** must contain a string.
The field **pid** must contain a string corresponding to the PID of an existing device.
The field **zone_id** must contain a string corresponding to a zone belonging to the device chosen.
The field **effect** must contain a string corresponding to an existing effect.
The field **notify** must contain a boolean.
The field **color** must contain a string corresponding to a color. It has to begin by the character '#' and be followed by 3 or 6 hexadecimal digits.
You should receive a JSON object containing the id of the signal created (if not, an error should be received).

### Update
Only the fields **isMuted**, **isRead** and **isArchived** can be updated.
```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer ACCESS_TOKEN" -X PATCH http://k.daskeyboard.com/api/1.0/signals/ID/status -d '{"isRead": true, ""isArchived": false}'
```
The GET parameter **ID** must correspond to an existing Signal's id.

### Deletion

```sh
curl -H "Authorization: Bearer ACCESS_TOKEN" -X DELETE http://k.daskeyboard.com/api/1.0/signals/ID
```
The GET parameter **ID** must correspond to an existing Signal's id.
