```sh
#!/bin/sh

#-----------------------------------------------
#
# This script colorize all LEDs of a 5Q keyboard
# by sending JSON signals to the Q desktop public API.
#
#-----------------------------------------------

set -e # quit on first error.

#---------------------
# Read port number.
#---------------------
API_FILE="$HOME/.quio/v2/q-public-api-port.txt"

if [ -f "$API_FILE" ]
then
    PORT=`cat $API_FILE`
    echo "Found Q api at port: $PORT"
else
    echo "$API_FILE not found. Make sure Q desktop software is running and that the public API is started."
    exit 1
fi



#-------------------------
# Colorize the 5Q keyboard
#-------------------------
PID="DK5QPID" # product ID

# Zone are LED groups. There are less than 150 zones one a 5Q.
# This should cover the whole device.
MAX_ZONE_ID=150

for i in `seq $MAX_ZONE_ID`
do
    echo "Sending signal to zoneId: $i"
    #
    # important NOTE: if field "name" and "message" are empty then the signal is
    # only displayed on the devices LEDs, not in the signal center
    #
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
        "name": "Set zone '$i'",
        "message": "Message sent by script '$0'",
        "pid": "'$PID'",
        "zoneId": "'"$i"'",
        "color": "#F00",
        "effect": "SET_COLOR",
        "isArchived": false,
        "isMuted": false,
        "isRead": false,
        "shouldNotify": false
    }' "http://localhost:$PORT/public-api/signals"

done

echo "\n\nDone.\n\n\n"
```