```sh
#!/bin/sh

#-----------------------------------------------
# This script colorize a key of a 5Q Das Keyboard
# by sending a JSON signal to the its public API
# located at http://localhost:27301 using the coordinates
# x and y as zone ID.
#-----------------------------------------------
set -e # quit on first error.

# Let the user choose the key to colorize through the terminal
# using the coordinates x and y of the key
echo Coordinates:
echo x?
read x
echo y?
read y
echo x: $x , y: $y

PID="DK5QPID" # product ID
PORT=27301
ZONEID="$x,$y"

URL="http://localhost:$PORT/api/1.0/signals"
#-------------------------
# Send signal the 5Q keyboard
#-------------------------
#

echo "Sending signal to zoneId: $ZONEID at $URL"
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "'$ZONEID'",
    "color": "#00F",
    "effect": "SET_COLOR",
    "name": "Hello Coordinates: '$ZONEID'",
    "message": "Message sent by script",
    "shouldNotify": false 
}' $URL

result=$?

if [ "$result" -eq "0" ]; then
    echo OK
    exit 0
else
    echo ERROR
    exit 1
fi

```