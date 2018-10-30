---
layout: page
title: "Q Applet Development"
permalink: /applet-development/
---

## DRAFT - Q applet development overview

A Q applet is a small program written in `javascript` that can be installed in
the Q software. Applets live in the Q marketplace.

Applets control a limited set of RGB LEDs called zones. For example, a `CPU
meter` would control the top horizontal LEDs from 1 to 9 (US layout).

============== Picture of marketplace


## Key concepts

A Q applet controls LEDs inside a `rectangular area``. This rectangle **always
starts at 0,0* for its top left corner and x,y for the bottom right corner.

Example1 1: a `CPU activity meter` could use 10 LEDs: 0,0 to 0,9.

Example 2: a `stock applet` of one stock ticker would display on one LED located
at 0,0 to 0,0.

Q: Why start at 0,0? What if I would like the weather in the middle of the
keyboard?

A: The end user will choose where to place an applet, very much like computer
users choose where to place their apps on a desktop. Applets can be moved
anywhere on a keybaord (think of the keyboard as being a display).

## Making an applet: CPU meter

Let's examing how to create a Q applet. This example is available on Github: https://github.com/daskeyboard/q-applet-cpu-usage


### File structure

A typical Q applets will look like this:

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

The heart of the Q applets is the `javascript` file `q-cpu-usage.js**. Let's dive into it.

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

At that is really all there is. Here is the complete content of the javascript file:

```
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
    // run this app every 3000 ms
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
}

const cpuUsage = new CpuUsage();
```

