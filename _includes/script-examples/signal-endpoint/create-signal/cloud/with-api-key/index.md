
###### Request

<!-- Nav tabs -->
<ul class="nav nav-tabs code-nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link curl-language active" id="create-signal-curl-cloud-tab" data-toggle="tab" href="#create-signal-curl-cloud" role="tab" aria-controls="create-signal-curl-cloud" aria-selected="true">Curl</a>
  </li>
  <li class="nav-item">
    <a class="nav-link node-language" id="create-signal-node-cloud-tab" data-toggle="tab" href="#create-signal-node-cloud" role="tab" aria-controls="create-signal-node-cloud" aria-selected="false">Node</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">

<!-- Curl code -->
<div class="code tab-pane active" id="create-signal-curl-cloud" role="tabpanel" aria-labelledby="create-signal-curl-cloud-tab" markdown="1">
{% include /script-examples/signal-endpoint/create-signal/cloud/with-api-key/curl.md %}

<!-- copy button -->
<a class="btn btn-sm" onclick="copyToClipBoard('create-signal-curl-cloud')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>

<!-- Node code -->
<div class="code tab-pane" id="create-signal-node-cloud" role="tabpanel" aria-labelledby="create-signal-node-cloud-tab" markdown="1">
{% include /script-examples/signal-endpoint/create-signal/cloud/with-api-key/node.md %}
<!-- copy button -->
<a class="btn btn-sm" onclick="copyToClipBoard('create-signal-node-cloud')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>
</div>

###### Response

<div  class="code code-response">
  <div class="json-code" id="example1">
    {
      "name": "Apple Stock increase 2",
      "pid": "DK5QPID",
      "zoneId": "2,2",
      "color": "#FF0000"
    }
  </div>
</div>