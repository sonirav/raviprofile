var express = require("express");
var bodyParser = require("body-parser");
//var mysql = require("mysql");
var path = require("path");
//var fs = require("fs");
//var methodOverride = require("method-override");
// Requiring dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");
var app = express();
var PORT= process.env.PORT || 3000;
app.use("/assets",express.static("assets"));
app.use("/assets/html",express.static("assets/html"));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Routes Definaion
// Index.html on loading

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,"index.html"))
});
// knowledge base page
app.get('/knowb',function(req,res){
	res.sendFile(path.join(__dirname,"/assets/html/knowledgebase.html"))
});

// about me page
app.get('/aboutm',function(req,res){
	res.sendFile(path.join(__dirname,"/assets/html/aboutme.html"))
});

// myresume page
app.get('/mresume',function(req,res){
	res.sendFile(path.join(__dirname,"/assets/html/myresume.html"))
});

// contact me page
app.get('/contactm',function(req,res){
	res.sendFile(path.join(__dirname,"/assets/html/contactme.html"))
});

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
