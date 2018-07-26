


<div class="endpoint-container">
GET /signals/pid/:pid
</div>

The shadows is the list of the most recent signals for each zone.
The shadows for a specific device can be fetched by making a GET HTTP request.


#### Request parameters
{% include /script-examples/signal-ressource/get-shadow-signals-for-device/request-description.html %}

<a name="get-shadow-signals-for-device-anchor" id="get-shadow-signals-for-device-anchor" class="anchor"></a>

##### Request

<!-- Tab panes -->
<div class="tab-content cloud-or-local-tab-content">

<!-- Nav tabs -->
<ul class="nav nav-pills mb-3 cloud-or-local-nav" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link cloud-server active" id="get-shadow-signals-for-device-cloud-tab"  data-toggle="pill"  href="#get-shadow-signals-for-device-cloud" role="tab" aria-controls="get-shadow-signals-for-device-cloud" aria-selected="true">Q Cloud</a>
  </li>
  <li class="nav-item">
    <a class="nav-link localhost-server" id="get-shadow-signals-for-device-local-tab"  data-toggle="pill"  href="#get-shadow-signals-for-device-local"  role="tab" aria-controls="get-shadow-signals-for-device-local" aria-selected="false">Localhost</a>
  </li>
</ul>

<!-- Cloud code example -->
<div class="tab-pane active" id="get-shadow-signals-for-device-cloud" role="tabpanel" aria-labelledby="get-shadow-signals-for-device-cloud-tab" markdown="1">
{% include /script-examples/signal-ressource/get-shadow-signals-for-device/cloud/with-api-key/index.md %}
</div>

<!-- Local example -->
<div class="tab-pane" id="get-shadow-signals-for-device-local" role="tabpanel" aria-labelledby="get-shadow-signals-for-device-local-tab" markdown="1">
{% include /script-examples/signal-ressource/get-shadow-signals-for-device/local/index.md %}
</div>
</div>
<br>

##### Response



<div class="code-response" markdown="1">

```json
HTTP 200
[
  {
    "clientName": "Local Node script",
    "color": "#FF0000",
    "createdAt": 1532476316779,
    "effect": "SET_COLOR",
    "id": 1293599,
    "isArchived": false,
    "isMuted": false,
    "isRead": false,
    "message": "Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/",
    "name": "New Q app version available",
    "pid": "DK5QPID",
    "updatedAt": 1532476316782,
    "userId": 9,
    "zoneId": "KEY_P"
  },
  {
    "clientName": "IFTTT",
    "color": "#00FF00",
    "createdAt": 1532549017586,
    "effect": "BLINK",
    "id": 1295989,
    "isArchived": false,
    "isMuted": false,
    "message": null,
    "name": "\"Twitter slammed for 'shadow banning' prominent Republicans\" via FOX NEWS",
    "pid": "DK5QPID",
    "updatedAt": 1532549017596,
    "userId": 9,
    "zoneId": "78"
  }
]
```

</div>