#### Request
<ul class="tabs__top-bar">
    <li class="tab-link current" data-tab="tab-install-create-signal-node">Node</li>
    <li class="tab-link" data-tab="tab-install-java">Java</li>
</ul>
<div id="tab-install-create-signal-node" class=" code tabs__content current" markdown="1">
{% include /script-examples/create-signal/cloud/with-api-key/node.md %}
  <a class="btn btn-sm" onclick="copyToClipBoard('create-signal-node')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>

<div id="tab-install-java" class="tabs__content" markdown="1">
{% include /script-examples/send-signal-to-cloud/java.md %}
</div>


#### Response

<div  class="code code-response">
  <div class="json-code" id="example1">
    {
      "name": "Apple Stock increase 2",
      "pid": "DK5QPID",
      "zoneId": "2,2",
      "color": "#FF0000"
    }
  </div>
  <a class="btn btn-sm" onclick="copyToClipBoard('example1')"><i class="fa fa-copy"></i>&nbsp;copy</a>
</div>
