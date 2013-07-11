var express = require('express');
var fs = require ('fs');
var msg2 = fs.readFileSync("index.html");

var buffer = new Buffer("Hello World 4 buffer","utf-8");
var message = buffer.toString("utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
