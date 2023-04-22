import { createStore, combineReducers } from "redux";
import todoreducer from "../modules/mylist";

const rootReducer = combineReducers({
	todos: todoreducer,
});

const store = createStore(rootReducer);

export default store;
