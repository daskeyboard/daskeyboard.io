```python
import json
# sudo pip install request
import requests



pid = 'DK5QPID'
res_shadows = requests.get(backendUrl + '/api/1.0/signals' + '/pid/'+ pid + '/shadows', headers=headers)

# checking the response
if res_shadows.ok:
    print "OK"
    print res_shadows.text
else:
    print "Error while sending the signal: " + res_shadows.text
```