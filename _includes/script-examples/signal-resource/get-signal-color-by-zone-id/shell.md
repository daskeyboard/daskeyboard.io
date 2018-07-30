```shell
PID="DK5QPID"
ZONE_ID="2,4"
URL="$BACKEND_URL/api/1.0/signals/pid/$PID/zoneId/$ZONE_ID/color"

curl "${HEADERS[@]}" -X GET $URL
```