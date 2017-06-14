var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){

	if(request.method=='GET' && request.url=='/'){
		response.writeHead(200,{'Content-Type':'text/html'});

		var h=fs.readFileSync('./index.html').toString();
		response.write(h);
	}
	else{
		response.writeHead(404,{'Content-Type':'text/plain'});
		response.write('Error');
	}
	response.end();
}).listen(8888);

console.log('Server is running at 8888');