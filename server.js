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
var nodemailer = require("nodemailer");
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
app.get('/aboutme',function(req,res){
	res.sendFile(path.join(__dirname,"/assets/html/aboutme.html"))
});

// about me page
app.get('/portfolio',function(req,res){
	res.sendFile(path.join(__dirname,"/assets/html/portfolio.html"))
});

// myresume page
app.get('/skills',function(req,res){
	res.sendFile(path.join(__dirname,"/assets/html/skills.html"))
});
app.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname,"/assets/html/contactme.html"))
});
app.get('/tests',function(req,res){
    res.sendFile(path.join(__dirname,"/assets/html/tests.html"))
});
app.get('/myresume',function(req,res){
    res.sendFile(path.join(__dirname,"/assets/html/myresume.html"))
});
// contact me page
//app.get('/contactm',function(req,res){
//	res.sendFile(path.join(__dirname,"/assets/html/contactme.html"))
//});

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "sonirav@gmail.com",
        pass: "GopalKrishn"
    }
}); */
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
/*
app.get('/contactm',function(req,res){
    res.sendFile(path.join(__dirname,'/assets/html/contactme.html'));
});
app.get('/mailsent',function(req,res){
    res.sendFile(path.join(__dirname,'/assets/html/redirect.html'));
});
app.get('/send',function(req,res)
{
    var mailOptions={
    	from    : req.query.name + '<'+req.query.email+'>',
        to 		: 'sonirav@gmail.com',
        subject : req.query.subject + "- by "+req.query.email,
        text 	: req.query.message+" - "+req.query.name
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        	res.end("error");
     }else{
            console.log("Message sent");
            res.redirect("/mailsent");        	
         }
});
});*/

/*--------------------Routing Over----------------------------*/

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});


