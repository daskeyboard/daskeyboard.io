---
layout: page
title: "Quick Start: Das Keyboard Q REST API"
permalink: /q-api-quick-start/
---
Das Keyboard 5Q RGB mechanical keyboard LEDs can be controlled over
the Internet or over a local area network.

This quick start document covers the following:

1. How it works
1. Getting authentication tokens
1. Sending a signal to a Q device

NOTE: this example uses Linux `shell` command line.

* `shell` command line is available on Windows when using Windows Subsystem for Linux on Windows 10: <https://docs.microsoft.com/en-us/windows/wsl/install-win10>.

* use `git bash` which is available here: <https://gitforwindows.org/>.

## How it works

In order to control the RGB LEDs of a Q device, a user must send authenticated
HTTP JSON requests to a Q REST API.

Q cloud services <https://q.daskeyboard.com/> provides a REST API that talks to
Q devices. Alternatively, one can also write a script that directly interacts
with a Q device via your workstation (i.e.: http://localhost:/#port...).

Therefore there are two ways to send a signal to a Q device:

* From the Q cloud:

```txt
Your script on your computer --> Q clould service --> Q desktop app on your computer --> Q enabled device
```

* Directly from your machine:

```txt
Your script on your computer --> Q desktop app on your computer --> Q enabled device
```

The example in this document uses the Q cloud service.

## Getting authentication tokens

Since Q cloud service requires authenticated requests, you need to get an OAuth
`access token` and `refresh token`.

To get them, first signup for an account at <https://q.daskeyboard.com> then find
your `client id` and `secret` here: <https://q.daskeyboard.com/account>

Run this command to get your tokens:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "CLIENT_ID", "client_secret": "CLIENT_SECRET", "grant_type": "client_credentials"}' https://q.daskeyboard.com/oauth/1.4/token
```

Result format:

```sh
{"access_token":"ACCESS_TOKEN","refresh_token":"REFRESH_TOKEN","user_id":CLIENT_ID,"expires_in":86400}
```

## Sending a signal to a Q device

Now that you got your `access token` from the previous command, replace the
ACCESS TOKEN below with the `access_token` value. Then, when you run the command, the A key
should light up green.

```sh
curl -H "Content-Type: application/json" -H "Authorization: Bearer ACCESS_TOKEN" -X POST https://q.abc.com/api/1.0/signals -d '{"name": "Apple stock increase", "pid": "DK5QPID", "zoneId": "KEY_A", "color": "#0F0"}'
```

It takes only few milliseconds for Q cloud service to send a signal to a Q
device, so don't blink.

At this point you should see your Q device A-key colored in green. If you push
the Q button on your Q keyboard, you'll see the message "Apple stock increase".

## Next steps

As seen in this simple example, once authenticated, it is very easy to send a
signal to a Q device. Ready to program your dashboard keyboard?
Head over to the full API documentation: [Q cloud documentation]({{site.baseurl}}/q-api-doc/)