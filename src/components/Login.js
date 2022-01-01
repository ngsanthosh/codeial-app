import React, { Component, createRef } from "react";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { login, clearerror } from "../actions/auth";

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
  componentDidMount() {
    document.title = "Codeial - Login"
  }
  componentWillUnmount() {
    this.props.dispatch(clearerror())
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
    const { error, inprogress, isloggedin } = this.props.auth;
    console.log(this.props.location);
    const { from } = this.props.location.state || { from: { pathname: "/" } }

    // console.log(error)
    if (isloggedin) {
      return <Redirect to={from} />
    }
    return (
      <div>

        <form className="login-form">
          <span className="login-signup-header">Log In</span>
          {error && <div className="alert error-dailog">{error}</div>}
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
            {/* {console.log(inprogress)} */}
            {inprogress ? (
              <button className="no-cursor" onClick={this.clickDone} disabled={inprogress}>
                Logging in...
              </button>
            ) : (
              <button onClick={this.clickDone}>Log In</button>
            )}
          </div>
          <div className="field">
            <center><h3>New user? <Link to="/signup">Register </Link> </h3></center>
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
