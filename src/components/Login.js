import React, { Component, createRef } from "react";

export default class Login extends Component {
    constructor(props){
        super(props)
        this.a = createRef();
        this.b = createRef();
    }
    clickDone = (e) => {
       e.preventDefault()
       console.log(this.a.current.value);
       console.log(this.b.current.value);
   };
  render() {
    return (
      <div>
        <form className="login-form">
          <span className="login-signup-header">Log In</span>
          <div className="field">
            <input type="email" placeholder="Email" required ref={this.a} />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              required
              ref={this.b}
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
