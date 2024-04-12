---
layout: page
title: "Quick Start: Das Keyboard Q REST API"
permalink: /q-api-quick-start/
---

<!-- {% include api_transition_header.html %} -->

Das Keyboard Q devices RGB LEDs are very simple to program.  

<div class="alert alert-success" role="alert">
Copy the `shell` code below and paste it into a bash compatible terminal to start experimenting (Windows, Linux or macOS).
</div>


{% include /script-examples/signal-resource/create-signal/code.md %}

NOTE: Examples uses Linux-style `shell` command line. It is also available on Windows:

* `shell` command line is available when installing Linux Subsystem for Windows 10: <https://docs.microsoft.com/en-us/windows/wsl/install-win10>.

* or when using `git bash` which is available here: <https://gitforwindows.org/>.


## Key Q concepts: How it works

In order to control the RGB LEDs of a Q device, a user must send authenticated
HTTP JSON requests to a Q REST API.

Q cloud services <https://q2.daskeyboard.com/> provides a REST API that talks to
Q devices. Alternatively, one can also write a script that directly interacts
with a Q device via your workstation (i.e.: http://localhost:/#port...).

Therefore there are two ways to send a signal to a Q device:

* From the Q cloud:

```txt
Your script on any computer --> Q clould service --> Q desktop app on your computer --> Q enabled device
```

* Directly from your machine:

```txt
Your script on your computer --> Q desktop app on your computer --> Q enabled device
```

The example in this document uses the Q cloud service.

## Getting a Q cloud API key

Since Q cloud service requires authenticated requests, you need to get an API key.

To get it, first signup for an account at <https://q2.daskeyboard.com> then find
your `API key` here: <https://q2.daskeyboard.com/signup/edit>



## Next steps

As seen in this simple example, once authenticated, it is very easy to send a
signal to a Q device. Ready to program your dashboard keyboard?
Head over to the full API documentation: [Q cloud documentation]({{site.baseurl}}/q-api-doc/)
