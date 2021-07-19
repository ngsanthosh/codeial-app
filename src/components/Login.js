import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.a = createRef();
    // this.b = createRef();
    this.state = {
      username: "",
      password: "",
    };
  }
  // componentWillUnmount() {
  //   let { error } = this.props.auth;
  //   error = null;
  // }
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

    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(login(username, password));
    }
    console.log(this.state);
  };
  render() {
    const { error, inprogress } = this.props.auth;
    return (
      <div>
        <form className="login-form">
          {error && <div className="alert error-dailog">{error}</div>}
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
            {inprogress ? (
              <button onClick={this.clickDone} disabled={inprogress}>
                Logging in...
              </button>
            ) : (
              <button onClick={this.clickDone}>Log In</button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStatetoProps)(Login);
