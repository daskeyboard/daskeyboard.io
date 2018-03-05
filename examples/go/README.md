# Sending signals with node script

This is a little demo on how to send signal to the public api or to the cloud with a go program.
The two first program only send a signal. The third one send a signal when a github notification is received.

## Prerequisistes

* You need to have [golang](https://golang.org/dl/) installed
* for the third program you need to install the [github api](https://github.com/google/go-github) for go and the [oauth2 api](https://github.com/golang/oauth2)
    In order to do so, run the commands:

    ```shell
        go get github.com/google/go-github/github
        go get golang.org/x/oauth2
    ```

## Running the script

run this command to run the first script

```shell
    go run create-one-signal.go
```

run this command to run the second script

```shell
    go run create-one-signal-to-cloud.go
```

run this command to run the third script

```shell
    go run github-api.go
```

## Explanations

### create-one-signal.go

No difficulty here, make sure to encode the signal in json so you can send it with http.Post.

### create-one-signal-to-cloud.go

No difficulty here, quite a long program, but it is because of the custom functions to check errors and read input from the user. First we get the Oauth token with http.Post(), then we send the signal with http.Post().

### github-api.go

The github-api and the oauth api for golang was used for this program. No difficulty here, the first part is to check if there are notifications from github, the second part is to send the signal if there are.
