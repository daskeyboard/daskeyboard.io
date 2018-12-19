---
layout: page
title: "Download Das Keyboard Q Software"
permalink: /get-started/software/
---

<div class="homepage__button_row"
      id="softwarep-age-button-container"
      style="display: none;">
  <div style="text-align:center;">
    <a style="margin-right:0px;"
      class="get-started-button"
      id="software-download-button">Download Das&nbsp;Keyboard&nbsp;Q </a>
    <small>
      <small id="software-version-number"></small>
    </small>
  </div>
</div>

<a id="all-download-anchor-link" href="#all-downloads" style="display: none;">All downloads</a>

<img src="{{ 'images/5Q-box-back.jpg'  | relative_url }}" alt="Das Keyboard software in action">

## All Downloads

<div id="all-downloads"></div>

<table  class='table table-bordered'>
  <thead>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
    </tr>
    </thead>
  <tr>
    <td> 
        <a href='https://download.daskeyboard.com/q-software-releases/3.1.1/Das-Keyboard-Q-x64_3.1.1.exe'>
            3.1.1 - 64 bits
        </a>
    </td>
    <td>
      <a href='https://download.daskeyboard.com/q-software-releases/3.1.1/Das-Keyboard-Q_3.1.1.pkg'>
        3.1.1</a> - 5Q only
    </td>
    <td>
       <a href='https://download.daskeyboard.com/q-software-releases/3.1.1/das-keyboard-q_3.1.1.deb'>
        3.1.1.deb 64 bits</a> - 5Q and 4Q only<br/>
      <a href='https://copr.fedorainfracloud.org/coprs/appelond/das-keyboard/'>RPM </a> contributed by <a href="http://dennis-blog.appelon.net/">AppelonD</a> (untested by Das Keyboard)
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

<!-- ## macos upgrade from v2.0.2-beta1


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
</div> -->
