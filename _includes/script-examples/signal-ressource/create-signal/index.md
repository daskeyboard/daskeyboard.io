
<div class="endpoint-container">
POST /signals
</div>


A signal can be created by making a POST HTTP request.
A zone can be targeted in 3 different ways. To know more about the zones please read this <a href="{{ "q-zone-id-explanation"  | relative_url }}">understand zoneId</a>
In all the cases the attribute to define the zone will be `zoneId`



#### Request parameters
{% include /script-examples/signal-ressource/create-signal/request-description.html %}


##### Request

<!-- Tab panes -->
<div class="tab-content cloud-or-local-tab-content">

<!-- Nav tabs -->
<ul class="nav nav-pills mb-3 cloud-or-local-nav" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link cloud-server active" id="create-signal-cloud-tab"  data-toggle="pill"  href="#create-signal-cloud" role="tab" aria-controls="create-signal-cloud" aria-selected="true">Q Cloud</a>
  </li>
  <li class="nav-item">
    <a class="nav-link localhost-server" id="create-signal-local-tab"  data-toggle="pill"  href="#create-signal-local"  role="tab" aria-controls="create-signal-local" aria-selected="false">Localhost</a>
  </li>
</ul>

<!-- Cloud code example -->
<div class="tab-pane active" id="create-signal-cloud" role="tabpanel" aria-labelledby="create-signal-cloud-tab" markdown="1">
{% include /script-examples/signal-ressource/create-signal/cloud/with-api-key/index.md %}
</div>

<!-- Local example -->
<div class="tab-pane" id="create-signal-local" role="tabpanel" aria-labelledby="create-signal-local-tab" markdown="1">
{% include /script-examples/signal-ressource/create-signal/local/index.md %}
</div>
</div>
<br>

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