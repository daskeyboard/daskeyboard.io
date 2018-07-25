```python
import json
# sudo pip install request
import requests

# Construct the signal to send
signal = {
    'zoneId': 'KEY_Q',
    'color': '#FF0000',
    'effect': 'SET_COLOR',
    'pid': 'DK5QPID',
    'clientName': 'Local Node script',
    'message': 'Q App version 3 is available. Download it at https://www.daskeyboard.io/get-started/download/',
    'name': 'New Q app version available'
}


signal_json = json.dumps(signal)

# sending the signal

res_signal = requests.post(backendUrl + '/api/1.0/signals', data=signal_json, headers=headers)

# checking the response
if res_signal.ok:
    print "OK"
    print res_signal.text
else:
    print "Error while sending the signal: " + res_signal.text
```