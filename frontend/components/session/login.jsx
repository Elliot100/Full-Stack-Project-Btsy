import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push("/chirps"));
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
          <button onClick={this.handleSubmit}>log in</button>
          <br/>or

        </form>
      </div>
    );
  }
}

export default Login;
