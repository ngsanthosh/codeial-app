import React, { Component, createRef } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    // this.a = createRef();
    // this.b = createRef();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleEmailChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePwdChange = (e) => {
    this.setState({ password: e.target.value });
  };
  clickDone = (e) => {
    e.preventDefault();
    // console.log(this.a.current.value);
    // console.log(this.b.current.value);
    // this.setState({ username: this.a });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form className="login-form">
          <span className="login-signup-header">Log In</span>
          <div className="field">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={this.handlePwdChange}
            />
          </div>
          <div className="field">
            <button onClick={this.clickDone}>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}
