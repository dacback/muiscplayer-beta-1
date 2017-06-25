var express = require("express");
var path = require("path");
var app = express();
var db = require('./Database');
// console.log(db);
var port = 3050;

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', function(req,res){
	res.sendFile(__dirname +'/public');
});

app.get('/songs',function(req,res){
	console.log(db);
	res.json(db);
});

app.listen(port,function(){
	console.log('server running on Port ' + port);
});