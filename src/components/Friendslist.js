import React from "react";
import { connect } from "react-redux";
import { FriendsListItem } from "./";

const FriendsList = (props) => {
  const { posts } = props.state;
  if(posts.length===0){
    return <div></div>
  }
  return (
    // {posts.length!==0 ? :}
    // <div className="login-signup-header">

    <div className="friends-list">
      <div className="header">Friends</div>

      {props.friends && props.friends.length === 0 && (
        <div className="no-friends">No friends found!</div>
      )}

      {props.friends &&
        props.friends.map((friend) => (
          <FriendsListItem friend={friend.to_user} key={friend._id} />
        ))}
    </div>

    // </div>
  );
};

// export default FriendsList;

const mapStatetoProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStatetoProps)(FriendsList);