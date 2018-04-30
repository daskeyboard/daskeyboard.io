```sh
#!/bin/sh

#-----------------------------------------------
# This script colorize a key of a 5Q Das Keyboard
# by sending a JSON signal to the its public API
# located at http://localhost:27301 using the coordinates
# x and y according to the number of rows and columns
# of the current keyboard
#-----------------------------------------------
set -e # quit on first error.

PID="DK5QPID" # product ID
PORT=27301

URL="http://localhost:$PORT/api/1.0/signals"
#-------------------------
# Send signal the 5Q keyboard
#-------------------------
#
y=5
x=24

for j in `seq 0 $y`
do
    for i in `seq 0 $x`
    do
        curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
            "pid": "'$PID'",
            "zoneId": "'"$i,$j"'",
            "color": "#00F",
            "effect": "SET_COLOR",
            "name": "'"Color Line $y"'",
            "message": "Message sent by script '$0'",
            "shouldNotify": false 
        }' $URL
    result=$?
    done
done

echo "DONE"

if [ "$result" -eq "0" ]; then
    echo OK
    exit 0
else
    echo ERROR
    exit 1
fi

```