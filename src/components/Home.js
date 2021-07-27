import React, { Component } from "react";
import { Postlist } from "./";
import Chat from "./Chat";
import FriendsList from "./Friendslist";

export default class Home extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="home">
      
        <Postlist posts={this.props.posts} />
        {this.props.isloggedin && <FriendsList friends={this.props.friends} />}
        {this.props.isloggedin && <Chat />}
        {/* <Chat /> */}
        {/* <div className="credits">Made with ❤ by Santhosh</div> */}
      </div>
    );
  }
}
