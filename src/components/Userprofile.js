import React, { Component } from "react";
import { fetchUser } from "../actions/profile";
import { connect } from "react-redux";

class Userprofile extends Component {
  componentDidMount() {
    const { match } = this.props;

    if (match.params.ID) {
      // dispatch an action
      this.props.dispatch(fetchUser(match.params.ID));
    }
  }

  render() {
    // console.log(this.props);
    const { params } = this.props.match;

    console.log("this.props", params);
    const {user, inprogress} = this.props.profile
    // console.log('this.props', match);
    if(inprogress){
      return <h3 className="login-form">Loading...</h3>
    }

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({profile}) => {
  return { profile }
};

export default connect(mapStateToProps)(Userprofile);
