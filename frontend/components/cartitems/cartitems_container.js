import CartitemIndex from "./cartitem_index";
import { fetchCartitems, deleteFromCart } from "../../actions/cartitems";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
  // cartitems: Object.keys(state.entities.cartitems).map((key) => state.entities.cartitems[key]),
  cartitems: state.entities.cartitems
  }
};

const mapDispatchToProps = (dispatch) => ({ 
  fetchCartitems: () => dispatch(fetchCartitems()),
  deleteFromCart: (id) => dispatch(deleteFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartitemIndex);

