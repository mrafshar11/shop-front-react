import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { productReducer } from "./product";
import { userReducer } from "./user";
import { loadingBarReducer } from "react-redux-loading-bar";

export const reducers = combineReducers({
    products: productsReducer,
    product: productReducer,
    user: userReducer,
    loadingBar: loadingBarReducer
});
