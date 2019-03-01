---
layout: page
title: Changelog Das Keyboard Q Desktop Software
permalink: /updates/changelog/
---


<a class="btn btn-outline-success float-right" href="{{ '/get-started/software'  | relative_url }}" >Download</a>



## Version 3.2.3

March 1, 2019

### HIGHLIGHTS

- Improved CPU Load on Mac and Linux
- Important bug fixes

### IMPROVEMENTS

* **CPU usage:** Improved CPU load on Mac and Linux.

### BUG FIXES

* **Profiles:** User now needs to click save when making a profile change for it to apply.
* **Applets:**
  * Paused applets no longer restart when re-opening the application
  * Applets no longer start running before the configuration is applied
* **Service Comunication:**
  * Improved error management in the service
  * Keyboard no longer disconnects after hibernation (Windows) or reboot.
* **Mac:** .app is now properly signed  

---

## Version 3.2.2

February 14, 2019

### HIGHLIGHTS

 Important bug fixes and applet development capabilities.

### NEW FEATURES

* **Profile switcher:**  Implemented the profile switcher back on macOS
* **Q Applet development:**
  *  Updated documentation url
  *  Removed developer view that was containing the XY mapping
  *  Added new control type `effect` for Applet inputs
  *  Added new control type `color` for Applet inputs

### BUG FIXES

* **Signal center:**  Signal center window -> right click and choose open in browser will no longer makes the application crash
* **Firmware upgrade:**  Firmware upgrade is now working with different OS locales
* **Profile Switcher:**  File explorer on macOS now allows to select `*.app` files for profile switcher
* **Applet input:** typeahead search now always returns the correct key
* **Effects:**  Improved color cycle and breathe effects for the Das Keyboard 5Q
* **Signal preview:**  Delete message preview will now delete signal message coming from cloud
* **Firmware update utility:**  Upon successful firmware update, application now returns to previous screen

### KNOWN LIMITATIONS

* in some occasions, keyboard needs to be power-cycled (unplug/re-plug) after installation to be connected

---

## Version 3.2.1

February 1, 2019

### HIGHLIGHTS

* Critical bug fix for macOS: key presses were opening the dashboard on some occasions
* Ability to downgrade the 5Q firmware (useful for tech support)

### NEW FEATURES

* **Firmware update:**
  * Windows: Implemented one-click firmware upgrade for 5Q
  * 5Q firmware can now be upgraded and downgraded to any version (useful for regression)
  * Added confirmation before firmware upgrade

### BUG FIXES

* **Q Button:**  macOS: Das Keyboard Q App now only opens when pressing Q Button
* **Autolaunch:** macOS: Application no longer add multiple login items

### KNOWN LIMITATIONS

* profile switcher has been temporarily disabled on Mac to address the `tccd` process CPU over usage. This will be re-implemented in the near future
* in some occasions, keyboard needs to be power-cycled (unplug/re-plug) after installation to be connected

---


## Version 3.2.0

January 29, 2019

### HIGHLIGHTS

Message preview = `Q Button` + `<key>`: displays notifications by pressing the `Q button` and a key with a signal

<div style="margin-bottom: 30px; margin-top: 10px;">
<img src="{{ '/updates/images/message-preview.png'  | relative_url }}"
alt="Das Keyboard Q message preview"
style="margin-bottom: 20px;">
<div>Message preview in action</div>
<img src="{{ '/updates/images/message-preview.gif'  | relative_url }}"
alt="Das Keyboard Q message preview in action" >
</div>

### NEW FEATURES

* **Message preview :**
  * Holding the Q button and pressing another key will open a popup window with information about the signal
  * If the message preview window is opened, pressing Q button will close the window



### OTHER CHANGES

* **Signal Center:**  Signal center is now deprecated: users should use applets

### KNOWN LIMITATIONS

* profile switcher has been temporarily disabled on Mac to address the `tccd` process CPU over usage. This will be re-implemented in the near future
* in some occasions, keyboard needs to be power-cycled (unplug/re-plug) after installation to be connected

---

## Version 3.1.2

January 18, 2019

### HIGHLIGHTS

* Improved user experience
* new applets for programmers, system administrators, webmasters and devops

### NEW FEATURES

* **Dashboard:**
* navigation is now available in the dashboard with arrow, WASD and VIM navigation keys
* shortcuts are now available in the dashboard: `O` opens action URL, `R` refreshes the applet and `#` deletes the notification
* keyboard shortcuts detailed in preferences 
* **Settings:**
* debugging log mode to log detailed keyboard communication.

### IMPROVEMENTS

