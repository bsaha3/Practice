var connect=require('connect');
var http=require('http');

var app= connect();

var first=function(request,response,next){
	console.log('Bacon');
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hi there');
	response.end();
	next();
}

var second= function(request,response,next){
	console.log('Tuna');
}

app.use(first);
app.use(second);

http.createServer(app).listen(8080);
console.log('Server listening at 8080');