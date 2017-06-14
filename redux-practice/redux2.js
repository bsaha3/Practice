var redux=require('redux');

var createStore=redux.createStore;
var combineReducers=redux.combineReducers;

var userReducer=(state={},action) => {
	switch(action.type){
		case "CHANGE_NAME":
			state.name=action.playload;
		break;
		case "CHANGE_AGE":
			state.age=action.playload;
		break;
	}
	return state;
}

var tweetReducer=(state={},action) => {
	return state;
}

const reducers=combineReducers({
	user: userReducer,
	tweets: tweetReducer
});

const store=createStore(reducers);

store.subscribe(()=>{console.log("store changed",store.getState());});

store.dispatch({type:"CHANGE_NAME",playload:"Will"});
store.dispatch({type:"CHANGE_AGE",playload:35});
store.dispatch({type:"CHANGE_AGE",playload:36});