	var express=require('express');

var router=express.Router();

router.get('/',function(req,res){
	res.render('index',{name:'holy crap this is awsome'});
});

router.get('/profile',function(req,res){
	res.render('profile',{});
});

module.exports=router;