```python
import json
from os.path import expanduser
import requests

HOME = expanduser("~")

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


HEADERS = {
    "content-type": "application/json"
}

# encoding the signal to json
SIGNAL_JSON = json.dumps(SIGNAL)
# Q desktop public API port #
PORT_NUMBER = "27301"
# Q desktop public API url
URL = 'http://localhost:'+PORT_NUMBER+'/api/1.0/signals'
# sending the signal to colorize the key A in red
R = requests.post(URL, data=SIGNAL_JSON, headers=HEADERS)

# checking the response
if R.ok:
    print R.text
else:
    print "Error while sending the signal: " + R.text
```