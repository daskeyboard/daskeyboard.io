```php
<?php
    $urlToken = "https://q.daskeyboard.com/oauth/1.4/token";

    // if curl_init is undefined, run: sudo apt-get install php-curl
    $chToken = curl_init($urlToken);
    echo "Please enter your Q cloud crendentials\n";
    $user = new \stdClass();
    $user->email = readline("email: ");
    $user->password = readline("password: ");
    $user->grant_type = "password";
    $userJson = json_encode($user);

    // getting the access_token
    curl_setopt($chToken, CURLOPT_POST, 1);
    curl_setopt($chToken, CURLOPT_POSTFIELDS, $userJson);
    curl_setopt($chToken, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($chToken, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($chToken, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($chToken);
    $responseInfo = curl_getinfo($chToken);
    $json = json_decode($result);
    $access_token = $json->access_token;

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
    $urlSignal = "https://q.daskeyboard.com/api/1.0/signals";
    $chSignal = curl_init($urlSignal);
    curl_setopt($chSignal, CURLOPT_POST, 1);
    curl_setopt($chSignal, CURLOPT_POSTFIELDS, $signalJson);
    curl_setopt($chSignal, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Authorization: Bearer '.$access_token));
    curl_setopt($chToken, CURLOPT_SSL_VERIFYPEER, 0);

    // sending the signal
    $result = curl_exec($chSignal);

    // checking the response
    if ($result == "OK") {
        echo "OK"."\n";
    } else {
        echo "Error while sending the signal: ".$result."\n";
    }
?>
```