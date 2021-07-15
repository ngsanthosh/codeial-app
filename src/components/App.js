import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchPosts } from "../actions/posts";
// import logo from '../logo.svg';
// import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }
  render() {
    let { posts } = this.props;
    console.log("posts", posts);
    return (
      <div>hello</div>
      // <div>
      // </div>
      // {<div>hii</div>}
    );
  }
}

function mapStatetoProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStatetoProps)(App);
