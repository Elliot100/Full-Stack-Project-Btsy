import { getCartitems } from "../utils/cartitems";

export const RECEIVE_CARTITEMS = "RECEIVE_CARTITEMS";

const receiveCartitems = (cartitems) => ({
  type: RECEIVE_CARTITEMS,
  cartitems,
});

export const fetchCartitems = user_id => (dispatch) => getCartitems(user_id)
.then((cartitems) => dispatch(receiveCartitems(cartitems)));