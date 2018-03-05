# Sending signals with php scripts

This is a little demo on how to send signal to the public api or to the cloud with a php script

## Prerequisistes

* You need to install php terminal command
* You need to install cURL

```shell
    sudo apt-get install php-curl
```

## Running the script

run this command to run the first script

```shell
    php create-one-signal.js
```

run this command to run the second script

```shell
    php create-one-signal-to-cloud.js
```

## Explanations

### create-one-signal.php

No difficulty here, first we create the signal, then we send it using curl.

### create-one-signal-to-cloud.php

No difficulty here, first we get the Oauth token, and then we send the signal using curl