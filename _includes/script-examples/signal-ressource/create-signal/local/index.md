<!-- Nav tabs -->
<ul class="nav nav-tabs code-nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link curl-language active" id="create-signal-curl-local-tab" data-toggle="tab" href="#create-signal-curl-local" role="tab" aria-controls="create-signal-curl-local" aria-selected="true">Curl</a>
  </li>
  <li class="nav-item">
    <a class="nav-link node-language" id="create-signal-node-local-tab" data-toggle="tab" href="#create-signal-node-local" role="tab" aria-controls="create-signal-node-local" aria-selected="false">Node</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">

<!-- Curl code -->
<div class="code tab-pane active" id="create-signal-curl-local" role="tabpanel" aria-labelledby="create-signal-curl-local-tab" markdown="1">
{% include /script-examples/backend-url/local/curl.md %}
{% include /script-examples/request-headers/local/curl.md %}
{% include /script-examples/signal-ressource/create-signal/curl.md %}

<!-- copy button -->
<a class="btn btn-sm copy-action"  data-toggle="tooltip" data-placement="top" title="copy" onclick="copyToClipBoard('create-signal-curl-local')"><i class="fa fa-copy"></i></a>

<!-- edit button -->
<a class="btn btn-sm edit-action"  data-toggle="tooltip" data-placement="top" title="edit" href="https://github.com/DasKeyboard/Daskeyboard.io/blob/master/_includes/script-examples/signal-ressource/create-signal/curl.md"><i class="fa fa-edit"></i></a>

</div>

<!-- Node code -->
<div class="code tab-pane" id="create-signal-node-local" role="tabpanel" aria-labelledby="create-signal-node-local-tab" markdown="1">
{% include /script-examples/backend-url/local/node.md %}
{% include /script-examples/request-headers/local/node.md %}
{% include /script-examples/signal-ressource/create-signal/node.md %}

<!-- copy button -->
<a class="btn btn-sm copy-action" data-toggle="tooltip" data-placement="top" title="copy"  onclick="copyToClipBoard('create-signal-node-local')"><i class="fa fa-copy"></i></a>

<!-- edit button -->
<a class="btn btn-sm edit-action"  data-toggle="tooltip" data-placement="top" title="edit" href="https://github.com/DasKeyboard/Daskeyboard.io/blob/master/_includes/script-examples/signal-ressource/create-signal/node.md"><i class="fa fa-edit"></i></a>
</div>
</div>