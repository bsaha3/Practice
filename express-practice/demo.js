var express=require('express');

var app=express();

app.set('port',process.env.PORT || 3000);

app.get('/',function(request,response){
	response.send('Express Working on /');
});

app.get('/profile',function(req,res){
	var query=req.query;
	res.send('express working on profile'+query);
});

app.listen(app.get('port'),function(){
	console.log('server started at 3000');
});