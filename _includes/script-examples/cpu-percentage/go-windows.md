```go
package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "log"
  "net/http"
  "os"
  "os/signal"
  "runtime"
  "strconv"
  "strings"
  "time"

  ps "github.com/gorillalabs/go-powershell"
  "github.com/gorillalabs/go-powershell/backend"
  "github.com/shirou/gopsutil/cpu"
)

type mySignal struct {
  ID           int64  `json:"id"`           // Not used when creating a signal
  Pid          string `json:"pid"`          // DK5QPID
  ZoneID       string `json:"zoneId"`       // KEY_A, KEY_B, etc...
  Name         string `json:"name"`         // message title
  Message      string `json:"message"`      // message body
  Effect       string `json:"effect"`       // e.g. SET_COLOR, BLINK, etc...
  Color        string `json:"color"`        // color in hex format. E.g.: "#FF0044"
  ShouldNotify bool   `json:"shouldNotify"` // whether to show a OS notification
}

// this function checks for error
func check(err error) {
  if err != nil {
    log.Fatal(err)
  }
}

// checkForInterruption creates a concurrent function that launch a funtion when the program is interrupted by the user
func startLookingForInterruption(ospid int, nameOfProgram string, pid string, url string, alreadyLit []int) {
  // this is to get the stop of the program and display a message when the user stops the program
  c := make(chan os.Signal, 1)
  signal.Notify(c, os.Interrupt)
  go func() {
    <-c
    for i := 0; i <= 9; i++ {
      switchOffKey(i, pid, url, alreadyLit)
    }
    fmt.Printf("\nStopping process %d: %s\n", ospid, nameOfProgram)
    os.Exit(0)
  }()
}

  // this function gets the percentage of all the cpus and returns an array with the percentages in it
  func getCpusPercentage(numberOfCPU int, shell ps.Shell) []int {
  // first we get the cpus from a powershell command ans put them in a shell variable
  _, _, err := shell.Execute("$res = Get-WmiObject -Query \"select Name, PercentProcessorTime from Win32_PerfFormattedData_PerfOS_Processor\"")
  check(err)
  percentages := make([]int, numberOfCPU)
  // then for the all the cpus, we get the value, using a select-string command to find the value in the display of all the cpus
  for i := 0; i < numberOfCPU; i++ {
    result, _, err := shell.Execute("$(foreach($cpu in $res) {echo \"$($cpu.Name) : $($cpu.PercentProcessorTime)\"}) | Select-String -Pattern \"" + strconv.Itoa(i) + " :\"")
    check(err)
    if result != "" {
      // the string has not the same pattern whether it is the first result or the other results, that is why
      // there is a if
      // we trim the string that we receive, to make it usable
      if i == 0 {
        result = strings.TrimPrefix(result, "\r\n"+strconv.Itoa(i)+" : ")
      } else {
        result = strings.TrimPrefix(result, "\r\n\r\n\r\n"+strconv.Itoa(i)+" : ")
      }
      result = strings.TrimSuffix(result, "\r\n")
      // we convert the string to an int
      num, err := strconv.Atoi(result)
      check(err)
      // we put it in an array
      percentages[i] = num
    }
  }

  return percentages
  }

// this function returns the number of key that the cpu's percentage covers
func getRangeOfKey(percentage int) int {
  // this is to make sure that if the percentage is for example 56%, we maxKey is 6 and not 5
  if percentage%10 >= 5 && percentage <= 95 {
    percentage += 5
  }
  maxKey := percentage * 10 / 100
  if maxKey == 0 {
    maxKey = 1
  }
  return maxKey
}

// this function returns the max percentage in an array of percentages
func getMaxFromArray(array []int) int {
  max := array[0]
  for i := 0; i < len(array); i++ {
    if array[i] > max {
      max = array[i]
    }
  }

  return max
}

func getMaxPercentage(percentages []int, numberOfCPU int, shell ps.Shell, avgPercentage []float64) int {
  // then we get the max from this array
  maxPercentage := getMaxFromArray(percentages)
  // this is a little trick to make sure that the max percentage doesn't go below the avg cpu
  // since we don't get the max and the avg cpu at the same time, there might be some timing errors, causing
  // the avg cpu to sometimes (only sometimes) to be above the max cpu
  if maxPercentage < int(avgPercentage[0]) {
    maxPercentage = int(avgPercentage[0])
  }

  return maxPercentage
}

// this function is used to get the state of a key (0 : it is switched off, 1 : it is switched on for the max cpu, 2 : it is switched on for the avg cpu)
func getSwitchedState(key int, alreadyLit []int) int {
  if alreadyLit[key] == 1 {
    return 1
  } else if alreadyLit[key] == 0 {
    return 0
  }
  return 2
}

// this function sends a signal to the public api
func sendSignal(color string, key string, pid string, url string, effect string, name string, message string) error {
  oneSignal := mySignal{0,
    pid,
    key,
    name,
    message,
    effect,
    color,
    false}
  signalJSON := new(bytes.Buffer)
  json.NewEncoder(signalJSON).Encode(&oneSignal)
  _, err := http.Post(url, "application/json; charset=utf-8", signalJSON)
  return err
}

// this function sends a switch off signal to the public api
func switchOffKey(key int, pid string, url string, alreadyLit []int) []int {
  keyString := "KEY_" + strconv.Itoa(key)
  err := sendSignal("#000", keyString, pid, url, "NONE", "", "")
  check(err)

  alreadyLit[key] = 0

  return alreadyLit
}

// this function is used to switch on the keys between the key "1" and the "maxkey"
// since only the max cpu is represented by switching on all the keys until the maxkey,'
// we only need to send signal with the green color (the one used for the max cpu)
func sendSignalToInBetweenKey(key int, pid string, url string, alreadyLit []int) []int {
  keyString := "KEY_" + strconv.Itoa(key)
  err := sendSignal("#0fff77", keyString, pid, url, "SET_COLOR", "", "")
  check(err)
  alreadyLit[key] = 1

  return alreadyLit
}

// this function is used to send a signal to the end key
// one of the parameter is called "isSwitchingOnAvgCPU", this parameter is used to know if the function is called to switch on
// the end key for the avg cpu or the max cpu, if isSwitchingOnAvgCPU is true, then we are switching on the end key of the avg cpu,
// if it is false, we are switching on the end key of the max cpu
func sendSignalToEndKey(key int, isSwitchingOnAvgCPU bool, pid string, url string, alreadyLit []int) []int {
  keyString := "KEY_" + strconv.Itoa(key)
  // if we are switching on the end key for the avg cpu, we send a blue color
  if isSwitchingOnAvgCPU {
    err := sendSignal("#0fa7ff", keyString, pid, url, "SET_COLOR", "", "")
    check(err)
    // we put the fact that we switched on the end key to represent the avg cpu
    alreadyLit[key] = 2
  } else {
    // if we are switching on the end key for the max cpu, we send a green color
    err := sendSignal("#0fff77", keyString, pid, url, "SET_COLOR", "", "")
    check(err)
    // we put the fact that we switched on the end key to represenet the max cpu
    alreadyLit[key] = 1
  }

  return alreadyLit
}

// this function is used to colorize the keys according to the maxKey given in parameter
func colorizeKeys(maxKey int, isSwitchingOnAvgCPU bool, pid string, url string, maxKeyAvg int, alreadyLit []int) []int {
  // this is to make sure that the first key will be switched on even if the percentage is very low
  if maxKey == 0 {
    maxKey = 1
  }
  // first we switch on the keys used to represent the max cpu
  if !isSwitchingOnAvgCPU {
    for i := 1; i < maxKey; i++ {
      // this is to make sure that we don't replace the color of the avg cpu, the max cpu can't send a signal to replace the avg cpu
      if i != maxKeyAvg {
        state := getSwitchedState(i, alreadyLit)
        // only if the key is switched off or was switched on by the avg, we switch on the key
        if state == 0 || state == 2 {
          alreadyLit = sendSignalToInBetweenKey(i, pid, url, alreadyLit)
        }
      }
    }
  }
  // if the max key is 10, this means that the end key is 0 (since it is the key after the key "9")
  if maxKey == 10 {
    maxKey = 0
  }

	// we chech if we are switching on the avg cpu,
  if isSwitchingOnAvgCPU {
    // we make sure that the avg cpu representing the cpu only send signal to switched off keys or key switched on to represent the max cpu
    // we don't send a signal if the key that represents the avg cpu hasn't changed
    if state := getSwitchedState(maxKey, alreadyLit); state != 2 {
      alreadyLit = sendSignalToEndKey(maxKey, isSwitchingOnAvgCPU, pid, url, alreadyLit)
    }
  } else {
    // here we send a signal to the end key to represent the max cpu only if it doesn't overwrite the avg cpu key
    // and only if the key is switched off or switched on by the avg cpu (the previous key representing the avg cpu, since we can't
    // overwrite the current one)
    if maxKey != maxKeyAvg {
      state := getSwitchedState(maxKey, alreadyLit)
      if state != 1 {
        alreadyLit = sendSignalToEndKey(maxKey, isSwitchingOnAvgCPU, pid, url, alreadyLit)
      }
    }
  }

  return alreadyLit
}

// this function is used to switch off the keys that don't need to be switched on
func switchOffUnnecessaryKeys(maxKey int, pid string, url string, alreadyLit []int) []int {
  maxKey++
  // we loop through the keys from the maxKey of the max cpu to the "0" key
  // we use the maxKey of the max cpu because the avg cpu can't go beyond the max cpu, it can only equal it
  for i := maxKey; i <= 9; i++ {
    state := getSwitchedState(i, alreadyLit)
    // if the key is not switched off, we switch it off
    if state != 0 {
      alreadyLit = switchOffKey(i, pid, url, alreadyLit)
    }
  }
  // here we check if the max key is 0 or not, if it isn't, then we switch off the "0" key
  // because we don't want to switch off a key that doesn't need to be switched on
  if state := getSwitchedState(0, alreadyLit); maxKey != 11 && state != 0 {
    alreadyLit = switchOffKey(0, pid, url, alreadyLit)
  }

  return alreadyLit
}

// colorizeKeyboard colorizes the keyboard number row with the max cpu percentage and the avg cpu percentage
func colorizeKeyboard(maxPercentage int, avgPercentage int, alreadyLit []int, pid string, url string) []int {
  // first we get the range of key for the avg cpu
  maxKeyAvg := getRangeOfKey(avgPercentage)
  // then we get the range of key for the max cpu
  maxKeyMax := getRangeOfKey(maxPercentage)
  // we start by colorizing the keys for the max cpu
  alreadyLit = colorizeKeys(maxKeyMax, false, pid, url, maxKeyAvg, alreadyLit)
  // the we colorize the key for the avg cpu, since the avg cpu can't go beyond the max cpu
  alreadyLit = colorizeKeys(maxKeyAvg, true, pid, url, maxKeyAvg, alreadyLit)

  alreadyLit = switchOffUnnecessaryKeys(maxKeyMax, pid, url, alreadyLit)

  return alreadyLit
}

// this function is used to send a specific signal for the animation at the beginning
func sendSignalForAnimation(pid string, url string, key string) {
  sendSignal("#F00", key, pid, url, "COLOR_CYCLE", "cpu-meter", "Starting the program")
}

// this function is used to send a specific signal to switch off the keys at the end of the animation
func switchOffKeyForAnimation(pid string, url string, key string) {
  sendSignal("#000", key, pid, url, "NONE", "", "")
}

// this function is used to display a little animation at the launch of the program
// it writes "CPU" on the keyboard
func displayAnimation(pid string, url string) {
  // writing the C
  sendSignalForAnimation(pid, url, "72")
  sendSignalForAnimation(pid, url, "76")
  sendSignalForAnimation(pid, url, "75")
  sendSignalForAnimation(pid, url, "99")
  sendSignalForAnimation(pid, url, "123")
  sendSignalForAnimation(pid, url, "124")
  // writing the P
  sendSignalForAnimation(pid, url, "78")
  sendSignalForAnimation(pid, url, "79")
  sendSignalForAnimation(pid, url, "80")
  sendSignalForAnimation(pid, url, "103")
  sendSignalForAnimation(pid, url, "104")
  sendSignalForAnimation(pid, url, "105")
  sendSignalForAnimation(pid, url, "127")
  // writing the U
  sendSignalForAnimation(pid, url, "82")
  sendSignalForAnimation(pid, url, "85")
  sendSignalForAnimation(pid, url, "107")
  sendSignalForAnimation(pid, url, "109")
  sendSignalForAnimation(pid, url, "131")
  sendSignalForAnimation(pid, url, "132")
  sendSignalForAnimation(pid, url, "71")

  time.Sleep(3 * time.Second)

  switchOffKeyForAnimation(pid, url, "72")
  switchOffKeyForAnimation(pid, url, "76")
  switchOffKeyForAnimation(pid, url, "75")
  switchOffKeyForAnimation(pid, url, "99")
  switchOffKeyForAnimation(pid, url, "123")
  switchOffKeyForAnimation(pid, url, "124")
  switchOffKeyForAnimation(pid, url, "78")
  switchOffKeyForAnimation(pid, url, "79")
  switchOffKeyForAnimation(pid, url, "80")
  switchOffKeyForAnimation(pid, url, "103")
  switchOffKeyForAnimation(pid, url, "104")
  switchOffKeyForAnimation(pid, url, "105")
  switchOffKeyForAnimation(pid, url, "127")
  switchOffKeyForAnimation(pid, url, "82")
  switchOffKeyForAnimation(pid, url, "85")
  switchOffKeyForAnimation(pid, url, "107")
  switchOffKeyForAnimation(pid, url, "109")
  switchOffKeyForAnimation(pid, url, "131")
  switchOffKeyForAnimation(pid, url, "132")
  switchOffKeyForAnimation(pid, url, "71")

}

func main() {

  nameOfProgram := "cpu-meter"
  // first we initialize the variables and constants for
  const numberOfKey int = 10

  numberOfCPU := runtime.NumCPU()

  ospid := os.Getpid()

  port := "27301"
  url := "http://localhost:" + port + "/api/1.0/signals"
  pid := "DK5QPID"
  fmt.Printf("Starting process %d: %s\n", ospid, nameOfProgram)
  alreadyLit := make([]int, numberOfKey)

  back := &backend.Local{}

  shell, err := ps.New(back)
  check(err)

  defer shell.Exit()

  // first we switch off all the keys of the row to make sure that no "noise" color are displayed
  // when launching the script
  for i := 0; i <= 9; i++ {
    switchOffKey(i, pid, url, alreadyLit)
  }

  displayAnimation(pid, url)

  startLookingForInterruption(ospid, nameOfProgram, pid, url, alreadyLit)

  for true {
    // first we get the percentage of the avg cpu
    avgPercentage, err := cpu.Percent(time.Second, false)
    check(err)
    // then we get the array with the values of all the cpus usage
    percentages := getCpusPercentage(numberOfCPU, shell)

    maxPercentage := getMaxPercentage(percentages, numberOfCPU, shell, avgPercentage)

    alreadyLit = colorizeKeyboard(maxPercentage, int(avgPercentage[0]), alreadyLit, pid, url)

    fmt.Printf("\r (blue) avg cpu: %3d%%    (green) max cpu: %3d%%", int(avgPercentage[0]), int(maxPercentage))
    time.Sleep(1 * time.Second)
  }

}
```