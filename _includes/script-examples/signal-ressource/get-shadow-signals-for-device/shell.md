```shell
PID="DK5QPID"
URL="$BACKEND_URL/api/1.0/signals/pid/$PID/shadows"

curl "${HEADERS[@]}" -X GET $URL
```