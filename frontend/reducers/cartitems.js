import { RECEIVE_CARTITEMS } from "../actions/cartitems";

export default (state = [], action) => {
  Object.freeze(state);
  const cartitems = {};
  switch (action.type) {
    case RECEIVE_CARTITEMS:
        return action.cartitems;
    default:
      return state;
  }
};