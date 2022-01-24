import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import SignUp from "./signup";

// this component does not depend on state

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchToProps)(SignUp);
