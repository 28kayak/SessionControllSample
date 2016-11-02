/**
 * Created by kaya on 11/1/16.
 */
var express = require('express');
var app = express()
var cookieParser = require('cookie-parser');
var session = require('express-session');
//need to use the cookie parse and the session features of express before the sessions will be made available
//Do this before defining any routes, which in this case would look like so:
app.use(cookieParser());
app.use(session({secret: '1234567890QWERTY'}));//giving secrete perceive little security
//might use key(more secure)

//sessions are accessible through the request object in each route.
// you can get and set properties just like you would when handling an object normally
//for example, lets set some session data in awesome route

app.get('/', function (req,res) {
    res.send("hey");

})
app.get('/awesome', function (req, res)
{
    if(req.session.lastPage)
    {
        console.log("in if awesome");
        res.write('Last page was: ' + req.session.lastPage + '.');
    }
    req.session.lastPage = '/awesome';
    res.end("You are Awesome");
});

app.get('/radical', function (req,res) {
    if(req.session.lastPage)
    {
        console.log("in if radical");
        res.write('Last page was: ' + req.session.lastPage + '.');
    }
    req.session.lastPage = '/radical';
    res.end("What a radical visit!");
});

app.get('/tubular', function (req, res) {
    if(req.session.lastPage)
    {
        res.write('Last page was: ' + req.session.lastPage + '.');
    }
    req.session.lastPage = '/tubular';
    res.end('Are you a surfer');
});
//if you host the application on Modulus the port environment variable
//will be defined,
//otherwise, simply use 8080
var port = 8080;
app.listen(port);
console.log("Listening at http://localhost:8080");
