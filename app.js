var express = require('express')
var app = express()

var gpio = require("pi-gpio");
var pin = 7;
gpio.close(pin);                     // Close pin 16

gpio.open(pin, "output", function(err) {     // Open pin 16 for output
    gpio.write(pin, 1, function() {});
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


function closeRelay(){
  gpio.write(pin, 1, function(){});
  console.log('closed!');
  relayOpen = false;
}
