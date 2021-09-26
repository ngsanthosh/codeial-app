import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup, clearerror, startsignup } from "../actions/auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      password: " ",
      confirmPassword: " ",
    };
  }
  componentDidMount(){
    document.title="Codeial - Signup"
  }
  componentWillUnmount() {
    this.props.dispatch(clearerror());
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = this.state;

    if (email && password && confirmPassword && name) {
      // this.props.dispatch(startsignup());
      this.props.dispatch(signup(email, name, password, confirmPassword));
    }
  };

  render() {
    const { inprogress, isloggedin, message } = this.props.auth;
    // console.log(message);
    if (isloggedin) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header"> Signup</span>
        {message && <div className="alert error-dailog">{message}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange("name", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm password"
            type="password"
            required
            onChange={(e) => this.handleInputChange("password", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) =>
              this.handleInputChange("confirmPassword", e.target.value)
            }
          />
        </div>
        <div className="field">
          {inprogress ? (
            <button className="no-cursor" onClick={this.onFormSubmit} disabled={inprogress}>
              Signing up...
            </button>
          ) : (
            <button onClick={this.onFormSubmit}>Signup</button>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
