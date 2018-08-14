---
layout: page
title: Understanding zoneId
permalink: /q-zone-id-explanation/
---

### A zone as key code

A key code (e.g. `KEY_W`) is a human readable representation of a zone. It is used to identify a location. It is language dependant (e.g. German A key is not at the same place as the English one).

Example of zones:

* KEY_W 
* KEY_B 


![104Q.png](/images/104Q.png)

TODO add link to all zones.

### Zone as a 2D coordinate XY (recommend)

A zone can be expressed as an X,Y point coordinate.

Examples:
* 2,4
* 10,5

This is the recommanded way to address an LED because it is consistant across different layouts (EN, FR, etc...).

In the following picture the Q Key will be addressed with the coordinates 2,2

<br>
![104Q.png](/images/104Q.png)

### Zone as a linear coordinate

A linear coordinate is a 1D number

In the following picture the Q Key will be addressed with the coordinates 74

<br>
![linearQ.png](/images/linearQ.png)




NB: 
"|-F" = left pipe and "|-R" = right pipe


