```shell
#!/bin/sh

#-----------------------------------------------
# This script colorize a key of a Das Keyboard 5Q
# when it finds the word $KEYWORD_SEARCHED in the
# website $URL_FOR_SEARCH by sending a JSON signal
# to the its public API located at http://localhost:27301
#
# Important NOTE: if field "name" and "message" are
# empty then the signal is only displayed on the
# devices LEDs, not in the signal center
#
#-----------------------------------------------

set -e # quit on first error.

PID="DK5QPID" # product ID
ZONEID="KEY_A" # Key to colorize
PORT=27301

KEYBOARD_API_URL="http://localhost:$PORT/api/1.0/signals"

URL_FOR_SEARCH="https://en.wikipedia.org/wiki/Das_Keyboard"
KEYWORD_SEARCHED="keyboards"

# Search in the website content if the $KEYWORD_SEARCHED
# is found. If yes, the $content variable will be greater
# than 0.

echo "Fetching '$URL_FOR_SEARCH'"
CONTENT_WEBSITE_WITH_KEYWORD=`echo $(curl $URL_FOR_SEARCH) | awk '{print match($0,"'$KEYWORD_SEARCHED'")}'`;

# If the keyword is found, we send a signal to display
# a green color.
if [ $CONTENT_WEBSITE_WITH_KEYWORD -gt 0 ];
then
    STATE="found"
    COLOR="#0F0"

# If the keyword is not found, we send a signal to display
# a red color.
else
    STATE="not found"
    COLOR="#F00"
fi

# We create a signal that colorize the $ZONEID in $COLOR 
# and display a message with the state of the search. 
echo "'$KEYWORD_SEARCHED' is $STATE. Sending signal to zoneId: $ZONEID at $KEYBOARD_API_URL"
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "'"$ZONEID"'",
    "color": "'"$COLOR"'",
    "effect": "COLOR",
    "name": "'$KEYWORD_SEARCHED' is '"$STATE"'",
    "message": "The word '$KEYWORD_SEARCHED' is '"$STATE"' in '$URL_FOR_SEARCH'",
    "shouldNotify": true
}' $KEYBOARD_API_URL

if [ "$?" -eq "0" ]; then
    echo "Done, the signal is sent at '$KEYBOARD_API_URL'"
else
    echo "ERROR, an error occured while sending signal to '$KEYBOARD_API_URL'"
fi
exit $result
```