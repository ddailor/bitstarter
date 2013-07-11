var express = require('express');
var fs = require('fs');
var infile = "index.html";
var buffer = new Buffer(28);
buffer = readFileSynce(infile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
