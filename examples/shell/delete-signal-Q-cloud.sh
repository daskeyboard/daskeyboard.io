#!/bin/sh

#-----------------------------------------------
# This script colorize a key of a 5Q Das Keyboard
# by Deleting a JSON signal to the its public API
# located at http://localhost:27301
#-----------------------------------------------
set -e # quit on first error.

URL="https://q.daskeyboard.com/api/1.0/signals/$ID"

echo "Deleting signal: $ID"
curl -H 'Authorization: Bearer $ACCESS_TOKEN' -X DELETE $URL

result=$?

if [ "$result" -eq "0" ]; then
    echo OK
    exit 0
else
    echo ERROR
    exit 1
fi
