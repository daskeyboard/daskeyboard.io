---
layout: page
title: Changelog Das Keyboard Q Desktop Software
permalink: /updates/changelog/
---

## Version 2.0.3 (Windows) and 2.0.3-beta (MacOS)

## Date released: September 28, 2018

### Das Keyboard Q-Desktop Release Notes:

### FIXED

- Latest selected profile will be restored after reboot even with connectivity loss
- Local API signal endpoint implements PID attribute `Q_MATRIX` to trigger all connected devices
- MAC installer now successfully quits the previous Das Keyboard Q application before install
- When device is disconnected, `firmware upgrade available` button will not be displayed anymore
- X50Q Q-Button will trigger the signal center (Windows only)
- All incomming notifications are now displayed (MAC only, already working on Windows)
- Profile list no longer bounces when deleting the latest profile
- New version popup notification is now OS specific
- Notifications will not be duplicated every 10 min (MAC only, already working on Windows)

### UPDATED

- Updated the names of executables and services to include "Das Keyboard Q" (Windows only)
- Multiple zone selection on the `Edit` mode uses CMD + click instead of CTRL + click (MAC only)

### Known Problems (Mac Beta Only)

In rare cases, the MacOS Q Service `das_keyboard_q-service` uses too much CPU resource. 
If you encounter this problem, please post a message on the qforum and describe your setup: https://qforum.daskeyboard.com/.


---
## Version 2.0.2 (Windows) and 2.0.2-beta.2 (MacOS)

## Date released: September 21, 2018

### Release Highlights

- Command Center is now available for all Q-Desktop users
- New Beta release for Mac

### Q Desktop Release Detail Improvements:

### FIXED

- Mac only: application now quits correctly
- Mac only: application now launches at startup
- Mac only: changed service name and executables to include the words "das" and "keyboard"
- The `Firmware available` button will disappear when the firmware is up to date
- 105 layout is now correclty supported for X50Q keyboards
- X50Q now supports colors formated with 3-digit hexadecimal format (e.g.: #F00)

### NEW

- New signed Mac installer 
- Command Center is now available to control IoT devices. Video: https://youtu.be/JWsuqvezVKs
- If `isMuted` attribute of a Signal is set to true, the app will not notify the user and the Q-button will not turn green for this signal
- Added LASER, INWARD_RIPPLE, RIPPLE active effect triggered with Signal on X50Q device
- If a local file is corrupted, the user will be notified and the file will be deleted

### UPDATED

- Faster Signals refresh rate (15s) 
- Signals are now displayed on all connected devices. Notifications are no longer device specific.
- `quio.log` logfile renamed to `quio.json`.

### Known Problems (Mac Beta Only)

In rare cases, the MacOS Q Service `das_keyboard_q-service` uses too much CPU resource. 
If you encounter this problem, please post a message on the qforum and describe your setup: https://qforum.daskeyboard.com/.


---

## Version 2.0.2-beta.1 (Mac only)

### Q Desktop Release Detail Improvements:

### NEW

- added communication with the keyboard from MacOS. All application features are the same as for Windows.

## Version 2.0.1

### Q Desktop Release Detail Improvements:

### FIXED

- The dashboard view will no longer show a blank screen when a signal message has no content
- fixed the key mapping of the Danish, French and Italian layouts

### NEW

- added the ability to show the welcome artifacts again from the preferences menu
- added the ability to access the IFTTT signals configuration from the dashboard screen
- added separate builds for Windows 32-bit and Windows 64-bit support

### UPDATED

- changed the q-button press detection method to conform with industry standards

---

## Version 2.0.0

### Q Desktop Release Detail Improvements:

### FIXED

- The middle navbar is now aligned in the middle
- The right and left pipes will display the signal popovers correctly on the dashboard view
- For a key, selecting the effect `none` then selecting any other effect will display the correct effect
- Signal popover date and signal popover actions are now aligned
- Signal popover arrow is now inside the box
- Signal popover text will not be overflowing anymore

### NEW

- Ability to set IFTTT Applets inside the QApp


### UPDATED

- All shadow signals route for the local API to be /signals/shadows instead of /signals
- No return content for the delete request on the local API
- Select device from home page will always display dashboard view

---

## Version 2.0.0-beta.9

### Q Desktop Release Detail Improvements:

#### FIXED

- If signal already present in a zone the new one will overwrite the old one correctly
- Breathing effect will not have another shadow color anymore

---


## Version 2.0.0-beta.8

### Q Desktop Release Detail Improvements:

#### FIXED

- API port was not showing for some users in the dashboard view
- App was notifying for duplicated signals every 10 min.
- Changing device layout will now reload the signals in the correct zone
- Shadow signal was corrupted. The dashboard now displays the latest signal for each zone (shadow)
- App no longer crashes with asynchronous calls to the localhost API
- When a signal zone is not found, the space bar LED turns RED (instead of signal color)



#### UPDATE
- Modified local API routes to be consistent with the cloud


### Q Desktop Service Improvements:

#### FIXED 

- Windows 7 support: service startup no longer needs the "--standalone" workaround.

---


## Version 2.0.0-beta.7


### Release highlights: 

- Improved Signal Center response time 
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

* Signal Center is now in the cloud and opens in an Electron Browser window;
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
