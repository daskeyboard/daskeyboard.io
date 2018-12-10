---
layout: page
title: "Q Applet Packaging"
permalink: /applet-development/packaging-publishing
---

Once an applet is developed, these simple few steps will get it published
in the Q marketplace.

<div class="row">
    <div class="col-md-12">
        <img src="{{ './images/yourapphere.png' }}"
                    alt="Q Marketplace">
    </div>
</div>

### Packaging for distribution

To be distributed on the Q marketplace, an applet needs the following files:

- package.json
- README.md
- README_ENDUSER.md
- an icon for the marketplace
- index.js

The `package.json` needs to contain the information needed for the Q the
marketplace as in the following example:

```json
{
  "name": "daskeyboard-applet--cpu-usage",
  "displayName": "CPU Usage",
  "version": "1.0.6",
  "description": "Displays CPU usage on a Das Keyboard Q device",
  "longDescription": "Keep an eye on the CPU activity on your Q keyboard!",
  "officialProductName": "CPU Usage",
  "appUrl": "URL of official app if any e.g.: https://gmail.com ",
  "isSingleton": true,
  "videoUrl": "",
  "icon": "assets/icon.png",
  "image": "assets/q-cpu-usage.png",
  "publisher": "Das Keyboard",
  "authorName": "Das Keyboard team",
  "authorUrl": "https://twitter.com/daskeyboard",
  "issuesUrl": "https://github.com/daskeyboard/daskeyboard-applet--cpu-monitor/issues",
  "homePageUrl": "https://github.com/daskeyboard/daskeyboard-applet--cpu-monitor",
  "developerRepoUrl": "https://github.com/daskeyboard/daskeyboard-applet--cpu-monitor",
  "licenseUrl": "http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt",
  "changelogUrl": "CHANGELOG.md",
  "license": "MIT",
  "readMeUrl": "README.md",
  "readMeEndUserUrl": "README_ENDUSER.md",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  },
  "engines": {
    "das-keyboard-q": "3.0.0"
  },
  "dependencies": {
    "daskeyboard-applet": "^2.7.12",
    "mocha": "^5.2.0",
    "os-utils": "^0.0.14",
    "request": "^2.88.0"
  },
  "qConfig": {
    "geometry": {
      "width": 10,
      "height": 1,
      "defaults": {
        "origin": {
          "x": 0,
          "y": 1
        }
      }
    }
  }
}
```

## Submitting an applet to the Q marketplace

It is easy to submit an applet to the Q market place. Just follow these instructions:

<https://github.com/daskeyboard/q-marketplace>
