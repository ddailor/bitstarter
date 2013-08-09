var express = require('express');
var fs = require ('fs');

var msg2 = new Buffer(fs.readFileSync("index.html"),"utf-8");
var msg3 = new Buffer(fs.readFileSync("about.html"),"utf-8");
var msg4 = new Buffer(fs.readFileSync("products.html"),"utf-8");
var msg5 = new Buffer(fs.readFileSync("started.html"),"utf-8");
var msg6 = new Buffer(fs.readFileSync("contact.html"),"utf-8");
var msg7 = new Buffer(fs.readFileSync("shop.html"),"utf-8");
var msg8 = new Buffer(fs.readFileSync("control.html"),"utf-8");
var msg9 = new Buffer(fs.readFileSync("setup.html"),"utf-8");
var msgA = new Buffer(fs.readFileSync("schedule.html"),"utf-8");
var msgB = new Buffer(fs.readFileSync("savings.html"), "utf-8");
 
var buffer = new Buffer("Hello World 4 buffer","utf-8");
var message = buffer.toString("utf-8");

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(msg2.toString("utf-8"));
});
app.get('/about', function(request,response) {
    response.send(msg3.toString("utf-8"));
});
app.get('/products', function(request,response) {
    response.send(msg4.toString("utf-8"));
});
app.get('/started', function(request,response) {
    response.send(msg5.toString("utf-8"));
});
app.get('/contact', function(request,response) {
    response.send(msg6.toString("utf-8"));
});
app.get('/control', function(request,response) {
    response.send(msg8.toString("utf-8"));
});
app.get('/shop', function(request,response) {
    response.send(msg7.toString("utf-8"));
});
app.get('/setup', function(request, response) {
    response.send(msg9.toString("utf-8"));
});
app.get('/schedule', function(request, response) {
    response.send(msgA.toString("utf-8"));
});
app.get('/savings', function(request,response) {
    response.send(msgB.toString("utf-8"));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
