import React from "react";
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push("/products"));
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props
      .login({ username: "Brooks Spencer LLD", password: "password" })
      .then(() => this.props.history.push("/products"));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign In!</h2>
        <form>
          <label>username</label>
          <input type="text" value={this.username} onChange={this.handleInput("username")} />
          <br />
          <label>password</label>
          <input type="password" value={this.password} onChange={this.handleInput("password")} />
          <br />
          <button className="growing-button" onClick={this.handleSubmit}>
            sign in
          </button>
          <br />
          or
          <button className="growing-button" onClick={this.handleDemoUser}>
            Log in as Demo User
          </button>
          <Link className="register" to="/signup">
            Register
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
