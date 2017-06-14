var Sirname=function(n){
	console.log('Sirname coming soon for '+n);

	name(null,function(){console.log(n)});

}

var name=function(err,callback){


setTimeout(callback,500);

}


Sirname(1);
Sirname(2);
Sirname(3);