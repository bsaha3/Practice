var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded());

app.set('port',process.env.PORT || 3000);

app.route('/form')
	.get((req,res)=>{

		res.sendFile(__dirname+"/public/form.html");
		
		console.log(req.body);
	})
	.post((req,res)=>{
		res.send(req.body.text1+'Hello GET');
		console.log(req.body);
	});

app.listen(app.get('port'),()=>{
	console.log('Server running at 3000');
});