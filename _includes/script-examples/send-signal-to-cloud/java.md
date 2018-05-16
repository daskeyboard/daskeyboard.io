```java
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import javax.net.ssl.HttpsURLConnection;
import javax.swing.plaf.InputMapUIResource;
import jdk.nashorn.internal.ir.ObjectNode;
import org.json.*;
import java.util.Scanner;

class create_one_signal_to_cloud {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // getting the credentials of the user
        System.out.println("Please enter your credentials");
        System.out.print("email: ");
        String email = sc.nextLine();
        System.out.print("password: ");
        String password = sc.nextLine();

        // creating the signal
        String signalJson = "{\"pid\": \"DK5QPID\", \"zoneId\": \"KEY_A\", \"name\": \"Hello oneSignal\", \"message\": \"signal sent from a java script (haha) to a key\", \"effect\": \"SET_COLOR\", \"color\": \"#F00\", \"shouldNotify\": false}";
        // creating the user
        String userJson = "{\"email\": \""+email+"\", \"password\": \""+password+"\", \"grant_type\": \"password\"}";
        String access_token = "";

        try {
            // sending the request to get the Oauth token
            URL urlToken = new URL("https://q.daskeyboard.com/oauth/1.4/token");
            HttpURLConnection urlConnectionToken = (HttpURLConnection) urlToken.openConnection();
            urlConnectionToken.setRequestProperty("Content-Type",  "application/json; charset=UTF-8");
            urlConnectionToken.setDoOutput(true);
            urlConnectionToken.setRequestMethod("POST");

            OutputStream os = urlConnectionToken.getOutputStream();
            os.write(userJson.getBytes("UTF-8"));
            os.close();

            InputStream in = new BufferedInputStream(urlConnectionToken.getInputStream());
            BufferedReader r =new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
            // make sure you have imported the org.json.JSONObject library in your project
            // getting the access token
            try {
                JSONObject jsonObj = new JSONObject(r.readLine());
                access_token = jsonObj.getString("access_token");
            } catch(JSONException e) {
                System.out.println("Error: " + e);
                System.exit(1);
            }


            in.close();
            urlConnectionToken.disconnect();
            // checking the response
        } catch (IOException e) {
            System.out.println("Error: bad credentials: " + e.getMessage());
            System.exit(1);
        }

        // sending the signal
        try {
            URL urlSignal = new URL("https://q.daskeyboard.com/api/1.0/signals");
            HttpURLConnection urlConnectionSignal = (HttpURLConnection) urlSignal.openConnection();
            urlConnectionSignal.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            urlConnectionSignal.setRequestProperty("Authorization", "Bearer " + access_token);
            urlConnectionSignal.setDoOutput(true);
            urlConnectionSignal.setRequestMethod("POST");

            OutputStream os = urlConnectionSignal.getOutputStream();
            os.write(signalJson.getBytes("UTF-8"));
            os.close();

            InputStream in = new BufferedInputStream(urlConnectionSignal.getInputStream());
            BufferedReader r = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
            System.out.println(r.readLine());
            in.close();
            urlConnectionSignal.disconnect();
            // checking the response
        } catch (IOException e) {
            System.out.println("Error while sending the signal");
            System.exit(1);
        }

    }

}
```