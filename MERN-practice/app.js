var express=require('express');
var http=require('http');
var path=require('path');

var app=express();

var router=require('./routes/index.js');//imported router

app.use('/',router);// routes used


//view engine for html
app.engine('html',require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

// //view engine for jsx
// app.engine('jsx',require('express-react-views').createEngine());
// app.set('view engine','jsx');


//Server
var server=http.createServer(app);
server.listen(3000,function(){console.log('Server running at port 3000.....');});