import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { findProduct } from "../../actions/products";
import { logout } from "../../actions/session";
import { fetchCartitems } from "../../actions/cartitems";

// Comment this back in after you have built the login functionality



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
