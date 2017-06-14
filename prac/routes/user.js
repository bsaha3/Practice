var express=require('express');

var router=express.Router();

var bodyParser=require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));

router.post('/user',function(req,res){
	console.log(req.body);
	res.render('user',{f1:req.body.FirstName,f2:req.body.LastName});
})
	.get('/user',function(req,res){
		res.send('Authentication Failed');
	});

module.exports=router;