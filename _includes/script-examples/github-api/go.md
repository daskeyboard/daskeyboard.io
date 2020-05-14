```go
// The github-api and the oauth api for golang was used for this program.
// The first part is to check if there are notifications from github,
// the second part is to send the signal if there are any.

package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"golang.org/x/net/context"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

type signal struct {
	Pid     string `json:"pid"`     // DK5QPID
	ZoneID  string `json:"zoneId"`  // KEY_A, KEY_B, etc...
	Name    string `json:"name"`    // message title
	Message string `json:"message"` // message body
	Effect  string `json:"effect"`  // e.g. SET_COLOR, BLINK, etc...
	Color   string `json:"color"`   // color in hex format. E.g.: "#FF0044"
}

func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

/**
 * this function is used to get Authentification using a oauth token
 */
func getAuth(ctx context.Context) *github.Client {
	// put your own OAuth Token
	ts := oauth2.StaticTokenSource(&oauth2.Token{AccessToken: "PUT_YOUR_OWN_OAUTH_TOKEN"})

	tc := oauth2.NewClient(ctx, ts)
	client := github.NewClient(tc)

	return client
}

// haveNotification returns true if there are unread notifications.
func haveNotification(ctx context.Context, client *github.Client) bool {
	notifs, _, err := client.Activity.ListNotifications(ctx, nil)
	checkErr(err)

	return len(notifs) != 0
}

func sendSignal() {
	port := "27301" // Q desktop public API port #.

	// Signal to be sent:  A key set to blue color
	oneSignal := signal{
		Pid:     "DK5QPID",
		ZoneID:  "KEY_A",
		Name:    "Hello oneSignal",
		Message: "Notification on your github",
		Effect:  "SET_COLOR",
		Color:   "#00F",
	}

	// Encode to JSON
	signalJSON := new(bytes.Buffer)
	json.NewEncoder(signalJSON).Encode(&oneSignal)

	// Construct API URL
	url := "http://localhost:" + port + "/api/1.0/signals"

	// Make HTTP POST call.
	_, err := http.Post(url, "application/json; charset=utf-8", signalJSON)

	checkErr(err)

	fmt.Println("Sending signal to the keyboard")
}

func main() {
	ctx := context.Background()

	// first we get authentification
	client := getAuth(ctx)
	// this is to make sure that the signal is sent only when there are new notifications
	isSignalSent := false
	for true {
		// then we check if there is a notification
		// if there are notifications and the signal was not send, we send the signal
		haveNotif := haveNotification(ctx, client)
		if haveNotif && !isSignalSent {
			sendSignal()
			isSignalSent = true
			// if there is no notifications, we reset the flag that tells if the signal was sent or not
			// to make sure that a signal will be sent when there are new notifications
		} else if !haveNotif && isSignalSent {
			isSignalSent = false
		}
		// we wait 2 seconds before doing this process again
		time.Sleep(time.Duration(2) * time.Second)
	}

}
```