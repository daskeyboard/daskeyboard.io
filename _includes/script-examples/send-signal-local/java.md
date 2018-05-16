```java
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

import javax.swing.plaf.InputMapUIResource;

class create_one_signal {
    public static void main(String[] args) {
        // creating the signal as a string
        String signalJson = "{\"pid\": \"DK5QPID\", \"zoneId\": \"KEY_A\", \"name\": \"Hello oneSignal\", \"message\": \"signal sent from a java script (haha) to a key\", \"effect\": \"SET_COLOR\", \"color\": \"#F00\", \"shouldNotify\": false}";
        // Q desktop public API port #
        String port = "27301";

        // sending the signal to colorize the key A in red
        try {
            URL urlObj = new URL("http://localhost:" + port + "/api/1.0/signals");
            HttpURLConnection urlConnection = (HttpURLConnection) urlObj.openConnection();
            urlConnection.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            urlConnection.setDoOutput(true);
            urlConnection.setRequestMethod("POST");

            OutputStream os = urlConnection.getOutputStream();
            os.write(signalJson.getBytes("UTF-8"));
            os.close();
            // reading the response
            InputStream in = new BufferedInputStream(urlConnection.getInputStream());
            BufferedReader r = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
            System.out.println(r.readLine());
            in.close();
            urlConnection.disconnect();
            // checking the response
        } catch (IOException e) {
            System.out.println("Error while sending the signal: " + e.getMessage());
            System.exit(1);
        }
    }
}
```