import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import book from "./book/reducer";
import login from "./login/reducer";

const reducers = combineReducers({
  book,
  login
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
