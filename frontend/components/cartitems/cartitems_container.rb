import { connect } from "react-redux";
import CartitemIndex from './cartitem_index';
import { fetchCartitems } from "../../actions/cartitems.js"

const mapStateToProps = (state) => {
  return {
  cartitems: Object.keys(state.entities.cartitems).map((key) => state.entities.cartitems[key]),
  }
};

const mapDispatchToProps = (dispatch) => (
  { fetchCartitems: () => dispatch(fetchCartitems()),}
);

export default connect(mapStateToProps, mapDispatchToProps)(CartitemIndex);
