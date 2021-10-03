import React, { Component } from "react";
import { connect } from "react-redux";
import { postKaro } from "../actions/posts";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleOnClick = () => {
    // dispatch action\
    if (this.state.content !== "") {
      this.props.dispatch(postKaro(this.state.content));
    }
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    // const hello="Santohs"
    return (
      <div className="create-post">
        <textarea
          placeholder="Start a post..."
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <div>
          <button id="add-post-btn" onClick={this.handleOnClick}>
            Add Post
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CreatePost);


// const mapStatetoProps = (state) => {
//   return {
//     auth: state.auth,
//     search: state.search,
//   };
// };

// export default connect(mapStatetoProps)(CreatePost);