var express=require('express');

var app=express();

app.use(express.static('public'));

app.route('/next')
.get((req,res)=>{
	res.send('hello');
})
.post((req,res)=>{
	res.sendFile(__dirname+'/public/hello.html');
});

app.listen(3000,()=>{
	console.log('running');
});