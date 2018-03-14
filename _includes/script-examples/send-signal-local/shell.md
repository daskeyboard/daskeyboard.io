```sh
#!/bin/sh

#-----------------------------------------------
# This script colorize a key of a 5Q Das Keyboard
# by sending a JSON signal to the its public API
# located at http://localhost:27301
#-----------------------------------------------
set -e # quit on first error.

PID="DK5QPID" # product ID
ZONEID="KEY_A" # Key to colorize
PORT=27301

URL="http://localhost:$PORT/api/1.0/signals"
#-------------------------
# Send signal the 5Q keyboard
#-------------------------
#
# important NOTE: if field "name" and "message" are empty then the signal is
# only displayed on the devices LEDs, not in the signal center
#
echo "Sending signal to zoneId: $ZONEID at $URL"
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "'"$ZONEID"'",
    "color": "#F00",
    "effect": "BREATHE",
    "name": "Hello message for '$ZONEID'",
    "message": "Message sent by script '$0'",
    "shouldNotify": true 
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