
<a name="create-signal-anchor" id="create-signal-anchor"></a>

### Create a signal

<div class="endpoint-container">
POST /signals
</div>


A signal can be created by making a POST HTTP request.
You can target a zone with 3 different ways. To know more about the zones please read this TODO Add 
link to zones ENDPOINT.
In all the cases the attribute to define the zone will be `zoneId`

#### Zone as a key code
A key code is an easy to read representation of a zone. It is used to create a signal that will target
a zone with `language` meaning.
Examples:

* KEY_W for the Weather
* KEY_B for a new email from the Boss

The physical zone of the signal will change depending on the layout ( KEY_Y is not at the same place
in a german and a US Layout)

For more information please relate to TODO (ADD LINK)

#### Request parameters
{% include /script-examples/signal-ressource/create-signal/local/request-description.html %}

##### Request

<!-- Tab panes -->
<div class="tab-content cloud-or-local-tab-content">

<!-- Nav tabs -->
<ul class="nav nav-tabs cloud-or-local-nav" role="tablist">
  <li class="nav-item">
    <a class="nav-link cloud-server active" 
       id="create-signal-cloud-tab" 
       data-toggle="tab" 
       href="#create-signal-cloud" 
       role="tab" 
       aria-controls="create-signal-cloud" 
       aria-selected="true">Cloud</a>
  </li>
  <li class="nav-item">
    <a class="nav-link local-server" 
       id="create-signal-local-tab" 
       data-toggle="tab" 
       href="#create-signal-local" 
       role="tab" 
       aria-controls="create-signal-local" 
       aria-selected="false">Local</a>
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