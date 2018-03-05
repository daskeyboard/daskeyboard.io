# Sending signals with node script

This is a little demo on how to send signal to the public api or to the cloud with a ruby script.

## Prerequisistes

* You need to install [ruby](https://www.ruby-lang.org/en/downloads/) terminal command

## Running the script

run this command to run the first script

```shell
     chmod 755 create-one-signal.rb
     ./create-one-signal.rb
```

run this command to run the second script

```shell
     chmod 755 create-one-signal-to-cloud.rb
     ./create-one-signal-to-cloud.rb
```

## Explanations

### create-one-signal.rb

No difficulty here, first we create the signal, and then we send it to the url.

### create-one-signal-to-cloud.rb

No difficulty here, first we get the Oauth token, and then we send the signal. Just make sure to enable ssl by writing

```ruby
https.use_ssl = true
```