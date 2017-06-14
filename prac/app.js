const express=require('express');
const http=require('http');
const path=require('path');

const app=express();

app.set('port',process.env.PORT || 3000);

var index=require('./routes/index.js');
var user=require('./routes/user.js');


app.set('views',path.join(__dirname,'views'));

//engine setup for html
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

//engine for jsx
app.engine('jsx',require('express-react-views').createEngine());
app.set('view engine','jsx');


app.use('/',index);
app.use('/',user);

const server=http.createServer(app);

server.listen(app.get('port'),function(){
	console.log('server running at 3000');
});