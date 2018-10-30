---
layout: page
title: "Q Applet Development"
permalink: /applet-development/
---
# DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT DRAFT 
## DRAFT - Q applet development overview

A Q applet is a program written in `javascript` that can be installed in the Q
software. Applets live in the Q marketplace.

Applets control a limited set of RGB LEDs called zones. For example, a `CPU
meter` would control the top horizontal LEDs from 1 to 9 (US layout).

============== Picture of marketplace coming soon ==================================


## Key concepts

A Q applet controls LEDs inside a `rectangular area`. This rectangle *always
starts at coordinate 0,0* for its top left corner and any X,Y point for its
bottom right corner.

Example1 1: a `CPU activity meter` could use 10 LEDs on one row: 0,0 to 0,9.

Example 2: a `stock applet` of one stock ticker would display itsself on one LED located
at 0,0 to 0,0.

Q: Why start at 0,0? What if I would like the weather in the middle of the
keyboard?

A: The end user will choose where to place an applet, very much like computer
users choose where to place their apps on a desktop. Applets can be moved
anywhere on a keybaord (think of the keyboard as being a display).

## Example: making a CPU meter Q applet

Let's walk through a concrete example an make a CPU meeter that displays a
bargraph on a Q keyboard. The final example is available on Github:
https://github.com/daskeyboard/q-applet-cpu-usage


### File structure

A typical Q applet file structure will look like this:

```
> tree
.
├── assets
│   ├── cpu.png
│   └── q-cpu-usage.png
├── CHANGELOG.md
├── package.json
├── q-cpu-usage.js
├── README.md
└── yarn.lock
```
The app is described by a `package.json` file. The `assets` directory contains the images for the marketplace.


### Defining the which LED to use

The Q applet will define its rectangle area need in the `package.json` file like this:

```json
 "qConfig": {
    "geometry": {
      "width": 10,
      "height": 1
      ..... ===============================> TBD is this all?
    }
```
    
The heart of the Q applet is the `javascript` file `q-cpu-usage.js``. Let's dive into it.

### Main script file and its event loop

In the case of the CPU meter, we would like to update the RGB LEDs of the keyboard every 3
seconds. 

To achieve this, we need to declare the polling interval`this.pollingInterval = 3000;` as in the sample code below:

```javascript
class CpuUsage extends q.DesktopApp {
  constructor() {
    super();
    // run this app every 3000 ms
    this.pollingInterval = 3000;
  }
```

Then we specify which function to call with the `event loop` run function:

```javascript
  // call this function every pollingInterval
  async run() {
    this.getCpuUsage();
  }
```

Here ` this.getCpuUsage()` will be called periodically and is in charge of sending `signals` to the keyboard to change its RGB LEDs. Here is the sample code:

```javascript
/** get the cpu usage percentage  */
  getCpuUsage() {
    os.cpuUsage((v) => {
      const numberOfKeys = 10;
      // multiply the cpu percentage by the number total of keys 
      const numberOfKeysToLight = Math.round(numberOfKeys * v) + 1;
      let points = [];

      // create a list of points (zones) with a color). Each point 
      // correspond to an LED
      for (let i = 0; i < numberOfKeys; i++) {
        points.push(new q.Point(this.getColor(i, numberOfKeysToLight)));
      }

      // send list of RGB zones to Q keyboard
      this.sendLocal(new q.Signal({
        points: [points],
        name: "CPU Usage",
        message: Math.round(v * 100) + "%",
        isMuted: true,
      }));
    });
  }

```

That is really all there is. Here is the complete content of the javascript file:

```javascript
// Library to track cpuUsage
const os = require('os-utils');

// Library to send signal to Q keyboards
const q = require('daskeyboard-applet');

// Color associated to cpu activity from low (green) to high (red).
const colors = ['#00FF00', '#00FF00', '#00FF00', '#00FF00', '#FFFF00', '#FFFF00', '#FF0000',
  '#FF0000', '#FF0000', '#FF0000'
];


class CpuUsage extends q.DesktopApp {
  constructor() {
    super();
    // run every 3000 ms
    this.pollingInterval = 3000;
  }

  // call this function every pollingInterval
  async run() {
    this.getCpuUsage();
  }

  /** get a color of a zone depending on it's index on the zone array */
  getColor(zoneIndex, numberOfKeysToLight) {
    if (zoneIndex > numberOfKeysToLight) {
      // if the zone is after the number max of keys to light. Turn off the light
      // Black color = no light
      return '#000000';
    } else {
      // turn on the zone with the proper color
      return colors[zoneIndex];
    }
  }

  /** get the cpu usage percentage  */
  getCpuUsage() {
    os.cpuUsage((v) => {
      const numberOfKeys = 10;
      // multiply the cpu percentage by the number total of keys 
      const numberOfKeysToLight = Math.round(numberOfKeys * v) + 1;
      let points = [];

      // create a list of points (zones) with a color). Each point 
      // correspond to an LED withing the ** qConfig geometry field**
      // specified in the package.json file.
      for (let i = 0; i < numberOfKeys; i++) {
        points.push(new q.Point(this.getColor(i, numberOfKeysToLight)));
      }

      // send list of RGB zones to Q keyboard
      this.sendLocal(new q.Signal({
        points: [points],
        name: "CPU Usage",
        message: Math.round(v * 100) + "%",
        isMuted: true,
      }));
    });
  }
}

const cpuUsage = new CpuUsage();
```

### Running the app in dev mode

To run the app in dev mode:

    node q-cpu-usage.js --test
    
To stop it, use `Control-C`.

### Final touches: making this script a Q applet

To make this script into a Q applet, we need to add few files:

 - package.json
 - README.md
 - an icon for the marketplace 
 
The `package.json` needs to contain the information needed for the Q the
marketplace as in the following example:

```json
{
  "name": "q-cpu-usage",
  "displayName": "CPU Usage",
  "version": "1.0.3",
  "description": "Displays CPU usage on a Das Keyboard Q device",
  "longDescription": "Keep an eye on the CPU activity on your Q keyboard!",
  "officialProductName": "",
  "appUrl": "",
  "isSingleton": false,
  "videoUrl": "",
  "icon": "assets/cpu.png",
  "image": "assets/q-cpu-usage.png",
  "publisherName": "Das Keyboard",
  "authorName": "Das Keyboard team",
  "authorUrl": "https://twitter.com/daskeyboard",
  "issuesUrl": "https://github.com/metadot/q-applet-cpu-usage/issues",
  "homepage": "https://github.com/DasKeyboard/q-applet-cpu-usage",
  "developerRepoUrl": "https://github.com/metadot/q-applet-cpu-usage",
  "licenseUrl": "http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt",
  "changelogUrl": "",
  "qActionUrl": "",
  "main": "q-cpu-usage.js",
  "scripts": {
    "start": "node q-cpu-usage.js"
  },
  "engines": {
    "das-keyboard-q": "2.4.x"
  },
  "dependencies": {
    "daskeyboard-applet": "~2.5.1",
    "os-utils": "^0.0.14",
    "request": "^2.88.0"
  },
  "qConfig": {
    "geometry": {
      "width": 10,
      "height": 1,
      "defaults": {
        "origin": { // =======================================================NEEDED?
          "x": 0,   // =======================================================NEEDED?
          "y": 1   // =======================================================NEEDED?
        } // =======================================================NEEDED?
      }
    },
    "applet": {
      "defaults": {}
    }
  }
}
```

## Submitting an applet to the Q market place

It is very easy to submit an applet to the Q market place. Just follow these instructions:

================================================================== LINK TBD

