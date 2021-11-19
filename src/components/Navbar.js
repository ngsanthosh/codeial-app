import React, { Component } from "react";
import { Link } from "react-router-dom";

// import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { fetchuserfromsearch } from "../actions/search";
import { fetchUser } from "../actions/profile";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchttext: "" };
  }
  logout = () => {
    document.title="Codeial"
    localStorage.removeItem("token");
    this.props.dispatch(logout());
  };

  handleSearch = (e) => {
    const searchtext = e.target.value;
    this.setState({ searchttext: e.target.value });
    console.log("from state", this.state.searchttext);
    this.props.dispatch(fetchuserfromsearch(searchtext));
  };

  render() {
    const { searchttext } = this.state;
    const { isloggedin, user } = this.props.auth;
    const { results } = this.props.search;
    console.log(results);
    console.log(isloggedin);
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
            {console.log(results.length)}
            {isloggedin ? (
              <input placeholder="Search" onChange={this.handleSearch} />
            ) : (
              <input className="no-cursor"
                placeholder="Please Login to Search, Like, Comment, Post feed and more.."
                // value="Please Login to search..."
                disabled
              />
            )}

            {searchttext.length > 0 && (
              <div className="search-results">
                {results.map((user) => (
                  <ul>
                    <Link to={`/user/${user._id}`}>
                      <li className="search-results-row">
                        <img
                          src="user.png"
                          alt="user-dp"
                        />
                        <span>{user.name}</span>
                      </li>
                    </Link>
                  </ul>
                ))}
              </div>
            )}
          </div>
          <div className="right-nav">
            {isloggedin && (
              <div className="user">
                <Link to="/settings">
                  <img
                    src="user.png"
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
                {isloggedin && <li onClick={this.logout}>Log out</li>}

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




const mapStatetoProps = (state) => {
  return {
    auth: state.auth,
    search: state.search,
  };
};

export default connect(mapStatetoProps)(Navbar);
