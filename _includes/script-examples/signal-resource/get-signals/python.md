```python
import json
# sudo pip install request
import requests

# Page to query
page_number = 0

# Number of elements per page
number_of_signals_per_page = 2

# Sort order
sort_order = 'ASC' # Or DESC

params = '?page=' + str(page_number) + '&size=' + str(number_of_signals_per_page) + '&sort=createdAt,' + sort_order
res_shadows = requests.get(backendUrl + '/api/1.0/signals' + params, headers=headers)

# checking the response
if res_shadows.ok:
    print "OK"
    print res_shadows.text
else:
    print "Error: " + res_shadows.text
```