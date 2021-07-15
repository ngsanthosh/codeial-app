import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React, { Component } from "react";
import { fetchPosts } from "../actions/posts";
import { Postlist, Navbar } from "./";
import propTypes from "prop-types";
// import logo from '../logo.svg';
// import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const Home = () => {
      return <div>Home component</div>;
    };
    const Login = () => {
      return <div>Login component</div>;
    };
    const Signup = () => {
      return <div>Signup component</div>;
    };
    let { posts } = this.props;
    console.log("posts", posts);
    return (
      <div>
        <Navbar />
        <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </ul>
          {/* <Postlist posts={posts} /> */}
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Router>
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
