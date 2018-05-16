```go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "bufio"
    "os"
    "net/http"
    "strings"
)

//
// A Signal represents a message to be sent to a Q device.
//
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

// a user represent a message sent to the cloud to get an OAuth token
type User struct {
    Email		string `json:"email"`
    Password	string `json:"password"`
    Grant_type  string `json:"grant_type"`
}

// this function is used to check errors
func check(err error) {
    if err != nil {
        panic(err)
    }
}

// this function is used to read the user input from the command line
func readInput() string {
    // we create a reader
    reader := bufio.NewReader(os.Stdin);
    // we read the user's input
    answer, err := reader.ReadString('\n');
    // we check if any errors have occured while reading
    check(err);
    // we trim the "\n" from the answer to only keep the string input by the user
    answer = strings.Trim(answer, "\n");

    return answer;
}

func main() {

    // getting the credentials from the user to get the Oauth token
    fmt.Println("Please enter your credentials")
    fmt.Printf("email: ")
    email := readInput()
    fmt.Printf("password: ")
    password := readInput()

    // creating the user
    user := User{
        email,
        password,
        "password"}

    userJson := new(bytes.Buffer)
    json.NewEncoder(userJson).Encode(&user)

    // getting the OAuth token
    urlToken := "https://q.daskeyboard.com/oauth/1.4/token"
    client := &http.Client{}
    // making the http request
    reqToken, _ := http.NewRequest("POST", urlToken, userJson)
    reqToken.Header.Set("Content-Type", "application/json")
    // sending the request to get the token
    res, err := client.Do(reqToken)
    check(err)
    mapToken := map[string]string{}
    json.NewDecoder(res.Body).Decode(&mapToken)

    // getting the access_token
    access_token := mapToken["access_token"]
    // getting the refresh_token
    // refresh_token := mapToken["refresh_token"]


    // creating the signal
    oneSignal := Signal{0,
        "DK5QPID",
        "KEY_A",
        "Hello oneSignal to cloud",
        "Signal sent from a go script",
        "SET_COLOR",
        "#F00",
        true}
    // Encode to JSON
    signalJSON := new(bytes.Buffer)

    json.NewEncoder(signalJSON).Encode(&oneSignal)

    urlSignal := "https://q.daskeyboard.com/api/1.0/signals"
    // making the http request
    reqSignal, _ := http.NewRequest("POST", urlSignal, signalJSON)
    reqSignal.Header.Set("Content-Type", "application/json")
    reqSignal.Header.Set("Authorization", "Bearer "+access_token)
    // sending the request
    res, err = client.Do(reqSignal)
    check(err)
    // checking the response
    if res.StatusCode == 200 {
        fmt.Println("OK")
    } else {
        fmt.Println("Error while sending the signal, make sure you are logged in")
    }
}
```