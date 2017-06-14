var connect=require('connect');
var http=require('http');

var app=connect();

var profile=function(request,response){
	console.log('user requested profile');
}

var forum=function(request, response) {
	console.log('user requested forum');
}

app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8080);
console.log('Server listening at 8080');