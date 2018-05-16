```ruby
#!/usr/bin/env ruby
require 'json'
require 'net/http'

# Q desktop public API port #.
port = "27301"
# Q desktop public API url
url = 'http://localhost:'+port+'/api/1.0/signals'

# sending the signal to colorize the key A in red
uri = URI(url)
req = Net::HTTP::Post.new(uri, 'Content-type' => 'application/json')
req.body = {pid: "DK5QPID",
            zoneId: "KEY_A",
            color: "#F00",
            effect: "SET_COLOR",
            name: "Hello oneSignal",
            message: "signal sent from a ruby script to a key",
            shouldNotify: false}.to_json

res = Net::HTTP.start(uri.hostname, uri.port) do |http|
    http.request(req)
end

# checking the response
if res.body == "OK"
    puts res.body
else
    puts "Error while sending the signal: " + res.body
end

```