# Q Authentication: Getting an OAuth token

Since Das Keyboard Q cloud service requires authenticated JSON requests, an Oauth token is
needed for each HTTP request.

To authenticate against Q cloud service, you need to create an account at Q cloud
service: https://q.daskeyboard.com/

NOTE: If you are wanting to send a JSON signal ONLY from your computer to your
keyboard (i.e. not via Q cloud) you don't need authentication at all and can ignore this chapter.


## Key Oauth concept

JSON requests to an OAuth service like Q cloud serivce need to include an OAuth
`access token`. An `access token` is like a password but has a limited lifetime
(typically a few minutes to a few days). Once expired it needs to be "refreshed",
i.e. replaced by a new one. To get a new `access token`, one needs to supply a
`refresh token` to Q cloud service. The following sections explain how to get
these different tokens using different methods called `grants`.

## Getting an tokens

To get access and refresh tokens, a user can choose one of the grant below. 

### Grant Type: password

The password grant is a method that allows a user to get an `access token` and a `refresh token` using his/her Q cloud email and password. 

Query: 

```sh
password="YOUR_PASSWORD" # Q cloud password
email="YOUR_EMAIL"       # Q cloud email

curl -X POST -H "Content-Type: application/json" -d '{"email": "'$email'", "password": "'$password'", "grant_type": "password"}' https://q.daskeyboard.com/oauth/1.4/token
```

Response:

```
{"access_token":"0e155790a123543467860509b7e5","refresh_token":"5f1b05834235bc020ba33aa8","user_id":7654,"expires_in":86400}
```


### Grant Type: client_credentials

Using Oauth client credentials is a great way to get an access token without
storing your password in a text file or sharing it... You will need a
`client_id`, `client_secret`. This is available in your Q cloud account page at
https://q.daskeyboard.com/account


Query:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "'$clientId'", "client_secret": "'$clientSecret'", "grant_type": "client_credentials"}' https://q.daskeyboard.com/oauth/1.4/token
```

Response:

```
{"access_token":"0e155790a123543467860509b7e5","refresh_token":"5f1b05834235bc020ba33aa8","user_id":7654,"expires_in":86400}
```


### Grant Type: authorization_code

To authenticate a user to your application, you need to make a GET request at
the following address:
https://q.daskeyboard.com/oauth/auth?client_id=XXX&redirect_uri=XXX. Two GET
parameters are required:
- `client_id`: your client id, obtained at https://q.daskeyboard.com/account
- `redirect_uri`: the URI on which the browser will be redirected. To this
  address will be added a code (as GET parameter "code").

Then you can make a POST request to
https://q.daskeyboard.com/oauth/1.4/token?grant_type=authorization_code&client_id=XXX&code=XXX
to get your `access token` and your `refresh token`.

Query:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "'$clientId'", "code": "YOUR_CODE", "grant_type": "authorization_code"}' https://q.daskeyboard.com/oauth/1.4/token
```

Response:

```
{"access_token":"0e155790a123543467860509b7e5","refresh_token":"5f1b05834235bc020ba33aa8","user_id":7654,"expires_in":86400}
```

