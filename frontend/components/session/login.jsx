import React from "react";

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
    this.props.login({ username: "Alton Stiedemann", password: "password" })
      .then(() => this.props.history.push("/products"));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>
            username:
            <input type="text" value={this.username} onChange={this.handleInput("username")} />
          </label>
          <br />
          <label>
            password:
            <input type="password" value={this.password} onChange={this.handleInput("password")} />
          </label>
          <br />
          <button className="growing-button" onClick={this.handleSubmit}>
            log in
          </button>
          <br />
          or
          <button className="growing-button" onClick={this.handleDemoUser}>
            Log in as Demo User
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
