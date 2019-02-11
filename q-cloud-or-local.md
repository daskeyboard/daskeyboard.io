---
layout: page
title: Q Cloud or Localhost
permalink: /q-cloud-or-local/
---
<!-- {% include api_transition_header.html %} -->


## Overview
A developer can communicate with a Q device via a cloud or a local (desktop) API. Both API are compatible.

### Cloud API
This is the case where a script connect to a public Q API in the cloud. Das Keyboard Q cloud
 will communicate with the Q desktop installed on the computer and will
communicate with connected Q enabled devices.

-	Signal propagation: about 20 seconds (to be improved)
-	Internet Accessibility
-	Integration with IFTTT etc
-	OAuth credential requirement
-	Messages can be viewed in Q Signal Centre https://qapp.daskeyboard.com/signals
-	Mobile app can see signals


### Local API

A script can communicate directly to the Q desktop API on port 27301.
The Q desktop will then communicate with the Q enabled device.

- Signal propagation: < 1s
-	Commands can only be sent locally to http://localhost:27301
-	No credential requirement
-	Not reliant on Q Cloud, useful if Q Cloud is down or performing maintenance
- Can be used offline
-	Privacy – Signals are not stored on the Q cloud database
-	Messages will not appear in Q Signal Centre - https://qapp.daskeyboard.com/signals
-	Mobile apps will not see these signals

















