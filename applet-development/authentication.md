---
layout: page
title: "Applet log file"
permalink: /applet-development/authentication
---

As of this writing, Q applets support API key authentication.


<div class="row">
    <div class="col-md-12">
        <img src="{{ './images/apikey.png' }}"
                    alt="Q API key form">
    </div>
</div>

To request a user API key, add the following snippet to `package.json`:

```json
 "authorization": {
      "type": "apiKey",
      "hint": "Login or signup for free to get your API key",
      "supportUrl": "https://montastic.com/me"
    }
```

## Accessing API key from index.js

The API key is accessible via `this.authorization.apiKey`. Example:

```javascript
this.serviceHeaders = {
      "Content-Type": "application/json",
      "X-API-KEY": this.authorization.apiKey,
    }
```
