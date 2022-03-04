import React from "react";
import FlashMessage from "react-flash-message";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      showMessage: false,
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
    this.setState({ showMessage: false });
    if (this.state.username && this.state.password) {
      this.props.createNewUser(this.state).then(() => this.props.history.push("/products"));
    } else {
      this.setState({ showMessage: true });
    }
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form className="message-container">
          <label>username</label>
          <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
          <br />
          <label>email</label>
          <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
          <br />
          <label>password</label>
          <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
          <br />
          <button className="growing-button" onClick={this.handleSubmit}>
            Sign up
          </button>
          {this.state.showMessage && (
            <div className="signup-message">
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

export default SignUp;
