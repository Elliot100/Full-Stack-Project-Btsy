import React from "react";
import ProductPage from "./product_page";
import { fetchSingleProduct, addToCart, deleteFromCart } from "../../actions/products";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    product: state.entities.products[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  fetchSingleProduct: () => dispatch(fetchSingleProduct(ownProps.match.params.id)),
  addToCart: id => dispatch(addToCart(id)),
  deleteFromCart: id => dispatch(deleteFromCart(id))
}};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
