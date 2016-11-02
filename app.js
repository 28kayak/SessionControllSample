/**
 * Created by kaya on 11/1/16.
 */
var express = require('express');
var app = express();
app.get('/awesome', function (req, res)
{
    res.send("You are Awesome");
});

app.get('/radical', function (req,res) {
    res.send("What a radical visit!");
});

app.get('/tubular', function (req, res) {
    res.send('Are you a surfer');
});
//if you host the application on Modulus the port environment variable
//will be defined,
//otherwise, simply use 8080
var port = 8080;
app.listen(port);
console.log("Listening at http://localhost:8080");
