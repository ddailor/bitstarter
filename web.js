var express = require('express');

var buffer = new Buffer("Hello World 4 buffer","utf-8");
var message = buffer.toString("utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 3');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