* **Applets:**
* applets are now sorted by name in the Q marketplace
* new popovers to show applet configuration
* Q Marketplace now shows badges when applet upgrades are available
* **Settings:**
* device settings are now in the preference menu
* **Dashboard:**
* Q button now opens the dashboard. Pressing the Q button again closes the dashboard
* Q button now opens the most recent signal
* `flash`, `show in markeplace` and `refresh` actions are now grouped together in a sub menu `...`  
* **Local API:**
- new API now supports multi-zone signals
* **Service communication:**
* improved stability of communication with the service

### FIXES

* **Applets:**
* applets are now sorted by name in the Q marketplace
* improved applet initialization after reboot
* applet list now expands to maximize the view
* readme changelog link now works
* applet log file is now limited to 10MB and will rotate
* login applet window now always prompts for login
* applet upgrade now cleans old signals
* **System messages:**
* application now fetches system messages even if no user is logged in
* read system messages no longer notify user after reboot
* new system messages now change the background of the bell to orange 
* **dropdown menu:**
* keyboard is no longer displayed in transparency through menus 
* **DK4Q layout:** 
* backspace key XY coordinates are now correct : (13,1) and (14, 1)  

### KNOWN LIMITATIONS

- profile switcher has been temporarily disabled on Mac to address the `tccd` process CPU over usage. This will be re-implemented in the near future
- in some occasions, keyboard needs to be power-cycled (unplug/re-plug) after installation to be connected.

---

## Version 3.1.1

December 18, 2018

### Bug Fixes

* **marketplace:**  
  * moved Marketplace location to be accessible from China
  * Gmail authentication window was not working in some cases
* **installer:**  installer no longer hangs in windows 7
* **miscellaneous:**
  *  corrected typo in firmware upgrade button
  *  corrected typo in download popup message

---

## Version 3.1.0 for Mac

December 14, 2018

### Das Keyboard Q-Desktop Release Notes

This release includes the same changes as version 3.1.0 for Windows and Linux.

### HIGHLIGHTS

- stable release of Q Desktop for Mac
- 5Q firmware can be updated from Q Desktop on Mac

### FIXES

- fix: in some cases macOS Q service `das_keyboard_q-service` was using 100% CPU
- Q Desktop application no longer triggers the `tccd` process > 100% CPU

### KNOWN LIMITATIONS

- profile switcher has been temporarily disabled on Mac to address the `tccd` process CPU over usage. This will be re-implemented in the near future

---

## Version 3.1.0 (Windows and Linux)

December 13, 2018

### Das Keyboard Q-Desktop Release Notes

This release includes all changes from 3.1.0 beta.

### HIGHLIGHTS

- stable release of the Q Desktop for Windows and Linux. (Mac will be coming soon)
- 10 new applets added, including Gmail, international weather, Trello and more!
- a developer mode to load local applets under development inside the Q Desktop
- signals popup messages support an action URL
- keyboard firmware on-click upgrade from Q Desktop (5Q only, more to come)

### NEW

- Q Marketplace installed applets are visible in offline mode.
- applets can be loaded in Q desktop for testing in developer mode
- applets requiring the new version of the Q Desktop will prompt for user to upgrade.
- new applet input control type search with `typeahead`
- Q Desktop can now be used without connecting a Q keyboard
- 5Q firmware upgrades are now performed via Q Desktop (Windows and Linux)
- add applets API key authentication scheme

### IMPROVEMENTS

- user applets upgrade to major new version (semver) will be re-installed completely when user upgrades
- trash icon in the signal popover window now dismisses the signal instead of uninstalling the applet
- multiple tweaks to the design and user experience
- improved applet input form validation

### FIXES

- installer no longer asks for unnecessary reboot
- previous profile is automatically loaded after reboot
- when editing a color profile while applets are running, changes are applied after `save`

### Q SOFTWARE  COMPATIBILITY MATRIX

- 5Q: stable for Windows and Linux (Mac coming soon)
- 4Q: stable for Windows and Linux
- X50Q: stable for Windows

---

## Version 3.1.0-beta (Windows, Linux)

December 11, 2018

### Das Keyboard Q-Desktop Release Notes

### HIGHLIGHTS

- 10 new applets are available, including Gmail, international weather, Trello and more!
- there is now a developer mode to load local applets under development inside the Q Desktop
- applets now have a button to follow an action URL in the dashboard
- keyboard firmware on-click upgrade from Q Desktop (5Q only, more to come)

### NEW

- Q Marketplace can now be accessed offline to display already installed applets.
- applets can be loaded locally for testing in developer mode
- applets requiring the latest version of the Q Desktop will prompt for upgrading the software prior to upgrading the applet.
- applet inputs now support a `Typeahead` search control type
- the Q Desktop can now be used without connecting a Q keyboard
- firmware upgrades are now done through the Q Desktop for the 5Q on Windows and Linux
- use of services requiring API keys is now supported in applets

### IMPROVEMENTS

- applets introducing major changes will be re-installed completely when upgrading
- the trash icon in the signal popover window now dismisses the signal instead of uninstalling the applet
- multiple tweaks to the design and user experience
- improved form validation for applet input 

