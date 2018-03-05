# Sending signals with node script

This is a little demo on how to send signal to the public api or to the cloud with a java program.

## Prerequisistes

* You need to have [java](https://golang.org/dl/) installed
* download [java-json.jar](http://www.java2s.com/Code/Jar/j/Downloadjavajsonjar.htm)
* unzipe the file and put the result in the folder that you want
* go to the folder of the program
* run this command

```shell
    export CLASSPATH=.:path/to/jarfile/java-json.jar
```

* run this command to compile the first script

```shell
    javac create-one-signal.java
```

* run this command to compile the sceond script

```shell
    javac create-one-signal-to-cloud.java
```

## Running the script

run this command to run the first script

```shell
    java create_one_signal
```

run this command to run the second script

```shell
    java create_one_signal_to_cloud
```

## Explanations

### create-one-signal.java

No difficulty here, if you don't want to use external library, write the json of the signal as a string.

### create-one-signal-to-cloud.java

No difficulty here, an external library is needed to run this program. The first task is to retrieve the oauth access token to send to signals to the cloud.
The second task is to send the json to the cloud. The json send are all just strings.
