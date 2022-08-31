import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer, categoriesReducer } from "./reducers/index";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
