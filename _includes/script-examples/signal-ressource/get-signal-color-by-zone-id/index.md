


<div class="endpoint-container">
GET /signals/pid/:pid/zoneId/:zoneId/color
</div>


A signal color can be fetched by zoneId by making a GET HTTP request.
If there is no signal in the zone. The endpoint will return #000000



#### Request parameters
{% include /script-examples/signal-ressource/get-signal-color-by-zone-id/request-description.html %}


##### Request

<!-- Tab panes -->
<div class="tab-content cloud-or-local-tab-content">

<!-- Nav tabs -->
<ul class="nav nav-pills mb-3 cloud-or-local-nav" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link cloud-server active" id="get-signal-color-by-zone-id-cloud-tab"  data-toggle="pill"  href="#get-signal-color-by-zone-id-cloud" role="tab" aria-controls="get-signal-color-by-zone-id-cloud" aria-selected="true">Q Cloud</a>
  </li>
  <li class="nav-item">
    <a class="nav-link localhost-server" id="get-signal-color-by-zone-id-local-tab"  data-toggle="pill"  href="#get-signal-color-by-zone-id-local"  role="tab" aria-controls="get-signal-color-by-zone-id-local" aria-selected="false">Localhost</a>
  </li>
</ul>

<!-- Cloud code example -->
<div class="tab-pane active" id="get-signal-color-by-zone-id-cloud" role="tabpanel" aria-labelledby="get-signal-color-by-zone-id-cloud-tab" markdown="1">
{% include /script-examples/signal-ressource/get-signal-color-by-zone-id/cloud/with-api-key/index.md %}
</div>

<!-- Local example -->
<div class="tab-pane" id="get-signal-color-by-zone-id-local" role="tabpanel" aria-labelledby="get-signal-color-by-zone-id-local-tab" markdown="1">
{% include /script-examples/signal-ressource/get-signal-color-by-zone-id/local/index.md %}
</div>
</div>

##### Response



<div class="code-response" markdown="1">

```json
HTTP 200
{
  "id": 392,
  "name": "New Q app version available",
  "message": "Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/",
  "zoneId": "2,4",
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