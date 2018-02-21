import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import book from "./book/reducer";
import account from "./accounts/reducer";
import rents from "./rents/reducer";

const reducers = combineReducers({
  book,
  account,
  rents
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
