import { RECEIVE_PRODUCTS, RECEIVE_SINGLE_PRODUCT } from "../actions/products";

export default (state = {}, action) => {
  Object.freeze(state);
  const products = {};
  // console.log("asf", action)
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      action.products.forEach((product) => {
        products[product.id] = product;
      });
      return products;
    case RECEIVE_SINGLE_PRODUCT:
      return Object.assign({}, state, { [action.product.id]: action.product });
    default:
      return state;
  }
};
