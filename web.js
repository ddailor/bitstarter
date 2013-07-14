var express = require('express');
var fs = require ('fs');
var msg2 = new Buffer(fs.readFileSync("index.html"),"utf-8");

var buffer = new Buffer("Hello World 4 buffer","utf-8");
var message = buffer.toString("utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(msg2.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
