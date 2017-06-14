var createStore=require("redux").createStore;

const reducer=function(state,action){
	switch(action.type){
		case "INC":
			return action.playload;
			break;
		case "DEC":
			return state-action.playload;
			break;
	}
}

const store=createStore(reducer,88);

store.subscribe(function(){
	console.log("store changed",store.getState());
});

store.dispatch({type:"INC",playload:8});
store.dispatch({type:"DEC",playload:18});