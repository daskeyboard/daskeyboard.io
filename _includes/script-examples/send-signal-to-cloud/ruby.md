```ruby
#!/usr/bin/env ruby
require 'json'
require 'net/http'
require 'net/https'


url_signal = 'https://q.daskeyboard.com/api/1.0/signals'
url_token = 'https://q.daskeyboard.com/oauth/1.4/token'

# getting the credentials to get the Oauth token
puts "\n\nPlease enter your Q cloud credentials"
print "email: "
email = gets.chop
print "password: "
password = gets.chop

# getting the Oauth token
uri_token = URI.parse(url_token)
https = Net::HTTP.new(uri_token.host, uri_token.port)
https.use_ssl = true
req_token = Net::HTTP::Post.new(uri_token, initheader = 'Content-type' => 'application/json')

req_token.body = {email: email,
                 password: password,
                 grant_type: "password"}.to_json

res = https.request(req_token)
# checking the response
if res.code != "200"
    puts "Error: " + res.code + " - " + res.body
    exit 1
end

parsed_json = JSON.parse(res.body)

access_token = parsed_json['access_token']

# sending the signal
uri_signal = URI.parse(url_signal)
https = Net::HTTP.new(uri_signal.host, uri_signal.port)
https.use_ssl = true 
req_signal = Net::HTTP::Post.new(uri_signal, 
    initheader = {'Content-Type' => 'application/json', 'Authorization' => 'Bearer '+access_token.to_s})

req_signal.body = {pid: "DK5QPID",
                  zoneId: "KEY_A",
                  color: "#F00",
                  effect: "SET_COLOR",
                  name: "Hello oneSignal",
                  message: "signal sent from a ruby script to a key",
                  shouldNotify: false}.to_json

res = https.request(req_signal)

# checking the response
if res.code != "200"
    puts "Error code: " + res.code + " - " + res.body
else
    puts "OK - signal created"
end
```