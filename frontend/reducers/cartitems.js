import { RECEIVE_CARTITEMS } from "../actions/cartitems";

export default (state = {}, action) => {
  Object.freeze(state);
  const cartitems = {};
  switch (action.type) {
    case RECEIVE_CARTITEMS:
      console.log("asdf",action.cartitems );
      action.cartitems.forEach((cartitem) => {
        cartitems[cartitem.id] = cartitem;
      });
      return cartitems;
    // case RECEIVE_SINGLE_PRODUCT:
    //   return Object.assign({}, state, { [action.product.id]: action.product });
    default:
      return state;
  }
};