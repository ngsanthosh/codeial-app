import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <form className="login-form">
          <span className="login-signup-header">Register</span>
          <div className="field">
            <input type="name" placeholder="Name" required />
          </div>
          <div className="field">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="field">
            <button>Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}
