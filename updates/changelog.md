---
layout: page
title: Changelog Q Desktop Software
permalink: /updates/changelog/
---

## Version 2.0.0-beta.4

New:

* signal Center is now in the cloud and opens in an Electron Browser window;
* updated welcome video;
* clicking on a profile name will focus on profile name input;

Fixes:

* fixed the repeated text for linux installers window;
* fixed the link to the changelog page;
* select the new cloned profile when doing a profile clone;

## Version 2.0.0-beta.3

New:

* added app version number in the home page;
* added contextual menu for copy, paste, cut and select all;
* profile name input: the enter key will save the changes and the escape key will cancel the changes;
* the log file will now be rotating;

Fixes:

* fixed blinking LEDs bug;
* removed device settings icon when in dashboard mode;
* the user can run only one instance of the QApp;
* fix a crash issue when trying to quit the QApp in Windows;

Improvements:

* overall speed improvement when selecting key zones;

## Version 2.0.0-beta.2

New:

* added contextual menu for copy, paste, cut and select all;

Fixes:

* fixed signal popover;
* fixed setting of the current profile when plugging a device;
* fixed the linux installer issue with the wrong symlink, and missing executable;
* fixed the issue with the spawned profile switcher process not being killed upon quitting the app;
* fixed the editing of the left shift key;
* fixed an issue related to the timezone of the signals;
* fixed missing LED on the Q button;

Improvements:

* removed the notifications when switching a profile using the profile switcher;
* updated the documentation link;

## Version 2.0.0-beta.1

New:

* added a profile switcher feature - ability to select a profile based on the front-most running application;
* merged the edit and the dashboard modes - the profiles are displayed in dashboard as well now;
* added new stock profiles: red, green, blue, purple, longhorns and more;
* added Dashboard XY for developers;
* added zoneId XY API;

Fixes:

* local http server now listens only to 127.0.0.1, and is unreachable from another computer (IP address);
* various small fixes and tweaks;

Improvements:

* moved Signal Center to the web;