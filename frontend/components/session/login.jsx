import React from "react";
import { Link } from 'react-router-dom';
import FlashMessage from "react-flash-message";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showMessage: false,
      demoUsername: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  componentDidMount() {
    this.props.showUser(1)
    .then((user) => {
      this.setState({demoUsername: user.username});
    })
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ showMessage: false });
    if (this.state.username && this.state.password) {
      this.props.login(this.state).then(() => this.props.history.push("/products"));
    } else {
      this.setState({ showMessage: true });
    }
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props
      .login({ username: this.state.demoUsername, password: "password" })
      .then(() => this.props.history.push("/products"));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign In!</h2>
        <form className="message-container">
          <label>username</label>
          <input type="text" value={this.username} onChange={this.handleInput("username")} />
          <br />
          <label>password</label>
          <input type="password" value={this.password} onChange={this.handleInput("password")} />
          <br />
          <button className="growing-button" onClick={this.handleSubmit}>
            sign in
          </button>
          or
          <button className="growing-button" onClick={this.handleDemoUser}>
            Log in as Demo User
          </button>
          <Link className="register" to="/signup">
            Register
          </Link>
          {this.state.showMessage && (
            <div className="signin-message">
              <FlashMessage duration={5000}>
                <p>please fill out all the fields</p>
              </FlashMessage>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
