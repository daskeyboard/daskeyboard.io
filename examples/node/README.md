# Sending signals with node scripts

This is a little demo on how to send signal to the public api or to the cloud with a node script.

## Prerequisistes

You need to have [Node.js](https://nodejs.org/en/download/) installed.

run this command:

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
// what is this line trying to say? 

### create-one-signal-to-cloud.js

Since Node.js an implementation of JavaScript (ECMAScript), it utilizes asynchronous execution patterns; thus, when writing Node.JS, it is important to use promises or implement 'callback' functions.

First we get the OAuth access key, once we receive it, we send the signal.