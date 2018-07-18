```shell
curl -H 'Content-Type: application/json' \
 -H 'X-API-KEY: $API_KEY' \
 -X POST https://q.daskeyboard.com/api/1.0/signals -d \
 '{
  "zoneId": "KEY_Q",
  "color": "#FF0000",
  "effect": "SET_COLOR",
  "pid": "DK5QPID",
  "clientName": "Local Node script",
  "message": "Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/",
  "name": "New Q app version available"}'
```