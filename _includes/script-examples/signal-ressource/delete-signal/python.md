```python
# sudo pip install request if requests not found
import requests


signalId = 392

res_signal = requests.delete(backendUrl + '/api/1.0/signals/' + str(signalId),headers=headers)

# checking the response
if res_signal.ok:
    print "OK"
    print res_signal.text
else:
    print "Error: " + res_signal.text
```