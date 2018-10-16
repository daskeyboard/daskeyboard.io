---
layout: page
title: "Get Started: Software Download"
permalink: /get-started/software/
---

#### What's new? See <a href="{{site.baseurl}}/updates/changelog/">changelog</a>.

### Important instructions before software upgrade

**Mac only**

If you have the mac version 2.0.2-beta.1 you need to uninstall it using the following instructions:

- open the Application Terminal located in the folder /Applications/Utilities
- run the 2 following commands

<div class="code-response" markdown="1">
```shell 
launchctl unload ~/Library/LaunchAgents/com.daskeyboard.service.plist
rm -f ~/Library/LaunchAgents/com.daskeyboard.service.plist
```
</div>

- close the q-Desktop.app by right clicking on the dock menu Q icon and clicking quit
- uninstall the q-Desktop.app located on the folder /Applications by drag and droping the icon into the trash
- validate that the application is not running anymore by running this commands

<div class="code-response" markdown="1">
```shell 
launchctl list | grep daskeyboard ps -ef | grep q-Desktop 
```
</div>

We need your help to test Mac and Linux software: become a [beta tester](https://docs.google.com/forms/d/e/1FAIpQLSdpQgxCFNOxWbiUu8PImeNb_je11C9-GguJRFGwK_Uf0YFmBw/viewform)

<div class="homepage__button_row">
  <div style="text-align:center;">
    <a style="margin-right:0px;"
      href="https://s3-us-west-2.amazonaws.com/q-software-releases/2.0.3/Das-Keyboard-Q-ia32-Setup-2.0.3.exe"
      class="get-started-button"
      id="software-download-button">Download Das&nbsp;Keyboard&nbsp;Q </a>
    <small>
      <small id="software-version-number">Version 2.0.3</small>
    </small>
  </div>
</div>


### Software downloads

#### Downloads for Windows:
- [https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-x64-Setup-2.0.2.exe](https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-x64-Setup-2.0.2.exe)
- [https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-ia32-Setup-2.0.2.exe](https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-ia32-Setup-2.0.2.exe)

#### Downloads for Linux:
- [https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0_amd64.deb](https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0_amd64.deb)
- [https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0.x86_64.rpm](https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0.x86_64.rpm)

#### Download for macOs:
  - [https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2-beta.2/DasKeyboardQ.pkg](https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2-beta.2/DasKeyboardQ.pkg)

### Next step

[Next step: Watch welcome video]({{site.baseurl}}/get-started/welcome-video/)
