---
layout: page
title: Changelog Q Desktop Software
permalink: /updates/changelog/
---
## Version 2.0.0-beta.7


### Release highlights: 

- improved Signal Center response time 
fixed local API time out in some cases.
- OFFLINE MODE: Added ability to change device RGB colors without login to the cloud 
- Added a QUIET MODE option to prevent interruption. In quiet mode only the RGB profiles are displayed on the devices. Signals are not displayed. Sound and notifications are disabled. Once the quiet mode is disabled, signals that came before, and new signals will be displayed as expected.

### Q Desktop Release Detail Improvements:

#### FIXED

- POST request timing out on the local API for signal creation 
- Connectivity loss of the keyboard with the QApp when computer goes to sleep
- Bugs related to the zoneId XY API
- Disabled link to the signal center on the signal popovers for signals that are coming from the local API
- Profile switcher now has a multi device support
- Turn off the Q-BUTTON if there is no signals on the dashboard
- Remove the signals from the dashboard after deletion in signal center

#### NEW

- Added action to quit the app from the navbar popover menu
- Added negative id to signals created from local API and ability to delete them by using a DELETE request from localhost
- Added ability to change device RGB colors without login to the cloud 
- Added ability to use local API without login to the Q cloud 
- Ability to Delete signal by zoneID in local API. zoneId can be vector example: (2,2), linear id example: 25 or code example: KEY_T 
- Added UK layout for the 5Q
- Apart from the DK5Q every device will be displayed only if it was plugged in one time. Also the user can forget this device and will have to plug it again for the app to remember it again 
- Added copyright in about menu Default profiles uses zoneXY. That means they are now multi device compatible User preference to enable or disable sound notifications User preference to show or hide app window at startup 
- Added a Quiet mode option to prevent interruption. In quiet mode only the RGB profiles are displayed on the devices. Signals are not displayed. Sound and notifications are disabled. Once the quiet mode is disabled, signals that came before, and new signals will be displayed as expected. 
- Added ability to delete signals from the dashboard signal popovers

#### UPDATE

- Moved the preference action to the settings ‘cog’ dropdown. And always display the ‘cog’ dropdown even if user not logged in 
- Added better user experience when the app loses connectivity with the cloud (Example: red cross displayed on the Q-icon if the backend cloud server is unreachable, cross will disappear when the connectivity is back)

### Q Desktop Service Improvements:

#### FIXED 

- Improved stability of the Windows service - not perfect yet but a lot better. More improvements to come.

---

### Version 2.0.0-beta.4

#### NEW

* signal Center is now in the cloud and opens in an Electron Browser window;
* updated welcome video;
* clicking on a profile name will focus on profile name input;

#### FIX

* fixed the repeated text for linux installers window;
* fixed the link to the changelog page;
* select the new cloned profile when doing a profile clone;

### Version 2.0.0-beta.3

#### NEW

* added app version number in the home page;
* added contextual menu for copy, paste, cut and select all;
* profile name input: the enter key will save the changes and the escape key will cancel the changes;
* the log file will now be rotating;

#### FIX

* fixed blinking LEDs bug;
* removed device settings icon when in dashboard mode;
* the user can run only one instance of the QApp;
* fix a crash issue when trying to quit the QApp in Windows;

#### Improvements

* overall speed improvement when selecting key zones;

---

## Version 2.0.0-beta.2

#### New

* added contextual menu for copy, paste, cut and select all;

#### Fixes

* fixed signal popover;
* fixed setting of the current profile when plugging a device;
* fixed the linux installer issue with the wrong symlink, and missing executable;
* fixed the issue with the spawned profile switcher process not being killed upon quitting the app;
* fixed the editing of the left shift key;
* fixed an issue related to the timezone of the signals;
* fixed missing LED on the Q button;

#### Improvements

* removed the notifications when switching a profile using the profile switcher;
* updated the documentation link;

---

## Version 2.0.0-beta.1

#### New

* added a profile switcher feature - ability to select a profile based on the front-most running application;
* merged the edit and the dashboard modes - the profiles are displayed in dashboard as well now;
* added new stock profiles: red, green, blue, purple, longhorns and more;
* added Dashboard XY for developers;
* added zoneId XY API;

#### Fixes

* local http server now listens only to 127.0.0.1, and is unreachable from another computer (IP address);
* various small fixes and tweaks;

#### Improvements

* moved Signal Center to the web;
