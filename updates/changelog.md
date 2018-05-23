---
layout: page
title: Changelog
permalink: /updates/changelog/
---

## Version 2.0.0-beta.4

New:

* Signal Center is now in the cloud and opens in an Electron Browser Window
* Updated welcome video
* Clicking on a profile name will focus on profile name input

Fixes:

* Fixed the repeated text for linux installers window
* Fixed the link to the changelog page
* Select the new cloned profile when doing a profile clone

## Version 2.0.0-beta.3

New:

* added app version number in the home page
* added contextual menu for copy, paste, cut and select all
* profile name input - the enter key will save the changes and the escape key will cancel the changes
* the log file will now be rotating

Fixes:

* fixed the blinking LEDs
* removed device settings icon when in dashboard mode
* the user can run only one instance of the QApp
* fix a crash isse when trying to quit the QApp in Windows

Improvements:

* overall speed improvement when doing selection of key zones

## Version 2.0.0-beta.2

New:

* added contextual menu for copy, paste, cut and select all

Fixes:

* fixed signal popover
* fixed setting of the current profile when plugging a device
* fixed the linux installer issue with the wrong symlink, and missing executable
* fixed the issue with the spawned profile switcher process not being killed upon quitting the app
* fixed the editing of the left shift key
* fixed an issue related to the timezone of the signals
* fixed missing LED on the Q button

Improvements:

* removed the notifications when switching a profile using the profile switcher
* updated the documentation link

## Version 2.0.0-beta.1

New:

* Added a profile switcher feature - ability to select a profile based on the front-most running application
* Merged the edit and the dashboard modes - the profiles are displayed in dashboard as well now
* Added new stock profiles: red, green, blue, purple, longhorns and more
* Added Dashboard XY for developers
* Added zoneId XY API

Improvements:

* Moved Signal Center to the web

Fixes:

* Local http server now listens only to 127.0.0.1, and is unreachable from another computer (IP address)
* Various small fixes and tweaks