
var promiseToCleanTheRoom=new Promise((resolve,reject)=>{

	let isClean=false;

	if(isClean){
		resolve('Clean');
	}
	else{
		reject('not Clean');
	}
});

promiseToCleanTheRoom
	.then((fromResolve)=>{
		console.log('The room is '+fromResolve);
	})
	.catch((fromReject)=>{
		console.log('The room is '+fromReject);
	});