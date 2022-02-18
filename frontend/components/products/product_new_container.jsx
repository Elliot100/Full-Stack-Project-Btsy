import ProductNew from "./product_new";
import { createProduct } from "../../actions/products";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  // return {
  //   products: Object.keys(state.entities.products).map((key) => state.entities.products[key]),
  // };
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (product) => dispatch(createProduct(product))
  // fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(null, mapDispatchToProps)(ProductNew);
