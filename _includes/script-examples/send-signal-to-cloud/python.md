```python
import json
import requests

URL_TOKEN = "https://q.daskeyboard.com/oauth/1.4/token"
URL_SIGNAL = "https://q.daskeyboard.com/api/1.0/signals"

HEADERS_TOKEN = {
    "content-type": "application/json"
}

# getting the user's credentials to get the Oauth token
print "Please enter your Q cloud credentials"
EMAIL = raw_input("email: ")
PASSWORD = raw_input("password: ")
# creating the user
USER = {
    "email" : EMAIL,
    "password": PASSWORD,
    "grant_type": "password"
}

USER_JSON = json.dumps(USER)

# getting the token
RES_TOKEN = requests.post(URL_TOKEN, data=USER_JSON, headers=HEADERS_TOKEN)


ACCESS_TOKEN = json.loads(RES_TOKEN.text)['access_token']


# creating the signal
SIGNAL = {
    "pid": "DK5QPID",
    "zoneId": "KEY_A",
    "color": "#F00",
    "effect": "SET_COLOR",
    "name": "Hello oneSignal",
    "message": "signal sent from a python script to a key",
    "shouldNotify": False
}


HEADERS_SIGNAL = {
    "content-type": "application/json",
    "Authorization": "Bearer " + str(ACCESS_TOKEN)
}

SIGNAL_JSON = json.dumps(SIGNAL)

# sending the signal
RES_SIGNAL = requests.post(URL_SIGNAL, data=SIGNAL_JSON, headers=HEADERS_SIGNAL)

# checking the response
if RES_SIGNAL.ok:
    print "OK"
else:
    print "Error while sending the signal: " + RES_SIGNAL.text
```