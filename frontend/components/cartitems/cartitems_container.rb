import { connect } from "react-redux";
import CartitemIndex from './cartitem_index';
import { fetchCartitems } from "../../actions/cartitems.js"

const mapStateToProps = (state) => {
  return {
  cartitems: Object.keys(state.entities.cartitems).map((key) => state.entities.cartitems[key]),
  }
};

const mapDispatchToProps = (dispatch) => ({ 
  fetchCartitems: () => dispatch(fetchCartitems()),
  deleteFromCart: id => dispatch(deleteFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartitemIndex);
