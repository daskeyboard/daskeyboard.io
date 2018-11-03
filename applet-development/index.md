---
layout: page
title: "Q Applet Development"
permalink: /applet-development/
---

A Q applet is a program written in `javascript` that can be installed in the Q
software. Applets live in the Q marketplace.

Applets control a limited set of RGB LEDs called zones. For example, a `CPU
meter` would control the top horizontal LEDs from `backtick` to 9 (US layout).

<div class="row">
        <div class="col-md-12">
                <img src="{{ 'images/marketplace.png'  | relative_url }}"
                    alt="Q Marketplace">
        </div>
</div>

## Key concepts

A Q applet controls LEDs inside a `rectangular area` which is a 2D array of points.

Example1 1: a `CPU activity meter` could use 10 LEDs on one row.

```javascript
return new q.Signal({
    points: [[
      new q.Point('#FF0000),
      new q.Point('#00FF00),
      //.... 10 points total
      new q.Point('#0000FF),
      ]],
    name: 'CPU 28%',
    description: 'Average load of 28%.'  
    });
```

Example 2: a `stock applet` of one stock ticker would display itsself on one LED only. 
A user can add many stock applet instances.


```javascript
return new q.Signal({
    points: [[
      new q.Point('#0000FF)
      ]],
    name: 'TSLA up 25%',
    description: 'Tesla: $1780'  
    });
```

## Example: making a CPU meter Q applet

Let's walk through a concrete example and make a CPU meeter that displays a
bargraph on a Q keyboard. The final example is available on Github:
<https://github.com/daskeyboard/daskeyboard-applet--cpu-monitor>


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
├── README_ENDUSER.md
└── yarn.lock
```

The app packages dependencies are listed in `package.json` file. 

The `assets` directory contains the images for the marketplace.

The README_ENDUSER.md is the content that will be shown in the marketplace.

### Defining which LED to use

The Q applet will define its rectangle area needs in the `package.json` file as follows.
Here the applets will use 10 LEDs over 1 keyboard row. The applet will be first
positioned at `orign` point (0,1) here. However end user can drag and drop
applets anywhere on their keyboard so we don't need to specify a position.

```json
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
```

The heart of the Q applet is the `javascript` file `q-cpu-usage.js`. Let's dive into it.

### Main script file and its event loop

In the case of the CPU meter, we would like to update the RGB LEDs of the keyboard every 3
seconds.

To achieve this, we need to declare the polling interval`this.pollingInterval = 3000;` 
as in the sample code below:

```javascript
class CpuUsage extends q.DesktopApp {
  constructor() {
    super();
    // run every 3000 ms
    this.pollingInterval = 3000;
    logger.info("CPU Usage Meter ready to go!");
  }
```

Then we specify which function to call with the `event loop` run function:

```javascript
 // call this function every pollingInterval
 // sends a signal to the Q keyboard to light up LEDs based on CPU usage.
  async run() {
    return this.getCpuUsage().then(percent => {
      return new q.Signal({
        points: [this.generatePoints(percent)],
        name: "CPU Usage",
        message: Math.round(percent * 100) + "%",
        isMuted: true, // don't flash the Q button on each signal
      });
    });
  }
```

Here `this.getCpuUsage()` will be called periodically and is in charge of 
sending a `signal` to the keyboard to change its RGB LEDs. Here is the code:

```javascript
  async getCpuUsage() {
    return new Promise((resolve) => {
      os.cpuUsage(v => {
        resolve(v);
      })
    })
  }
```

The above call to `os.cpuUsage` will get the
 CPU percentage, then the promise will resolve
by generating a signal that will light up the keyboard keys.

The LED color and how many LEDs to use is calculated with `generatePoints(percent)` based
on the percentage of CPU usage:

```javascript
 generatePoints(percent) {
    const numberOfKeys = 10;
    // multiply the cpu percentage by the number total of keys 
    const numberOfKeysToLight = Math.round(numberOfKeys * percent);
    let points = [];

    // create a list of points (zones) with a color). Each point 
    // correspond to an LED
    for (let i = 0; i < numberOfKeys; i++) {
      points.push(new q.Point(this.getColor(i, numberOfKeysToLight)));
    }

    return points;
  }
```

Here is the complete content of the javascript file:

```javascript
// Library to track cpuUsage
const os = require('os-utils');

// Library to send signal to Q keyboards
const q = require('daskeyboard-applet');

// Color associated to cpu activity from low (green) to high (red).
const colors = ['#00FF00', '#00FF00', '#00FF00', '#00FF00', '#FFFF00', '#FFFF00', '#FF0000',
  '#FF0000', '#FF0000', '#FF0000'
];

const logger = q.logger;


class CpuUsage extends q.DesktopApp {
  constructor() {
    super();
    // run every 3000 ms
    this.pollingInterval = 3000;
    logger.info("CPU Usage Meter ready to go!");
  }

  // call this function every pollingInterval
  async run() {
    return this.getCpuUsage().then(percent => {
      return new q.Signal({
        points: [this.generatePoints(percent)],
        name: "CPU Usage",
        message: Math.round(percent * 100) + "%",
        isMuted: true, // don't flash the Q button on each signal
      });
    });
  }

  async getCpuUsage() {
    return new Promise((resolve) => {
      os.cpuUsage(v => {
        resolve(v);
      })
    })
  }

  generatePoints(percent) {
    const numberOfKeys = 10;
    // multiply the cpu percentage by the number total of keys 
    const numberOfKeysToLight = Math.round(numberOfKeys * percent);
    let points = [];

    // create a list of points (zones) with a color). Each point 
    // correspond to an LED
    for (let i = 0; i < numberOfKeys; i++) {
      points.push(new q.Point(this.getColor(i, numberOfKeysToLight)));
    }

    return points;
  }

  /** get a color of a zone depending on it's index on the zone array */
  getColor(zoneIndex, numberOfKeysToLight) {
    if (zoneIndex >= numberOfKeysToLight) {
      // if the zone is after the number max of keys to light. Turn off the light
      // Black color = no light
      return '#000000';
    } else {
      // turn on the zone with the proper color
      return colors[zoneIndex];
    }
  }
}

module.exports = {
  CpuUsage: CpuUsage
};

const cpuUsage = new CpuUsage();

```

### Running the app in dev mode

To run the app in dev mode:

    node q-cpu-usage.js dev

To stop it, use `Control-C`.

### Final touches: making this script a Q applet

To make this script into a Q applet, we need to add few files:

- package.json
- README.md
- README_ENDUSER.md
- an icon for the marketplace

The `package.json` needs to contain the information needed for the Q the
marketplace as in the following example:

```json
{
  "name": "q-cpu-usage",
  "displayName": "CPU Usage",
  "version": "1.0.3",
  "description": "Displays CPU usage on a Das Keyboard Q device",
  "officialProductName": "",
  "appUrl": "",
  "isSingleton": true,
  "videoUrl": "",
  "icon": "assets/cpu.png",
  "image": "assets/q-cpu-usage.png",
  "publisherName": "Das Keyboard",
  "authorName": "Das Keyboard team",
  "authorUrl": "https://twitter.com/daskeyboard",
  "issuesUrl": "https://github.com/metadot/q-applet-cpu-usage/issues",
  "homepage": "https://github.com/DasKeyboard/q-applet-cpu-usage",
  "readmeEnduserl": "https://github.com/metadot/README_END_USER.md",
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
      "height": 1
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

<https://github.com/daskeyboard/q-marketplace>
