```sh
#!/bin/sh

#-----------------------------------------------
# This script colorize a line of a 5Q Das Keyboard
# by sending a JSON signal to the its public API
# located at http://localhost:27301 using the coordinates
# x and y as zone ID.
#-----------------------------------------------
set -e # quit on first error.

# Let the user choose the line to colorize through the terminal
echo Which line do you want to colorize?
read y
echo y: $y

PID="DK5QPID" # product ID
PORT=27301 # Public api port

URL="http://localhost:$PORT/api/1.0/signals"
#-------------------------
# Send signal the 5Q keyboard
#-------------------------
#

# Number of columns on the keyboard
x=24

for i in $(seq 0 $x);
do
    curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
        "pid": "'$PID'",
        "zoneId": "'"$i,$y"'",
        "color": "#F00",
        "effect": "SET_COLOR",
        "name": "'"Color Line $y"'",
        "message": "'"Message: Color Line $y"'",
        "shouldNotify": false
    }' $URL

result=$?
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