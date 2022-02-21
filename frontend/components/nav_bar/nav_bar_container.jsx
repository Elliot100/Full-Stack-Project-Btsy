import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { findProduct } from "../../actions/products";
import { logout } from "../../actions/session";

// Comment this back in after you have built the login functionality



const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  findProduct: search => dispatch(findProduct(search)),
});

// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
