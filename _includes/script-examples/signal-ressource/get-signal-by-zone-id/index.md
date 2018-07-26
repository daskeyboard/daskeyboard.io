

### Get signal by zoneId

<div class="endpoint-container">
GET /signals/pid/:pid/zoneId/:zoneId
</div>


A signal can be fetched by zoneId by making a GET HTTP request.
 A zone can be called in 3 different ways. To know more about the zones please read this <a href="{{ "q-zone-id-explanation"  | relative_url }}">understand zoneId</a>
In all the cases the attribute to define the zone will be `zoneId`



#### Request parameters
{% include /script-examples/signal-ressource/get-signal-by-zone-id/request-description.html %}

<a name="get-signal-by-zone-id-anchor" id="get-signal-by-zone-id-anchor" class="anchor"></a>

##### Request

<!-- Tab panes -->
<div class="tab-content cloud-or-local-tab-content">

<!-- Nav tabs -->
<ul class="nav nav-pills mb-3 cloud-or-local-nav" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link cloud-server active" id="get-signal-by-zone-id-cloud-tab"  data-toggle="pill"  href="#get-signal-by-zone-id-cloud" role="tab" aria-controls="get-signal-by-zone-id-cloud" aria-selected="true">Q Cloud</a>
  </li>
  <li class="nav-item">
    <a class="nav-link localhost-server" id="get-signal-by-zone-id-local-tab"  data-toggle="pill"  href="#get-signal-by-zone-id-local"  role="tab" aria-controls="get-signal-by-zone-id-local" aria-selected="false">Localhost</a>
  </li>
</ul>

<!-- Cloud code example -->
<div class="tab-pane active" id="get-signal-by-zone-id-cloud" role="tabpanel" aria-labelledby="get-signal-by-zone-id-cloud-tab" markdown="1">
{% include /script-examples/signal-ressource/get-signal-by-zone-id/cloud/with-api-key/index.md %}
</div>

<!-- Local example -->
<div class="tab-pane" id="get-signal-by-zone-id-local" role="tabpanel" aria-labelledby="get-signal-by-zone-id-local-tab" markdown="1">
{% include /script-examples/signal-ressource/get-signal-by-zone-id/local/index.md %}
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