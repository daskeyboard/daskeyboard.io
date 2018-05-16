```go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "os"
)

// A Signal represents a message to be sent to a Q device.
type Signal struct {
    ID           int64  `json:"id"`           // Not used when creating a signal
    Pid          string `json:"pid"`          // DK5QPID
    ZoneID       string `json:"zoneId"`       // KEY_A, KEY_B, etc...
    Name         string `json:"name"`         // message title
    Message      string `json:"message"`      // message body
    Effect       string `json:"effect"`       // e.g. SET_COLOR, BLINK, etc...
    Color        string `json:"color"`        // color in hex format. E.g.: "#FF0044"
    ShouldNotify bool   `json:"shouldNotify"` // whether to show a OS notification
}

func main() {
    // Q desktop public API port #.
    port := "27301"

    // creating the signal
    oneSignal := Signal{0, "DK5QPID", "KEY_A", "Hello oneSignal", "Signal sent from a go program on a key...", "SET_COLOR", "#F00", true}

    // Encode to JSON
    signalJSON := new(bytes.Buffer)
    json.NewEncoder(signalJSON).Encode(&oneSignal)

    // Construct API URL
    url := "http://localhost:" + port + "/api/1.0/signals"

    // sending the signal to colorize the key A in red
    resp, err := http.Post(url, "application/json; charset=utf-8", signalJSON)

    if err != nil {
        log.Fatal(err)
    }

    // checking the response
    if resp.StatusCode == 200 {
        fmt.Println("OK")
        os.Exit(0)
    } else {
        fmt.Println("Error: ", resp.StatusCode)
        os.Exit(1)
    }
}
```