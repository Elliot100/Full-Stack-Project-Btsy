import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { findProduct } from "../../actions/products";
import { logout } from "../../actions/session";
import { fetchCartitems, updateFromCart, deleteFromCart } from "../../actions/cartitems";

const mapStateToProps = (state) => {
  return {
    cartitems: Object.keys(state.entities.cartitems).map((key) => state.entities.cartitems[key]),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  findProduct: (search) => dispatch(findProduct(search)),
  fetchCartitems: () => dispatch(fetchCartitems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
