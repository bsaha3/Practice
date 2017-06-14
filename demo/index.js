const http=require('http');


var server=http.createServer(function(req,res){
	// res.writeHead(200,{'Content-Type':'text/plain'});
	// res.write('hello');
	res.end('hello');
});

server.listen(3000,function(){
	console.log('server running at 3000');
});