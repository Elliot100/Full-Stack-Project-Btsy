import { combineReducers } from "redux";
import productsReducer from "./products";
import cartitemsReducer from "./cartitems";

export default combineReducers({
  products: productsReducer,
  cartitems: cartitemsReducer
});
