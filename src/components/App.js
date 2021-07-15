import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { fetchPosts } from "../actions/posts";
import { Postlist, Navbar, Home, Wrongpath,Login , Signup} from "./";
import propTypes from "prop-types";

// import logo from '../logo.svg';
// import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
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
    let { posts } = this.props;
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
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Wrongpath} />
          </Switch>
        
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
  };
}

export default connect(mapStatetoProps)(App);
