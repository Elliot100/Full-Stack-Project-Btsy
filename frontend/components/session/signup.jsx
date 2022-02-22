import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type) {
    //returning a callback because function being invoked in render()
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    // redirect after sucessfully create user
    e.preventDefault();
    this.props.createNewUser(this.state).then(() => this.props.history.push("/products"));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form>
          <label>
            username:
            <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
          </label>
          <br />
          <label>
            email:
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
          </label>
          <br />
          <label>
            password:
            <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
          </label>
          <br />

          <button className="growing-button" onClick={this.handleSubmit}>sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
