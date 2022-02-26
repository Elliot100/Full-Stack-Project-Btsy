import { connect } from "react-redux";
import { login } from "../../actions/session";
import { showUser } from "../../utils/session";
import Login from "./login";

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  showUser: (id) => showUser(id),
});

export default connect(null, mapDispatchToProps)(Login);
