import { connect } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import jwtDecode from "jwt-decode";

import { fetchPosts } from "../actions/posts";
import {
  Postlist,
  Navbar,
  Home,
  Wrongpath,
  Login,
  Signup,
  Settings,
  Userprofile,
} from "./";
import propTypes from "prop-types";
import { authenticate } from "../actions/auth";
import { fetchbuddies } from "../actions/friends";

// import logo from '../logo.svg';
// import '../App.css';

// const Settings = () => <div>Settings Page</div>;
const PrivateRoute = ({ path, component: Component, isloggedin }) => {
  // const  = PRprops;
  return (
    <Route
      path={path}
      render={(props) => {
        return isloggedin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem("token");

    if (token) {
      const user = jwtDecode(token);

      console.log(user, "from jwt");
      this.props.dispatch(authenticate(user));

      this.props.dispatch(fetchbuddies());
    }
  }

  render() {
    
    // const Home = () => {
    //   return <Home />;
    // };
    // const Login = () => {

    //   return <div>Login component</div>;
    //   // this.forceUpdate();
    // };
    // const Signup = () => {
    //   return <div>Signup component</div>;
    // };
    let { posts, auth, friends } = this.props;
    console.log("posts", posts);
    return (
      <div>
        
        <Navbar />

        {/* <Postlist posts={posts} /> */}
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => {
              return (
                <Home
                  {...props}
                  posts={posts}
                  friends={friends}
                  isloggedin={auth.isloggedin}
                />
              );
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute
            path="/settings"
            component={Settings}
            isloggedin={auth.isloggedin}
          />
          <PrivateRoute
            path="/user/:ID"
            component={Userprofile}
            isloggedin={auth.isloggedin}
          />
          <Route component={Wrongpath} />
          {/* <Route component={Aboutm} */}
        </Switch>

        <div className="credits">
          Made with ❤ by{" "}
          <a
            href="https://github.com/ngsanthosh"
            target="_blank"
            rel="noreferrer"
            style={{textDecoration:'none'}}
          >
            Santhosh
          </a>{" "}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  posts: propTypes.array.isRequired,
};

function mapStatetoProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
    friends: state.friends,
  };
}

export default connect(mapStatetoProps)(App);
