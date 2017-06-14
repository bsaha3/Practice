var express=require('express');
var bodyParser=require('body-parser');

var router=express.Router();

//middleware used
router.use(bodyParser.urlencoded({extended:true}));

//userdefined middleware
router.use(function(req,res,next){
	// req.requestTime = Date.now();
	console.log('logged');
	next();
});

// router.use(function(req,res,next){
// 	// req.requestTime = Date.now();
// 	console.log('logged');
// 	next();
// });


router.get('/',function(req,res){
	res.render('index');
});

router.post('/user',function(req,res){
	console.log(req.body);
	console.log(req.body.first+" "+req.body.last);
	res.render('user',{f:req.body.first, l: req.body.last});
});

module.exports=router;