import { getProducts, getSingleProduct, postProduct, searchProduct } from '../utils/products';
import { postCartitem, deleteCartitem } from '../utils/cartitems';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_SINGLE_PRODUCT = "RECEIVE_SINGLE_PRODUCT";

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product,
});

export const fetchProducts = () => dispatch => getProducts()
  .then(products => dispatch(receiveProducts(products)));

export const fetchSingleProduct = (id) => (dispatch) =>
  getSingleProduct(id).then((product) => dispatch(receiveSingleProduct(product)));

export const addToCart = (id) => (dispatch) => postCartitem(id)
  .then((product) => dispatch(receiveSingleProduct(product)));

export const deleteFromCart = (id) => (dispatch) => deleteCartitem(id)
    .then((product) => dispatch(receiveSingleProduct(product)));

export const createProduct = (product) => (dispatch) =>
  postProduct(product).then((product) => dispatch(receiveSingleProduct(product)));

export const findProduct = (search) => (dispatch) =>
  searchProduct(search).then((products) => dispatch(receiveProducts(products)));
// .then((products) => dispatch(receiveProducts(products)));
