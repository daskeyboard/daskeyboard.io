

### get signals

<div class="endpoint-container">
GET /signals
</div>

Fetch a list of signals using pagination


#### Request parameters

{% include /script-examples/signal-ressource/get-signals/request-description.html %}

<a name="get-signals-anchor" id="get-signals-anchor" class="anchor"></a>

##### Request

<!-- Tab panes -->
<div class="tab-content cloud-or-local-tab-content">

<!-- Nav tabs -->
<ul class="nav nav-pills mb-3 cloud-or-local-nav" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link cloud-server active" id="get-signals-cloud-tab"  data-toggle="pill"  href="#get-signals-cloud" role="tab" aria-controls="get-signals-cloud" aria-selected="true">Q Cloud only</a>
  </li>
</ul>

<!-- Cloud code example -->
<div class="tab-pane active" id="get-signals-cloud" role="tabpanel" aria-labelledby="get-signals-cloud-tab" markdown="1">
{% include /script-examples/signal-ressource/get-signals/cloud/with-api-key/index.md %}
</div>
</div>
<br>

##### Response




<div class="code-response" markdown="1">

```json
HTTP 200
{
  "content": [
    {
      "id": 1280765,
      "zoneId": "KEY_Q",
      "pid": "DK5QPID",
      "userId": 9,
      "name": "New Q app version available",
      "message": "Q App version 3 is available. Download it at https: //www.daskeyboard.io/get-started/download/",
      "effect": "SET_COLOR",
      "color": "#FF0000",
      "isMuted": false,
      "isArchived": false,
      "clientName": "Node script",
      "createdAt": 1532029505049,
      "updatedAt": 1532029505052
    },
    {
      "id": 1282828,
      "zoneId": "5,5",
      "pid": "DK5QPID",
      "userId": 9,
      "name": "Your package is on its way",
      "message": "Your 5Q is half way to your house",
      "effect": "SET_COLOR",
      "color": "#00FF00",
      "isMuted": false,
      "isArchived": false,
      "clientName": "Node script",
      "createdAt": 1532101242724,
      "updatedAt": 1532101288895
    }
  ],
  "size": 2,
  "sort": "createdAt: ASC",
  "hasNextPage": true,
  "page": 0,
  "totalElements": 53,
  "totalPages": 27
}
```

</div>