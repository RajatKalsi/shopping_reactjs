import rootReducer from "./state/reducers";
import {applyMiddleware, createStore} from  'redux'
import thunk from "redux-thunk";

const store=createStore(rootReducer);
export default store;