---
layout: page
title: "Download Das Keyboard Q Software"
permalink: /get-started/software/
---

<div class="homepage__button_row">
  <div style="text-align:center;">
    <a style="margin-right:0px;"
      href="https://s3-us-west-2.amazonaws.com/q-software-releases/3.0.0/Das-Keyboard-Q-x64-Setup-3.0.0.exe"
      class="get-started-button"
      id="software-download-button">Download Das&nbsp;Keyboard&nbsp;Q </a>
    <small>
      <small id="software-version-number">Version 3.0.0</small>
    </small>
  </div>
</div>

<img src="{{ 'images/5Q-box-back.jpg'  | relative_url }}" alt="Das Keyboard software in action">

## All Downloads

<table class='table table-bordered'>
  <thead>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
    </tr>
    </thead>
  <tr>
    <td> 
        <a href='https://s3-us-west-2.amazonaws.com/q-software-releases/3.0.0/Das-Keyboard-Q-x64-Setup-3.0.0.exe'>
            3.0.0 - 64 bits
        </a>
        <br/>
        <a href='https://s3-us-west-2.amazonaws.com/q-software-releases/3.0.0/Das-Keyboard-Q-ia32-Setup-3.0.0.exe'>
            3.0.0 - 32 bits</a>
        <br/>
        <a href='https://s3-us-west-2.amazonaws.com/q-software-releases/3.1.0-beta/Das-Keyboard-3.1.0-beta.exe'>
            3.1.0-beta - 64 bits
        </a>
    </td>
    <td>
        <a href='https://s3-us-west-2.amazonaws.com/q-software-releases/3.0.0-beta/DasKeyboardQ_3.0.0-beta.2.pkg'>
        3.0.0-beta.2</a> - 5Q only
    </td>
    <td>
       <a href='https://s3-us-west-2.amazonaws.com/q-software-releases/3.1.0-beta/das-keyboard-q_3.1.0~beta.deb'>
        3.1.0-beta - .deb 64 bits</a> - 5Q only
    </td>
  </tr>

  <tr>
    <td><a href="{{ 'get-started/firmware/'  | relative_url }}"
        class="btn btn-sm btn-outline-dark"> Get firmware installer</a>
    </td>
    <td><a href="{{ 'get-started/firmware/'  | relative_url }}"
        class="btn btn-sm btn-outline-dark"> Get firmware installer</a>
    </td>
    <td><a href="{{ 'get-started/firmware/'  | relative_url }}"
        class="btn btn-sm btn-outline-dark"> Get firmware installer</a>
    </td>

  </tr>
</table>

## macos upgrade from v2.0.2-beta1


To upgrade from Q app  v2.0.2-beta.1 on Mac, first uninstall it using the following instructions:

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
