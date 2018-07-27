---
layout: page
title: Understand zoneId
permalink: /q-zone-id-explanation/
---

### Zone as a key code
A key code is an easy to read representation of a zone. It is used to create a signal that will target
a zone with `language` meaning.
Examples:

* KEY_W for the Weather
* KEY_B for a new email from the Boss

The physical zone of the signal will change depending on the layout ( KEY_Y is not at the same place
in a german and a US Layout)

![104Q.png](/images/104Q.png)


### Zone as a 2D coordinate XY
The zone as coordinate is a vector of 2 integer numbers used to indicate the position of a point
in a grid.
It is useful to make animations that are using mathematical equations.

Examples:
* 2,4
* 10,5

It is recommanded to use the coordinate system XY because it is compatible with every layouts.

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


