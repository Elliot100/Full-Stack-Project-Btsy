import CartitemIndex from "./cartitem_index";
import { fetchCartitems, updateFromCart, deleteFromCart } from "../../actions/cartitems";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    cartitems: Object.keys(state.entities.cartitems).map((key) => state.entities.cartitems[key]),
    currentUser: state.session.currentUser,
    // cartitems: state.entities.cartitems
  };
};

const mapDispatchToProps = (dispatch) => ({ 
  fetchCartitems: () => dispatch(fetchCartitems()),
  deleteFromCart: (id) => dispatch(deleteFromCart(id)),
  updateFromCart: (id, qty) => dispatch(updateFromCart(id, qty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartitemIndex);

