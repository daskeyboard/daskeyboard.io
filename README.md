# Getting Started With Das Keyboard Q Desktop Software - beta

*Warning:* the Q software is in very early stage. It's buggy, incomplete, and poorly documented.
That means it is a start. However it is improving fast. Only use it if you are 
comfortable being a beta tester and contributing useful feedback.

## Q Desktop Software Installation

### Download and install Q clients software

Q clients can be downloaded from the Q website:
  https://www.daskeyboard.com/technology/q-software/

### Create a Das Keyboard Q account

In order to use the Q client, you'll need to create an account at
 https://q.daskeyboard.com/ 

### Signup for the Q forum

The Q forum is an online discussion for technical discussion: https://qforum.daskeyboard.com 

## Sending Signals to your 5Q keyboard + developer API

A bit of lingo first: a *signal* is a message that contains color information (and more) to be
displayed on a 5Q keyboard. All 3rd party platforms communicate with the Q clients by sending 
 signals very much like your friends send text messages to your phone. Instead of being a text message, a 
 signal contains also key color information.

Even without a real Q device, you can play with Signals. Signals will be displayed on the Q desktop "dashboard mode" and the Q Android app. 

There are several possibilities to send signals to the 5Q keyboard:
 
 - Zapier (https://zapier.com): use Zapier clould platform to create zaps (like IFTTT recipes).
 Select the Action called "Das Keyboard Q". Zapier will create signals based on triggers such as
  emails, Facebook events, even new Youtube videos and much more. The app is currently working with invitations only, here is the link to access it: https://zapier.com/developer/invite/52454/1adf69b9a21dcfa16a1953d99baf253e/. 
 - IFTTT (https://ifttt.com)
 - You can also create your own script with the Q API.
 
## Q Developer API

The developer Q API is an easy way to use a JSON REST API to send signals to the Q device. 

Read documentation at https://github.com/DasKeyboard/q/blob/master/q-api-doc.md.


## Contributing
At this point of the development, we would like to ask the community for input on all aspects
 of the project: features, API, ideas, etc... 
 Please use the forum to do this: https://qforum.daskeyboard.com.
 


