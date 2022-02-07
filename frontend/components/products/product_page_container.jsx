import React from "react";
import ProductPage from "./product_page";
import { fetchSingleProduct } from "../../actions/products";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  fetchSingleProduct: () => dispatch(fetchSingleProduct(ownProps.match.params.id)),
}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
