```python
import json
# sudo pip install request
import requests



pid = 'DK5QPID'
zone_id = '2,4'
res_shadows = requests.get(backendUrl + '/api/1.0/signals' + '/pid/'+ pid + '/zoneId/' + zone_id, headers=headers)

# checking the response
if res_shadows.ok:
    print "OK"
    print res_shadows.text
else:
    print "Error: " + res_shadows.text
```