import { RECEIVE_PRODUCTS } from "../actions/products";

export default (state = {}, action) => {
  Object.freeze(state);
  const products = {};
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      action.products.forEach((product) => {
        products[product.id] = product;
      });
      return products;
    // case RECEIVE_SINGLE_CHIRP:
    //   return Object.assign({}, state, { [action.chirp.id]: action.chirp });
    default:
      return state;
  }
};