### FIXES

- installer no longer asks for reboot and now finishes after all installers are complete
- current profile now applies after reboot without having to unplug the keyboard
- when updating a profile while applets are running, the change now only applies when the user clicks `save`

 ---

## Version 3.0.0-beta.3 (Linux)

November 16, 2018

### Das Keyboard Q-Desktop Release Notes

### NEW

- added Das Keyboard 4Q support for Linux

### ADDED

- added an applet refresh action button in the dashboard and marketplace UI
- applet user input now handles dynamic input arrays (example: more than 1 email for email input)

### UPDATED

- any part of the applet can be grabbed for repositioning in the applet configuration screen

### FIXED

- fixed segmentation fault happening on some versions of Ubuntu (18.04 LTS and prior versions)
- Q Button now opens the dashboard corresponding to the plugged in device
- Q Button now opens the application window even when minimized
- applets will not modify the current profile if modifications are not saved
- on long keys, the arrow for the applet instance tooltip was not positioned properly
- show me arround on the homepage now only adds 1 5Q device (instead of 2)
- sidebar navigation links are now centered (RGB, APPLETS, IFTTT)
- when user logs out and logs back in, signals for applets now appear right away in the Q Desktop


## Version 3.0.0 Windows, 3.0.0-beta.2 (Mac), 3.0.0-beta.2 (Linux)

November 7, 2018

### Das Keyboard Q-Desktop Release Notes

### NEW

- Q Marketplace for applets
- the application does not need login and can be used without the cloud, the login will be necessary only for more features

### ADDED

- added quota for number of requests to the local api
- added readme for developers
- added welcome view to prompt the user to plug a device
- display of error message for user applet inputs
- added flash action from the signals popover to flash the applet that created the signal
- after applet installation, the action `view in dashboard` will popup the signal associated to the applet


### UPDATED
- Q-button press will open the dashboard view with the latest signal received open
- customizing the keyboard with IFTTT and Zapier is now in the Advanced section
- in the marketplace, search will be displayed only if there is more than 100 applets
- signal center can only be accessed via the Q-icon which is hidden by default and can be displayed again from the preferences
- display the number of installed applets instead of the number of running applets


### FIXED
- multiple bug fixes


### Known Problems (Mac Beta Only)

In rare cases, the macOS Q Service `das_keyboard_q-service` uses too much CPU resource. 
If you encounter this problem, please post a message on the qforum and describe your setup: https://qforum.daskeyboard.com/.


## Version 3.0.0-beta (Windows, macOS, Linux)

November 3, 2018

### Das Keyboard Q-Desktop Release Notes

### ADDED
- Q Marketplace for applets.
- multizone signals with model version 2 (undocumented)

### UPDATED
- Q menu is now disabled. It can be enabled from the system preferences.
- Q button now opens the dashboard instead of the signal center

### FIXED
- many bug fixes

### Known Problems (Mac Beta Only)

In rare cases, the macOS Q Service `das_keyboard_q-service` uses too much CPU resource. 
If you encounter this problem, please post a message on the qforum and describe your setup: https://qforum.daskeyboard.com/.


## Version 2.0.4 (Windows), 2.0.4-beta (macOS), 2.0.4-beta (Linux)

October 30, 2018

### Das Keyboard Q-Desktop Release Notes:

### ADDED
- Das Keyboard 4Q support for Windows. 
- Blink active effect for the X50Q

### FIXED

- Installer error not finding Service Module.exe

### UPDATED

- When no zone is found for a signal, no key will be lit for that signal and the event is logged. Previously, when no zone was found for a Signal, the signal will be ig

### Known Problems (Mac Beta Only)

In rare cases, the macOS Q Service `das_keyboard_q-service` uses too much CPU resource. 
If you encounter this problem, please post a message on the qforum and describe your setup: https://qforum.daskeyboard.com/.

---

## Version 2.0.3 (Windows) and 2.0.3-beta (macOS)

September 28, 2018

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

In rare cases, the macOS Q Service `das_keyboard_q-service` uses too much CPU resource. 
If you encounter this problem, please post a message on the qforum and describe your setup: https://qforum.daskeyboard.com/.


---
## Version 2.0.2 (Windows) and 2.0.2-beta.2 (macOS)

September 21, 2018

### Release Highlights

- Command Center is now available for all Q-Desktop users
- New Beta release for Mac

### Q Desktop Release Detail Improvements

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

In rare cases, the macOS Q Service `das_keyboard_q-service` uses too much CPU resource. 
If you encounter this problem, please post a message on the qforum and describe your setup: https://qforum.daskeyboard.com/.


---

## Version 2.0.2-beta.1 (Mac only)

### Q Desktop Release Detail Improvements:

### NEW

- added communication with the keyboard from macOS. All application features are the same as for Windows.

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
