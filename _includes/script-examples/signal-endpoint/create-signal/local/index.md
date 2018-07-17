
###### Request

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="create-signal-curl-local-tab" data-toggle="tab" href="#create-signal-curl-local" role="tab" aria-controls="create-signal-curl-local" aria-selected="true">Curl</a>
    <a class="nav-item nav-link" id="create-signal-node-local-tab" data-toggle="tab" href="#create-signal-node-local" role="tab" aria-controls="create-signal-node-local" aria-selected="false">Node</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <!-- curl code -->
<div class="code tab-pane fade show active" id="create-signal-curl-local" role="tabpanel" aria-labelledby="create-signal-curl-local-tab" markdown="1">   
{% include /script-examples/signal-endpoint/create-signal/local/curl.md %}
<a class="btn btn-sm" onclick="copyToClipBoard('create-signal-curl-local')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>

<!-- node code  -->
<div class="code tab-pane fade" id="create-signal-node-local" role="tabpanel" aria-labelledby="create-signal-node-local-tab" markdown="1">
{% include /script-examples/signal-endpoint/create-signal/local/node.md %}
<a class="btn btn-sm" onclick="copyToClipBoard('create-signal-node-local')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>
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
