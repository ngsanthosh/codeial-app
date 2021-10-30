import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { CreatePost } from "./";
import { addlike, commentkaro, fetchPosts } from "../actions/posts";
import Wrongpath from "./Wrongpath.jsx";
// import { createComment } from "../actions/posts";

class Postlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      likes: 0,
    };
  }
  isPostLikedByUser = (post) => {
    const {
      auth: { user },
    } = this.props.state;
    let boolea = post.likes.includes(user._id);
    if (boolea) {
      return true;
    }
    return false;
  };

  // componentDidUpdate(){
  //   this.props.dispatch(fetchPosts())
  // }
  // allOver = () => {
  //   console.log("workinggggg");
  //   if (this.state.comment === null) {
  //     this.props.dispatch(fetchPosts());
  //   }
  // };
  handleAddComment = (e, post) => {
    const { isloggedin } = this.props.state.auth;
    console.log(isloggedin);
    if (isloggedin) {
      const { comment } = this.state;
      if (e.key === "Enter") {
        console.log("Here we are");
        this.props.dispatch(commentkaro(comment, post._id));

        // clear comment
        this.setState({
          comment: null,
          // likes:0
        });
        // nothing=""
        // if (comment === null) {
        //   this.props.dispatch(fetchPosts());
        // }
        // this.allOver();
      }
    } else {
      console.log("Whatsoever!!!");
    }
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
    // console.log(this.state.comment);
  };

  handlelike = (e, post) => {
    let {likes}=this.state
    this.setState({likes:1});
    // const isliked = this.isPostLikedByUser(post);
    // if (isliked) {
    //   this.setState({ isliked: true });
    //   // this.forceUpdate();
    // }
    
    const {
      auth: { user },
    } = this.props.state;
    this.props.dispatch(addlike(post._id, "Post", user._id));
  };

  render() {
    // const nothing='';
    const { posts } = this.props;
    const { comment, likes } = this.state;
    const isliked = this.state.isliked;
    const {
      auth: { isloggedin },
    } = this.props.state;
    if (posts.length === 0) {
      return <h2 className="login-form">Loading...</h2>;
    }
    console.log("Likes count:",this.state.likes);
    return (
      <div className="posts-list">
        {isloggedin && <CreatePost />}
        {posts.map((post) => (
          // isPostLikedByUser = post.likes.includes(user._id)
          // {(post)=this.isPostLikedByUser(post)}
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              {/* {nothing="hello"} */}
              <div className="post-avatar">
                <Link to={`/user/${post.user._id}`}>
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-pic"
                  />
                </Link>
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              {/* const isliked = this.isPostLikedByUser(post); */}
              <div className="post-content">{post.content}</div>
              <div><p></p></div>
              

              <div className="post-actions">
                {console.log("isloggedin", isloggedin)}
                {/* {likes==0 ? : } */}
                {isloggedin ? (
                  <div
                    className="post-like"
                    onClick={(e) => this.handlelike(e, post)}
                  >
                    {likes==0 ? (
                      <img
                        src="heart.png"
                        alt="like-post"
                        
                      />
                    ) : (
                      <img
                        src="heart.png"
                        alt="likes-icon"
                        
                      />
                    )}
                    <span>{post.likes.length}</span>
                  </div>
                ) : (
                  <div className="post-like ">
                    {isliked ? (
                      <div className="no-cursor">
                        {/* <span class="tooltiptext">Tooltip text</span> */}
                        <img

                          src="heart-liked.png"
                          alt="like-post"
                          title="Login to like"
                        />
                      </div>
                    ) : (
                      <div className="hello">
                        <img
                        src="heart.png"
                        alt="likes-icon"
                        title="Login to Like"
                      />
                      </div>
                      
                    )}
                    <span>{post.likes.length}</span>
                  </div>
                )}

                {isloggedin && <div className="post-comments-icon">
                  <img
                    src="comment.png"
                    alt="comments-icon"
                    title="Login to Comment"
                  />
                  <span>{post.comments.length}</span>
                </div> }

                
                {!isloggedin && <div className="post-comments-icon hello">
                  <img
                    src="comment.png"
                    alt="comments-icon"
                    title="Login to Comment"
                  />
                  <span>{post.comments.length}</span>
                </div> }

              </div>
              <div className="post-comment-box">
                {isloggedin && (
                  <input
                    placeholder="Start typing a comment"
                    onChange={this.handleChange}
                    onKeyPress={(e) => this.handleAddComment(e, post)}
                    // value={nothing}
                  />
                )}
              </div>

              <div className="post-comments-list">
                {post.comments.map((comment) => (
                  <div className="post-comment-item">
                    <div className="post-comment-header">
                      <span className="post-comment-author">
                        {comment.user.name}
                      </span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">
                        {comment.likes.length} likes
                      </span>
                    </div>

                    <div className="post-comment-content">
                      {comment.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// Postlist.propTypes = {
//   posts: propTypes.array.isRequired,
// };

const mapStatetoProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStatetoProps)(Postlist);
