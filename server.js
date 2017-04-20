var express = require("express");
var app = express();
var server = require("http").createServer(app);
var http = require("http");

server.listen(80);
console.log("Server is listening");

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});