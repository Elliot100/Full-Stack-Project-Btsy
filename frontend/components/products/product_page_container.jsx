import React from "react";
import ProductPage from "./product_page";
import { fetchSingleProduct } from "../../actions/products";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.entities.products).map((key) => state.entities.products[key]),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const {location} = ownProps; 
  return {
  fetchSingleProduct: () => dispatch(fetchSingleProduct(ownProps.match.params.id)),
}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
