import { connect } from "react-redux";
import Cartitem from './cartitems';

const mapStateToProps = (state) => {
  return {
  products: Object.keys(state.entities.products).map((key) => state.entities.products[key]),
}
};

const mapDispatchToProps = (dispatch) => (
  {fetchProducts: () => dispatch(fetchProducts()),}
);

export default connect(null, null)(Cartitem);
