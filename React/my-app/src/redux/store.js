import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import book from "./book/reducer";
import account from "./accounts/reducer";

const reducers = combineReducers({
  book,
  account
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
