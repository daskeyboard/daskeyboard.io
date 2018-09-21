---
layout: page
title: "Get Started: Download"
permalink: /get-started/download/
---

## Control Das Keyboard RGB devices with Q software.

#### What's new? See <a href="{{site.baseurl}}/updates/changelog/">changelog</a>.



<div class="homepage__button_row">
  <div style="text-align:center;"><a
   id="firmware-download-button"
   class="get-started-button"></a>
  <small><small style="margin-right: 40px;">All OS - Version 7.4.9</small></small></div>
  <div style="text-align:center;"><a style="margin-right:0px;" href="https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-ia32-Setup-2.0.2.exe" class="get-started-button" id="software-download-button">Download Q desktop </a><small><small id="software-version-number">Version 2.0.2</small></small></div>
</div>


<div  style="margin-left:0; margin-right:0; width:auto; margin-bottom: 1.5em;">
<div >
<h5 class="card-title">Important instructions before software upgrade</h5>

<h6><b>Mac Only: </b></h6>
If you have the mac version 2.0.2-beta.1 <b>you need to uninstall </b>it using the following instructions:

<ul>
<li> open the Application Terminal located in the folder /Applications/Utilities</li>
<li> run the 2 following commands</li>
</ul>

<div class="code-response" markdown="1">

```shell
    launchctl unload ~/Library/LaunchAgents/com.daskeyboard.service.plist
    rm -f ~/Library/LaunchAgents/com.daskeyboard.service.plist
```

</div>


<ul>
<li> close the q-Desktop.app by right clicking on the dock menu Q icon and clicking quit</li>
<li>uninstall the q-Desktop.app located on the folder /Applications by drag and droping the icon into the trash</li>
<li>validate that the application is not running anymore by running this commands</li>
</ul>

<div class="code-response" markdown="1">


```shell
launchctl list | grep daskeyboard
ps -ef | grep q-Desktop
```
</div>
<ul>
<li> both commands should not display anything</li>
</ul>

  
<h5 class="card-title">Important instructions before firmware upgrade</h5>
<small>
<ul>
<li><b>Windows OS</b></li>
<ol class="card-text text-left">
<li>Download the firmware file. If the 5Q firmware is up to date, the installer will not perform the upgrade. The current 5Q firmware version is displayed on the home page of the Q Desktop software. It is also displayed when running the firmware upgrade application.</li>
<li><span style="color:red;">IMPORTANT:</span> Quit the Das Keyboard Q Service. Look for Services in Windows menu, find the Das Keyboard Q Service, right click on it and select "stop".</li>
<li>Double click the firmware file to “Run” it. Windows 10 Defender may display a message regarding an “unrecognized app” that has been prevented from starting. You will need to run it in order to upgrade the firmware on the 5Q. To enable the firmware upgrade to proceed, please click on <code>More Info</code> and follow the prompts to run the upgrader and update the firmware.</li>
<li>Don't forget to start the Service again when the firmware upgrade is finished.</li>
</ol>
<li><b>Mac and Linux OS</b></li>
<ol>
<li>
At this point, the firmware upgrade has to be performed on a Windows computer even for Mac and Linux. Note that the firmware upgrade only fixes some issues related to the hardware. The 5Q still does NOT communicate with the Q Desktop software since the communication is handle by a service component that is not available yet for Mac and Linux.
</li>
<li>
To map the 5Q Windows key to Mac configuration: <a href="https://daskeyboard.mojohelpdesk.com/help/article/199507">https://daskeyboard.mojohelpdesk.com/help/article/199507</a>
</li>
<li>
Mac & Linux users can use preconfigured color profiles that are embedded into the firmware. Press `FN` + `1`-`6` on the NUMPAD to cycle through them. More info is located here: <a href="https://daskeyboard.mojohelpdesk.com/help/article/199506">knowledge base.</a> 
</li>
</ol>
</ul>
</small>
<small><div class="alert alert-danger mt-3" role="alert">Please DO NOT unplug or use the keyboard during the upgrade process or you will brick your device.</div></small>
</div>
</div>



<p>We need your help to tests Mac and Linux software: become a 
<a href="https://docs.google.com/forms/d/e/1FAIpQLSdpQgxCFNOxWbiUu8PImeNb_je11C9-GguJRFGwK_Uf0YFmBw/viewform">beta tester</a>.</p>

### Software downloads

#### Downloads for Windows:
- [https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-x64-Setup-2.0.2.exe](https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-x64-Setup-2.0.2.exe)
- [https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-ia32-Setup-2.0.2.exe](https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2/Das-Keyboard-Q-ia32-Setup-2.0.2.exe)

#### Downloads for Linux:
- [https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0_amd64.deb](https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0_amd64.deb)
- [https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0.x86_64.rpm](https://s3-us-west-2.amazonaws.com/q-software-releases/das-keyboard-q_2.0.0.x86_64.rpm)

#### Download for macOs:
  - [https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2-beta.2/DasKeyboardQ.pkg](https://s3-us-west-2.amazonaws.com/q-desktop/2.0.2-beta.2/DasKeyboardQ.pkg)

### Firmware downloads

#### 5Q
- [https://s3-us-west-2.amazonaws.com/q-desktop/5Q+Flash+Upgrade.7.4.9.exe](https://s3-us-west-2.amazonaws.com/q-desktop/5Q+Flash+Upgrade.7.4.9.exe)

#### X50Q
- [https://s3-us-west-2.amazonaws.com/q-desktop/DasKeyboard+X50+-+Firmware+Updater+-+57.0.0.exe](https://s3-us-west-2.amazonaws.com/q-desktop/DasKeyboard+X50+-+Firmware+Updater+-+57.0.0.exe)



## Next step

[Next step: Watch welcome video]({{site.baseurl}}/get-started/welcome-video/)
