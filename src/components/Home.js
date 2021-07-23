import React, { Component } from "react";
import { Postlist } from "./";
import FriendsList from "./Friendslist";

export default class Home extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.isloggedin && <FriendsList friends={this.props.friends} />}
        <Postlist posts={this.props.posts} />
        {/* <div style={{textAlign=center}}>Made with ♥ by Santhosh</div> */}
      </div>
    );
  }
}
