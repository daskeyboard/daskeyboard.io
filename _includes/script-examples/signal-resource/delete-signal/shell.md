```shell
SIGNAL_ID="392"
URL="$BACKEND_URL/api/1.0/signals/$SIGNAL_ID"

curl "${HEADERS[@]}" -X DELETE $URL
```