---
layout: page
title: "Get Started: Firmware Download"
permalink: /get-started/firmware/
---
#### What's new? See <a href="{{site.baseurl}}/updates/changelog-firmware/">changelog</a>.

### Important instructions before firmware upgrade

- **Windows OS**

  - Download the firmware file. If the 5Q firmware is up to date, the installer will not perform
    the upgrade. The current 5Q firmware version is displayed on the home page of the Q Desktop
    software. It is also displayed when running the firmware upgrade application
  - <span style="color:red;">IMPORTANT:</span> Quit the Das Keyboard Q Software. Quit it by clicking on the `cog` icon on the top right corner of the application, and select `quit` on the dropdown menu
  - Double click the firmware file to “Run” it. Windows 10 Defender may display a message regarding    an “unrecognized app” that has been prevented from starting. You will need to run it in order to   upgrade the firmware on the 5Q. To enable the firmware upgrade to proceed, please click on `More Info` and follow the prompts to run the upgrader and update the firmware
  - Don't forget to start the Das Keyboard Q software again

- **Mac and Linux OS**
  - At this point, the firmware upgrade has to be performed on a Windows computer even for Mac and Linux. Note that the firmware upgrade only fixes some issues related to the hardware. The 5Q still does NOT communicate with the Q Desktop software since the communication is handle by a service component that is not available yet for Mac and Linux
  - To map the 5Q Windows key to Mac configuration: https://daskeyboard.mojohelpdesk.com/help/article/199507
  - Mac & Linux users can use preconfigured color profiles that are embedded into the firmware. Press `FN` + `1`-`6` on the NUMPAD to cycle through them. More info is located here: knowledge base
  - macOS is not supported by X50Q for now

<div class="alert alert-danger mt-3" role="alert">
Please DO NOT unplug or use the keyboard during the upgrade process or you will brick your device.
</div>


<div class="homepage__button_row">
  <div style="text-align:center;">
    <a id="firmware-download-button"
      class="get-started-button"></a>
    <small>
      <small style="margin-right: 40px;"
      id="firmware-download-version">Version 7.4.18</small>
    </small>
  </div>
</div>


### Firmware downloads

#### 5Q
- [https://s3-us-west-2.amazonaws.com/q-software-releases/Firmware-releases/5Q/5Q+Flash+Upgrade.7.4.18.exe](https://s3-us-west-2.amazonaws.com/q-software-releases/Firmware-releases/5Q/5Q+Flash+Upgrade.7.4.18.exe)

#### X50Q
- [https://s3-us-west-2.amazonaws.com/q-desktop/DasKeyboard+X50+-+Firmware+Updater+-+57.0.0.exe](https://s3-us-west-2.amazonaws.com/q-desktop/DasKeyboard+X50+-+Firmware+Updater+-+57.0.0.exe)
