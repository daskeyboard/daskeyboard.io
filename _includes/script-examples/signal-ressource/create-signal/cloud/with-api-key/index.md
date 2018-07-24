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
{% include /script-examples/backend-url/cloud/curl.md %}
{% include /script-examples/request-headers/cloud/with-api-key/curl.md %}
{% include /script-examples/signal-ressource/create-signal/curl.md %}

<!-- copy button -->
<a class="btn btn-sm copy-action" data-toggle="tooltip" data-placement="top" title="copy" onclick="copyToClipBoard('create-signal-curl-cloud')"><i class="fa fa-copy"></i></a>

<!-- edit button -->
<a class="btn btn-sm edit-action"  href="https://github.com/DasKeyboard/Daskeyboard.io/blob/master/_includes/script-examples/signal-ressource/create-signal/curl.md"><i class="fa fa-pencil"></i>&nbsp;Edit Source</a>
</div>

<!-- Node code -->
<div class="code tab-pane" id="create-signal-node-cloud" role="tabpanel" aria-labelledby="create-signal-node-cloud-tab" markdown="1">
{% include /script-examples/backend-url/cloud/node.md %}
{% include /script-examples/request-headers/cloud/with-api-key/node.md %}
{% include /script-examples/signal-ressource/create-signal/node.md %}
<!-- copy button -->
<a class="btn btn-sm copy-action" data-toggle="tooltip" data-placement="top" title="copy" onclick="copyToClipBoard('create-signal-node-cloud')"><i class="fa fa-copy"></i></a>

<!-- edit button -->
<a class="btn btn-sm edit-action"  href="https://github.com/DasKeyboard/Daskeyboard.io/blob/master/_includes/script-examples/signal-ressource/create-signal/node.md"><i class="fa fa-pencil"></i>&nbsp;Edit Source</a>
</div>
</div>