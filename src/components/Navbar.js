import React, { Component } from "react";
import { Link } from "react-router-dom";

// import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class Navbar extends Component {
  logout = () =>{
    localStorage.removeItem('token')
    this.props.dispatch(logout())
  }
  render() {
    const { isloggedin, user } = this.props.auth;
    console.log(isloggedin)
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <Link to="/">
              <img
                src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            {isloggedin && (
              <div className="user">
                <Link to="/settings">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                  id="user-dp"
                />
                </Link>
                <span>{user.name}</span>
              </div>
            )}

            <div className="nav-links">
              <ul>
                {!isloggedin && (
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                )}
                {isloggedin && (
                  <li onClick={this.logout}>
                    Log out
                  </li>
                )}

                {!isloggedin && (
                  <li>
                    <Link to="/signup">Register </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStatetoProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStatetoProps)(Navbar);
