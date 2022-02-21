import { connect } from "react-redux";
import WelcomeBar from "./welcome_bar";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps, null)(WelcomeBar);
