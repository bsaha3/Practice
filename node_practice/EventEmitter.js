var EventEmitter=require('events').EventEmitter;

var Counter= function(init){
	this.increment=function(){
		init++;
		this.emit('incremented',init,5,function(){return 'callback';});
	}
}

Counter.prototype=new EventEmitter();

var counter=new Counter(10);

counter.addListener('incremented',function(count,n,callback)
								{console.log(count,n,callback());});

counter.increment();
counter.increment();