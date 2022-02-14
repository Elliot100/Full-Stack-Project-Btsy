import { RECEIVE_CARTITEMS } from "../actions/cartitems";

export default (state = [], action) => {
  Object.freeze(state);
  const cartitems = [];
  switch (action.type) {
    case RECEIVE_CARTITEMS:
        // console.log('asdf',action.cartitems);
        //   action.cartitems.forEach((cartitem, idx) => {
        //     cartitems[idx] = cartitem;
        //   });
        //   return cartitems;
        return [...action.cartitems];
        // return action.cartitems;
    // case RECEIVE_SINGLE_PRODUCT:
    //   return Object.assign({}, state, { [action.product.id]: action.product });
    default:
      return state;
  }
};