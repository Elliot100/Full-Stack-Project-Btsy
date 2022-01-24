import { getProducts } from '../utils/products';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const fetchProducts = () => dispatch => getProducts()
  .then(products => dispatch(receiveProducts(products)));