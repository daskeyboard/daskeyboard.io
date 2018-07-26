
<div class="endpoint-container">
POST /signals
</div>


A signal can be created by making a POST HTTP request.
A zone can be targeted in 3 different ways. To know more about the zones please read this <a href="{{ "q-zone-id-explanation"  | relative_url }}">understand zoneId</a>
In all the cases the attribute to define the zone will be `zoneId`



#### Request parameters
{% include /script-examples/signal-ressource/create-signal/request-description.html %}


##### Request
{% include /script-examples/signal-ressource/create-signal/code.md %}

##### Response



<div class="code-response" markdown="1">

```json
HTTP 200
{
  "id": 392,
  "name": "New Q app version available",
  "message": "Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/",
  "zoneId": "KEY_Q",
  "color": "#FF0000",
  "effect": "SET_COLOR",
  "pid": "DK5QPID",
  "isArchived": false,
  "isRead": false,
  "isMuted": false,
  "userId": 9,
  "clientName": "Local Node script",
  "createdAt": 1531946199392,
  "updatedAt": 1531946199392
}
```

</div>