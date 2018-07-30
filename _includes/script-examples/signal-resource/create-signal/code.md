
<!-- Tab panes -->
<div class="tab-content cloud-or-local-tab-content">

<!-- Nav tabs -->
<ul class="nav nav-pills mb-3 cloud-or-local-nav" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link cloud-server " id="create-signal-cloud-tab"  data-toggle="pill"  href="#create-signal-cloud" role="tab" aria-controls="create-signal-cloud" aria-selected="true">Q Cloud</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active localhost-server" id="create-signal-local-tab"  data-toggle="pill"  href="#create-signal-local"  role="tab" aria-controls="create-signal-local" aria-selected="false">Localhost</a>
  </li>
</ul>

<!-- Cloud code example -->
<div class="tab-pane" id="create-signal-cloud" role="tabpanel" aria-labelledby="create-signal-cloud-tab" markdown="1">
{% include /script-examples/signal-resource/create-signal/cloud/with-api-key/index.md %}
</div>

<!-- Local example -->
<div class="tab-pane  active" id="create-signal-local" role="tabpanel" aria-labelledby="create-signal-local-tab" markdown="1">
{% include /script-examples/signal-resource/create-signal/local/index.md %}
</div>
</div>