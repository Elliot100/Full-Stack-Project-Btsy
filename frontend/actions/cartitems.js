import { getCartitems, deleteCartitem } from "../utils/cartitems";

export const RECEIVE_CARTITEMS = "RECEIVE_CARTITEMS";

const receiveCartitems = (cartitems) => ({
  type: RECEIVE_CARTITEMS,
  cartitems,
});

export const fetchCartitems = () => (dispatch) => getCartitems()
.then((cartitems) => dispatch(receiveCartitems(cartitems)));

// export const addToCart = (id) => (dispatch) =>
//   postCartitem(id).then((product) => dispatch(receiveSingleProduct(product)));

// export const deleteFromCart = (id) => (dispatch) =>
//   deleteCartitem(id).then(getCartitems()
// .then((cartitems) => {
//   dispatch(receiveCartitems(cartitems))})
// );

export const deleteFromCart = (id) => (dispatch) =>
  deleteCartitem(id)
  .then(getCartitems)
  .then((cartitems) => {
      dispatch(receiveCartitems(cartitems));
});
