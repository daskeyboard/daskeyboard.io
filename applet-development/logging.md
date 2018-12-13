---
layout: page
title: "Applet log file & command line tools"
permalink: /applet-development/logging/
---

As an alternative to loading the applet inside Q desktop, a developer can use
 the the command line and the buit-in Q desktop logging facility.

## Running applet from command line

    node <script name> dev '{ <config> }'

Example 1:

    node index.js dev '{"authorization": { "apiKey": "secretkeyvalue" }}'

Example 2:

In this example, the user settings coming normally from the `questions` form are set from
the command line:

    node index.js dev '{"applet":{"user": {"name": "Alice"}}}'

Example 3:

In the example below, we set a user setting to "TXZ211" and we place the new applet 
instance at position 1,1 by default.

    node index.js dev '{"applet":{"user": {"zoneId": "TXZ211"}}, "geometry": {"width": 4, "height": 1, "origin": {"x": 1, "y": 1}}}'

## Logging

Logs auto-rotate which means that 
they are recycled when they get to a certain size. So be copious in your logging. Logging can (and should) remain in
`index.js` even when an applet is published for easier enduser 
troubleshooting.

To log a message from `index.js`:

```javascript

const q = require('daskeyboard-applet');
const logger = q.logger;

logger.info("Applet starting...");
logger.warn("No user settings found, using defaults");
logger.error("API unreachable");
```

Logs live in `~quio/` directory.

```json
cd ~/quio
ls *.log.*
quio.log.json #=> Q destop app log
applet.log.json #=> Q applet log
```

To view a log in real time:

    tail -f applet.log.json

## Factory Reset

When developing an applet, it is possible for Q desktop to crash or freeze. 
In this case, a developer can remove all applets and associated files using one of two ways:

Reset via the command line:

- Quit the Q Desktop App
- Run the following commands:

```bash
    rm -rf ~/.quio/v2/q_extensions
    rm -rf ~/.quio/v2/q_storage
```

- Restart the Q Desktop App

Use the built-in reset in Q desktop user preference menu.