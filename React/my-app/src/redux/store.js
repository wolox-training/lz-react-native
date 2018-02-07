import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import book from "./book/reducer";
import account from "./accounts/reducer";
import rents from "./rents/reducer";

const reducers = combineReducers({
  book,
  account
  //  rents
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
