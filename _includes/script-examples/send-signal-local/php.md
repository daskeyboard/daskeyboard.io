```php
<?php
    // Q desktop public API port #
    $port = "27301";
    $url = "http://localhost:".$port."/api/1.0/signals";

    // if curl_init is undefined, run: sudo apt-get install php-curl
    $ch = curl_init($url);

    // construction of the signal object
    $signal = new \stdClass();
    $signal->pid = "DK5QPID";
    $signal->zoneId = "KEY_A";
    $signal->color = "#F00";
    $signal->effect = "SET_COLOR";
    $signal->name = "Hello oneSignal";
    $signal->message = "signal sent from a php script to a key";
    $signal->shouldNotify = false;

    // encoding to json
    $signalJson = json_encode($signal);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $signalJson);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

    // sending the signal to colorize the key A in red
    $result = curl_exec($ch);

    // checking the response
    if ($result == "OK") {
        echo $result."\n";
    } else {
        echo "Error while sending the signal: ".$result."\n";
    }
?>
```