---
layout: page
title: "Applet log file"
permalink: /applet-development/logging
---

To help debug applets, developer can use the logging facility 
implememted in Q desktop. Logs auto-rotate which means that 
they are recycled when they get to a certain size. So be copious in your logging. Logging can (and should) remain in
`index.js` even when an applet is published for easier enduser 
troubleshooting.

To log a message from `index.js`:

```javascript
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
````

To view a log in real time:

    tail -f applet.log.json
