import React from "react";
import ProductPage from "./product_page";
import { fetchProducts } from "../../actions/products";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.entities.products).map((key) => state.entities.products[key]),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
