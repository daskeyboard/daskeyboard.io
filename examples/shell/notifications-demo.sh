#!/bin/sh

#-----------------------------------------------
# This script colorize a key of a 5Q Das Keyboard
# by sending a JSON signal to the its public API
# located at http://localhost:27301
#-----------------------------------------------
set -e # quit on first error.

PID="DK5QPID" # product ID

URL="http://localhost:$PORT/api/1.0/signals"
#-------------------------
# Send signal the 15Q keyboard
#-------------------------
#
# important NOTE: if field "name" and "message" are empty then the signal is
# only displayed on the devices LEDs, not in the signal center
#

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "90",
    "color": "#03a3a3",
    "effect": "SET_COLOUR",
    "name": "Flight for Paris in one hour",
    "message": "Your flight for Paris is leaving in one hour",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "'"KEY_M"'",
    "color": "#F00",
    "effect": "SET_COLOUR",
    "name": "Macklemore Video",
    "message": "New public video from MacklemoreVEVO",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "KEY_S",
    "color": "#9441f4",
    "effect": "SET_COLOUR",
    "name": "New SMS",
    "message": "New SMS from Mom",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "36",
    "color": "#81daf5",
    "effect": "SET_COLOUR",
    "name": "Sunny today!",
    "message": "High of 151F / 11C and a low of 43F / 6C.",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "KEY_C",
    "color": "#09f20c",
    "effect": "SET_COLOUR",
    "name": "Coffee is ready",
    "message": "Your coffee is ready! Time to have a cup",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "25",
    "color": "#bc640d",
    "effect": "SET_COLOUR",
    "name": "Android - Low battery!",
    "message": "20% remaining",
    "shouldNotify": true 
}' $URL

# sleep 15

# curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
#     "pid": "DK5QPID",
#     "zoneId": "116",
#     "color": "#0eeda6",
#     "effect": "SET_COLOUR",
#     "name": "TO DO completed: Call the director",
#     "message": "Call the director about the meeting of Tuesday",
#     "shouldNotify": true 
# }' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "KEY_E",
    "color": "#FF0",
    "effect": "SET_COLOUR",
    "name": "New Email",
    "message": "New contest: Sustainable toothpaste packaging eyeka@eyeka.com",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "KEY_F",
    "color": "#003eba",
    "effect": "SET_COLOUR",
    "name": "Facebook - Tagged!",
    "message": "You are tagged in a photo",
    "shouldNotify": true 
}' $URL

# sleep 15

# curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
#     "pid": "DK5QPID",
#     "zoneId": "KEY_E",
#     "color": "#ff0026",
#     "effect": "SET_COLOUR",
#     "name": "New Email from the BOSS",
#     "message": "Meeting at 11am",
#     "shouldNotify": true 
# }' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "65",
    "color": "#ff0026",
    "effect": "SET_COLOUR",
    "name": "Reminder: Meeting at 11am",
    "message": "Meeting at 11am with the Boss",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "78",
    "color": "#00ffed",
    "effect": "SET_COLOUR",
    "name": "Donald Trump s Tweet",
    "message": "The journey to #MAGA began @CPAC 2011 and the opportunity to reconnect with friends and supporters is something I look forward to every year. See you at #CPAC2018!",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "27",
    "color": "#f4cb42",
    "effect": "SET_COLOUR",
    "name": "President Trump releases $2 trillion budget plan via FOX NEWS",
    "message": "President Trump releases $2 trillion budget plan via FOX NEWS",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "35",
    "color": "#41f456",
    "effect": "SET_COLOUR",
    "name": "Your favorite team is about to play!",
    "message": "Your favorite team is about to play!",
    "shouldNotify": true 
}' $URL

# sleep 15

# curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
#     "pid": "DK5QPID",
#     "zoneId": "115",
#     "color": "#2efc0f",
#     "effect": "SET_COLOUR",
#     "name": "TO DO: Improve the CSS in the home page",
#     "message": "Improve the CSS in the home page - Assigned to me",
#     "shouldNotify": true 
# }' $URL

# sleep 10

# curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
#     "pid": "DK5QPID",
#     "zoneId": "66",
#     "color": "#d100b1",
#     "effect": "SET_COLOUR",
#     "name": "Call the the delivery person",
#     "message": "Call the delivery person to find out when the package will be delivered",
#     "shouldNotify": true 
# }' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "37",
    "color": "#005872",
    "effect": "SET_COLOUR",
    "name": "PM Showers tomorrow!",
    "message": "PM Showers tomorrow!",
    "shouldNotify": true 
}' $URL

# sleep 15

# curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
#     "pid": "DK5QPID",
#     "zoneId": "117",
#     "color": "#ba0303",
#     "effect": "SET_COLOUR",
#     "name": "URGENT TO DO: Fix the home page",
#     "message": "Fix the home page: bunch of errors - Assigned to me",
#     "shouldNotify": true 
# }' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "88",
    "color": "#14d1b8",
    "effect": "SET_COLOUR",
    "name": "Appointment with Dr.WILSON",
    "message": "Appointment with Dr.WILSON at 7pm",
    "shouldNotify": true 
}' $URL

# sleep 12

# curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
#     "pid": "DK5QPID",
#     "zoneId": "91",
#     "color": "#db0f7c",
#     "effect": "SET_COLOUR",
#     "name": "TO DO: Buy a cake for the party",
#     "message": "TO DO: Buy a cake for the party",
#     "shouldNotify": true 
# }' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "89",
    "color": "#8415c4",
    "effect": "SET_COLOUR",
    "name": "Family dinner",
    "message": "Family dinner at 8pm",
    "shouldNotify": true 
}' $URL

sleep 15

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "pid": "DK5QPID",
    "zoneId": "32",
    "color": "#41f456",
    "effect": "SET_COLOUR",
    "name": "Australian Open 2018: Federer makes it 20 majors",
    "message": "#RF20: The road to Roger’s mystical tally",
    "shouldNotify": true 
}' $URL

result=$?

if [ "$result" -eq "0" ]; then
    echo OK
    exit 0
else
    echo ERROR
    exit 1
fi
