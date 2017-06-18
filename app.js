var client_id = '994d67ba07eb4acca5713c4140410ae8'; // Your client id
var client_secret = '267d460733b34dd8a8b3a473a671536b'; // Your secret
var redirect_uri = 'http://localhost:3050'; // Your redirect uri

var express = require("express");
var path = require("path");
var app = express();
var port = 3050;

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', function(req,res){
	res.sendFile(__dirname +'/public');
});

app.listen(port,function(){
	console.log('server running on Port ' + port);
});