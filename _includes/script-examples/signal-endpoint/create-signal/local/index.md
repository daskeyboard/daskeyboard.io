
###### Request

<ul class="tabs__top-bar">
    <li class="tab-link current" data-tab="tab-install-create-signal-curl-local">Curl</li>
    <li class="tab-link" data-tab="tab-install-create-signal-node-local">Node</li>
</ul>

<!-- curl tab -->
<div id="tab-install-create-signal-curl-local" class=" code tabs__content current" markdown="1">
{% include /script-examples/signal-endpoint/create-signal/local/curl.md %}
  <a class="btn btn-sm" onclick="copyToClipBoard('tab-install-create-signal-curl-local')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>

<!-- node tab -->
<div id="tab-install-create-signal-node-local" class=" code tabs__content" markdown="1">
{% include /script-examples/signal-endpoint/create-signal/local/node.md %}
  <a class="btn btn-sm" onclick="copyToClipBoard('tab-install-create-signal-node-local')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>


###### Response

The signals created from the local API will have a negative id.
This is to separate them from the cloud signals that have a positive id.

<div  class="code code-response">
  <div class="json-code" id="example1">
{ 
  "clientName": "PublicApi",
  "color": "#FF0000",
  "createdAt": "2018-07-17T14:42:10.580Z",
  "effect": "SET_COLOR",
  "id": -580,
  "message": "Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/",
  "name": "New Q app version available",
  "pid": "DK5QPID",
  "updatedAt": "2018-07-17T14:42:10.580Z",
  "zoneId": "KEY_Q"
}
  </div>
</div>
