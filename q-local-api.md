---
layout: page
title: Local API Documentation
permalink: /q-local-api/
---



## Overview
You can communicate with your device throught 2 different APIs.
A cloud api and a local api

### Cloud API
The script you right on any machine will communicate with the cloud,
the cloud will communicate with the Q desktop installed on the computer and then the Q desktop will
communicate to the Q enabled device plugged in on this computer.
This script can be hosted on any online server and will still communicate with the Q enabled.

-	Speed (~20 Seconds)
-	Internet Accessibility
-	Integration with IFTTT etc
-	OAuth credential requirement
-	Messages can be viewed in Q Signal Centre https://qapp.daskeyboard.com/signals
-	Mobile app can see signals


### Local API
The script needs to be running on the machine where the Q enabled device is plugged in. 
The sccript will communicate directly to the Q desktop that opens a web server on the port 27301.
The Q desktop will then communicate with the Q enabled device.

- Speed (<500 ms)
-	Limited Accessibility - Commands can only be sent locally http://localhost:27301
-	No credential requirement
-	Not reliant on Q Cloud, useful if Q Cloud is down or performing maintenance
- Can be used offline
-	Privacy – Signals are not stored on the cloud database
-	Messages will not appear in Q Signal Centre - https://qapp.daskeyboard.com/signals
-	Mobile apps will not see these signals


## Signal Endpoint

### Create a signal
{% include /script-examples/signal-endpoint/create-signal/index.md %}






