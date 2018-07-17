
<a name="create-signal-anchor" id="create-signal-anchor"></a>

### Create a signal

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

##### Cloud API
{% include /script-examples/signal-endpoint/create-signal/cloud/with-api-key/index.md %}

<br>

##### Local API
{% include /script-examples/signal-endpoint/create-signal/local/index.md %}