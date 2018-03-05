# Sending signals with node script

This is a little demo on how to send signal to the public api or to the cloud with a not script

## Prerequisistes

You need to have [node js](https://nodejs.org/en/download/) installed

run this command

```shell
    npm install readline-sync
```

in order to use the two scripts

## Running the script

run this command to run the first script

```shell
    node create-one-signal.js
```

run this command to run the second script

```shell
    node create-one-signal-to-cloud.js
```

## Explanations

### create-one-signal.js

The only difficulty here is to send the signal using the function requests.post(), very basic node script

### create-one-signal-to-cloud.js

Since node doesn't like synchronous request, the key is to imbricate callbacks (callback hell). First we get the Oauth access key, once we receive it, we send the signal.