```sh
#!/bin/bash

# -----------------------------------------------
#
# This script displays the percentage of the avg
# cpu usage and the percentage of usage of the
# cpu that is used the most.
# The percentages will be displayed on the row of
# of number, from 1 (less than 10%) to 9 (100%)
#
# -----------------------------------------------



# functions
# ----------

# this function is used to check if there are any errors while sending the signals
# this function takes 1 argument: 1. the result of the "curl" command
check() {
  # a result different from 0 means an error
  if [ $1 != 0 ]; then
    echo "ERROR while sending signal"
    echo "Make sure that the public api is enabled or that the q-desktop application is running"
    exit 1
  fi
}

# this function is used to initialize the arrays
# this function takes 0 argument
initializeArray() {
  i=0
  # we instenciate the arrays and set their values to 0
  while [ $i -lt $numberOfCpus ]; do
      PREV_TOTALS[$i]=0
      PREV_IDLES[$i]=0
      PERCENTAGES[$i]=0
      i=$((i+1))
  done
  # this array is used to make sure that we don't send signal to keys that haven't changed status
  # since there are 10 keys, we make it an array of length equal to ten
  # and to initialize it we say that no key is switched on (which is true since no key is switched on since the loop has not started yet)
  for number in {0..9}; do
    ALREADYLIT[$number]=0
  done
}

# this function is used to get the infos about the cpu
# this function takes 1 argument: 1. the number of the cpu that we need to get the scores for
getCpuScores() {
    CPU=(`cat /proc/stat | grep ^cpu$1`)
}

# this function is used to get the percentage of utilization of a all the cpus
# the calculation was found on the internet
# this function takes 0 argument
getCpusPercentage() {
  # first we get the datas needed for the computation of the percentage of each cpu
    CPUS=(`cat /proc/stat | grep '^cpu[0-9]'`)
    # $lengthArray correspond to the length of the array get by cat /proc/stat | grep '^cpu[0-9]'
    local limit=$lengthArray
    local i=0
    # we go through every cpu (the cpus are at every 11*index e.g : cpu0 is at 0 and cpu1 is at 11)
    while [ $i -lt $limit ]; do
      local total=0
      local idle=${CPUS[$i+4]}
      j=1
      # we go through the data needed for every cpu
      while [ $j -le 5 ]; do
        total=$((total+${CPUS[$i+$j]}))
        j=$((j+1))
      done
      local cpu=$((i/11))
      # we do the computation, the calculation can be found on the internet
      let "diff_idle=$idle-${PREV_IDLES[$cpu]}"
      let "diff_total=$total-${PREV_TOTALS[$cpu]}"
      let "diff_usage=(1000*($diff_total-$diff_idle)/$diff_total+5)/10"
      # we save the percentages and the values in arrays
      PERCENTAGES[$cpu]=$diff_usage
      PREV_IDLES[$cpu]=$idle
      PREV_TOTALS[$cpu]=$total
      i=$((i+11))
    done
}

# this function is used to get the range of the keys to colorize according to the percentage
# this function takes 1 argument: 1. the percentage of utilization of a cpu
getRangeOfKey() {
  # we display the percentage between the key_0 and key_9
  local maxKey=$(($1*10/100))
  if [ $maxKey == 0 ]; then
    maxKey=1
  fi
  return $maxKey
}


# this function is used to send a signal to the public api
# this function takes 3 argument: 1. the key to which we want to send a signal
#                                 2. the color we want to send
#                                 3. the effect we want to send
sendSignal() {
  local key=$1
  local color=$2
  local effect=$3
  local name=$4
  local message=$5
  curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
  "pid": "'$PID'",
  "zoneId": "'$key'",
  "color": "'$color'",
  "effect": "'$effect'",
  "name": "",
  "message": "",
  "shouldNotify": false,
  "isRead": false
  }' $URL &> /dev/null # this is to make sure that curl doesn't display anything
  check $?
}

# this function is used to switch off all the keys at the beginnig
switchOffAllTheKeys() {
  local i=0
  while [ $i -le 9 ]; do
    sendSignal "KEY_$i" "" "NONE" "cpu-meter" "Stopping processus $$: cpu-meter"
    i=$((i+1))
  done
}

# this function is used to switch off signals (usually switch off signals that don't need to be switched on)
# this function takes 1 argument: 1. the key for which we are sending the signal
sendSwitchOffSignal() {
  local key=$1
    # we send a signal with black color and with the property effet: none, in order to switch off the key
  sendSignal "KEY_$key" "" "NONE" "" ""
  ALREADYLIT[$key]=0
}

# this function is used to send signals to the key
# this functions takes 1 argument: 1. the key that needs to be switched on
sendSignalToInBetweenKey() {
  local key=$1
  # here it means that we display a green color for the max cpu
  sendSignal "KEY_$key" "#0fff77" "SET_COLOR" "" ""
  # here we check for the response of the curl
  check $?
  ALREADYLIT[$key]=1
}

# this function is used to send signals to the end key (blue or yellow) to differentiate between avg cpu and max cpu
# this function takes 2 arguments: 1. the key that needs to receive the signal
#                                  2. for which cpu we are currently sending a signal for the upperKey (either 0: cpu avg or 1: cpu max)
sendSignalsToEndKey() {
  local key=$1
  local from=$2
  # we test to see if the function is called to display the max cpu or the avg cpu
  # 0: avg cpu
  # 1: max cpu
  if [ $from -eq 0 ]; then
    # here it means that it is to display the avg cpu, we display the end key in blue
    sendSignal "KEY_$key" "#0fa7ff" "SET_COLOR" "" ""
    ALREADYLIT[$key]=2
  else
    # here it means that it is to display the max cpu, we display the end key in green
    sendSignal "KEY_$key" "#0fff77" "SET_COLOR" "" ""
    check $?
    ALREADYLIT[$key]=1
  fi

}

# this function is used to colorize the number row on the keyboard
# this function takes 3 arguments: 1. the upper key limit (for example: if you need to switch on keys 1,2 and 3, maxKey will be 3)
#                                  2. the url were to send the signal
#                                  3. for which cpu we are currently colorizing the keys (either 0: cpu avg or 1: cpu max)
colorizeKeys() {
  # first we get the maxkey
  local maxKey=$1
  # this is to know if the function was called to display avg cpu or max cpu
  local from=$3
  # if the percentage is close to zero, we still display the first key
  if [ $maxKey -eq 0 ]; then
    maxKey=1
  fi

  local i=1
  local url=$2
  if [ $from != 0 ]; then
    # for each key in between the first key and the max key, we set a color  
    while [ $i -lt $maxKey ]; do
      # this test is used to get rid of the blinking problem of the avg cpu color
      if [ $i != $MAX_KEY_AVG ]; then
        getSwitchedState $i
        # we check if the key is not switched on, if it is not, then we switch on key
        if [[ $? == 0 || $? == 2 ]]; then
            sendSignalToInBetweenKey $i
        fi
      fi
      i=$((i+1))
    done
  fi

  # if the maxKey is 10, percentage equals to 100, we display the 0 key as the max key
  # (since it is the last key on the row)
  if [ $maxKey -eq 10 ]; then
    maxKey=0
  fi
  # this is to make sure that we are lighting up the avg cpu keys
  if [[ $from == 0 ]]; then
    # finally we colorize the maxkey
    getSwitchedState $maxKey
    # we check if the key is not switched on, if it is not, then we switch on key
    # the one means that the key represents a max cpu key, and since we gave priority to the avg cpu keys,
    # we give authorization to the avg cpu key to overwrite the color of a max cpu key
    # and this is what we are doing here
    if [[ $? != 2 ]]; then
      sendSignalsToEndKey $maxKey $from
    fi
  else
  # the else makes sure that we a lighting up max cpu keys
    if [ $maxKey != $MAX_KEY_AVG ]; then
      getSwitchedState $maxKey
      #
      if [[ $? != 1 ]]; then
        sendSignalsToEndKey $maxKey $from
      fi
    fi
  fi
}

# this function is used to switch off the keys that we don't need
# this function takes 1 argument: 1. the lower key limit (for example: if you need to switch off keys 8, 9 and 0 maxKey will be 7)
switchOffUnnecessaryKeys() {
  local maxKey=$(($1+1))
  local key=$maxKey
  while [ $key -le 9 ]; do
    getSwitchedState $key
    # we check if the key is switched on, if it is, then we switch off key
    if [[ $? != 0 ]]; then
        sendSwitchOffSignal $key
    fi
    key=$((key+1))
  done
  # it means that the key 0 (the tenth key on the row) is on, so we don't need to switch it off
  if [ $maxKey != 11 ]; then
    key=0
    # if the 0 key is not switched on by the actual loop we switch it off

    sendSwitchOffSignal $key
  fi
}

# this function is used to know if a key is switched on or not
# this function takes 1 argument: 1. the key that we want to check if it is switched on or not
# this function returns a integer : - 0 it means that the key is switched off
#                                   - 1 it means that the key is switched on and represents max cpu
#                                   - 2 it means that the key is switched on and represents avg cpu
getSwitchedState() {
    if [ ${ALREADYLIT[$1]} == 1 ]; then
        return 1
    elif [ ${ALREADYLIT[$1]} == 0 ]; then
        return 0
    else
    # this means that this was the previous placement of the avg percentage key
        return 2
    fi
}

# this function is used to send a signal to a key for the animation
# this function takes 1 argument: 1. the key that we want to switch on
sendSignalForAnim() {
  key=$1
  sendSignal "$key" "#F00" "BLINK" "cpu-meter" "Starting the processus $$: cpu-meter"
}

# this function is used to switch off keys after the animation
# this function takes 1 argument: 1. the key that we want to switch off
switchOffKeyForAnim () {
  key=$1
  sendSignal "$key" "#000" "NONE" "" ""
}

# this function is used to display a little animation, this displays a blinking red "CPU" on the keyboard
# this function takes 0 argument
displayAnimation() {
  # writing the C
  sendSignalForAnim 72
  sendSignalForAnim 76
  sendSignalForAnim 75
  sendSignalForAnim 99
  sendSignalForAnim 123
  sendSignalForAnim 124
  # writing the P
  sendSignalForAnim 78
  sendSignalForAnim 79
  sendSignalForAnim 80
  sendSignalForAnim 103
  sendSignalForAnim 104
  sendSignalForAnim 105
  sendSignalForAnim 127
  # writing the U
  sendSignalForAnim 82
  sendSignalForAnim 85
  sendSignalForAnim 107
  sendSignalForAnim 109
  sendSignalForAnim 131
  sendSignalForAnim 132
  sendSignalForAnim 71

  sleep 3

  # switching the keys off
  switchOffKeyForAnim 72
  switchOffKeyForAnim 76
  switchOffKeyForAnim 75
  switchOffKeyForAnim 99
  switchOffKeyForAnim 123
  switchOffKeyForAnim 124
  switchOffKeyForAnim 78
  switchOffKeyForAnim 79
  switchOffKeyForAnim 80
  switchOffKeyForAnim 103
  switchOffKeyForAnim 104
  switchOffKeyForAnim 105
  switchOffKeyForAnim 127
  switchOffKeyForAnim 82
  switchOffKeyForAnim 85
  switchOffKeyForAnim 107
  switchOffKeyForAnim 109
  switchOffKeyForAnim 131
  switchOffKeyForAnim 132
  switchOffKeyForAnim 71
}

# MAIN PROGRAM
# ------------

# Initialization
# --------------

echo "Starting the processus $$: cpu-meter"

# this is to get the CTRL-C and switch off all the keys when the user exits the script
trap "switchOffAllTheKeys; echo ''; echo 'Stopping the processus $$: cpu-meter'" EXIT
# trap "switchOffAllTheKeys"
# we get the requirements to colorize the keyboard

# we get the PID and the URL in order to send the signal to the api
PORT=27301
PID="DK5QPID" # product ID
URL="http://localhost:$PORT/api/1.0/signals"

# first we initialize all the needed variables
# prev total is used to calculate the percentage of the avg cpu
PREV_TOTAL=0
# prev idle is used to calculate the percentage of the avg cpu
PREV_IDLE=0
# this is to get the number of cpu
numberOfCpus=(`grep -c ^processor /proc/cpuinfo`)
lengthArray=$((numberOfCpus*11))
# those arrays are used to calculate the percentage of utilization for each cpu
PREV_TOTALS=()
PREV_IDLES=()
PERCENTAGES=()
ALREADYLIT=()

initializeArray
# we display a little animation for the user at the beginning of the script
# displayAnimation
# we switch off all the keys at first to make sure that there are no "noise" color on the row of key
# switchOffAllTheKeys

# MAIN LOOP
# ---------

while true; do

# GET THE MEAN USAGE OF THE CPU
# -----------------------------
  # we get the mean of the cpu usage
  CPU=(`cat /proc/stat | grep '^cpu '`) # Get the total CPU statistics.
  unset CPU[0]                          # Discard the "cpu" prefix.
  IDLE=${CPU[4]}
  # Calculate the total CPU time.
  TOTAL=0
  for VALUE in "${CPU[@]:0:4}"; do
    let "TOTAL=$TOTAL+$VALUE"
  done

  # Calculate the CPU usage since we last checked.
  let "DIFF_IDLE=$IDLE-$PREV_IDLE"
  let "DIFF_TOTAL=$TOTAL-$PREV_TOTAL"
  # diff_usage is the percentage
  let "PERCENTAGE_AVG=(1000*($DIFF_TOTAL-$DIFF_IDLE)/$DIFF_TOTAL+5)/10"

  # Remember the total and idle CPU times for the next check.
  PREV_TOTAL="$TOTAL"
  PREV_IDLE="$IDLE"

# GET THE MAX USAGE BETWEEN ALL THE CPUS
# --------------------------------------
  # first we get the percentage of utilization for each cpu
  getCpusPercentage

  # then we get the max
  MAX=${PERCENTAGES[0]}
  i=0
  # this loop is used to get the max, it is a simple search for the max algorithm
  while [ $i -lt $numberOfCpus ]; do
    if [ ${PERCENTAGES[$i]} -gt $MAX ]; then
        MAX=${PERCENTAGES[$i]}
    fi
    i=$((i+1))
  done

  # we get the range of key that need to be switched on for the avg cpu
  getRangeOfKey $PERCENTAGE_AVG
  MAX_KEY_AVG=$?
  # we the range of key that need to be switched on for the max cpu
  getRangeOfKey $MAX
  MAX_KEY_MAX=$?

  # we first colorized the keys for the max cpu because we will colorized the avg cpu above the color of the max cpu
  # since the max cpu will always be higher or equal to the avg cpu
  colorizeKeys $MAX_KEY_MAX $URL 1


  # then we colorize the keys for the avg cpu
  colorizeKeys $MAX_KEY_AVG $URL 0
  # and we finish by switching off unecessary key
  switchOffUnnecessaryKeys $MAX_KEY_MAX
  # Wait before checking again.

  echo -ne "\r avg cpu percentage: $PERCENTAGE_AVG%     max cpu percentage: $MAX%   \b\b"

  # echo "${ALREADYLIT[@]}"

#   echo -ne "\r $MAX_KEY_MAX  \b\b"
  sleep 1
done
```