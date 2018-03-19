---
layout: page
title: Das Keyboard Q OAuth authentication API
permalink: /q-authentication/
---

Q service Oauth2 uses tokens `access token` and `refresh token` to secure resources.

Since Q cloud service needs authenticated JSON requests, an Oauth token is need
for each with each request.

To authenticate against Q cloud service, you need to signup for Q cloud
service: <https://q.daskeyboard.com/>.

NOTE: If you are wanting to send a JSON signal ONLY from your computer to your
keyboard (i.e. not via Q cloud) you don't need authentication at all and can
skip this chapter.

## Key Oauth concept

A JSON request to an OAuth service like Q cloud needs to include an OAuth
`access token`. An `access token` is like a password but has a limited lifetime
(typically a few minutes to a few days). Once expired it needs to be "refreshed",
i.e. replaced by a new one. To get a new `access token`, one needs to supply a
`refresh token` to Q cloud service. The following sections explain how to get
these different tokens using different methods called `grants`.

### Grant Type: client_credentials (recommended)

Using Oauth client credentials is a great way to get an access token without
storing your password in a text file or sharing it... It uses a `client_id`, and
`client_secret`, which is available in your Q cloud account page at
<https://q.daskeyboard.com/account>

To get tokens, store your `client_id`, and
`client_secret`:


Then run the following command:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "CLIENT_ID", "client_secret": "CLIENT_SECRET", "grant_type": "client_credentials"}' https://q.daskeyboard.com/oauth/1.4/token
```

Result format:

```sh
{"access_token":"ACCESS_TOKEN","refresh_token":"REFRESH_TOKEN","user_id":7654,"expires_in":86400}
```

### Grant Type: password (NOT recommended)

The password grant is a method allowing a user to get an `access token` and a `refresh token` using his/her Q cloud email and password. Using this grant is not recommended since it shares user's password.

Query:

```sh
password="YOUR_PASSWORD" # Q cloud password
email="YOUR_EMAIL"       # Q cloud email

curl -X POST -H "Content-Type: application/json" -d '{"email": "'$email'", "password": "'$password'", "grant_type": "password"}' https://q.daskeyboard.com/oauth/1.4/token
```

Result format:

```sh
{"access_token":"ACCESS_TOKEN","refresh_token":"REFRESH_TOKEN","user_id":7654,"expires_in":86400}
```

### Grant Type: authorization_code

To authenticate an app to your Q account (e.g. Zapier, Twitter), you need to make a GET request at
the following address:

```txt
https://q.daskeyboard.com/oauth/auth?client_id=CLIENT_ID&redirect_uri=XXX
```

Two parameters are required:

- `client_id`: your client id, obtained at <https://q.daskeyboard.com/account>
- `redirect_uri`: the URI on which the browser will be redirected. A `code value`
  will be added to the redirect URL (as GET parameter `code`).

Then make a POST request to

```txt
https://q.daskeyboard.com/oauth/1.4/token?grant_type=authorization_code&client_id=CLIENT_ID&code=YYY
```

to get an `access token` and `refresh token`.

Query:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "CLIENT_ID", "code": "YOUR_CODE", "grant_type": "authorization_code"}' https://q.daskeyboard.com/oauth/1.4/token
```

Result format:

```sh
{"access_token":"ACCESS_TOKEN","refresh_token":"REFRESH_TOKEN","user_id":7654,"expires_in":86400}
```

### Refreshing the Oauth token

An access token expires after a certain time indicated by the field `expires_in`.
Once expired, a call to the following endpoint with `grant type` `refresh_token` will
provide a new `access token`:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "CLIENT_ID", "grant_type": "refresh_token", "refreshToken": "REFRESH_TOKEN"}' https://q.daskeyboard.com/oauth/1.4/token
```

Result format:

```sh
{"access_token":"ACCESS_TOKEN","refresh_token":"REFRESH_TOKEN","user_id":CLIENT_ID,"expires_in":86400}
```