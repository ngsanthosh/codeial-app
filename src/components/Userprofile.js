import React, { Component } from "react";
import { fetchUser } from "../actions/profile";
import { connect } from "react-redux";
import { APIurls } from "../pleasehelpme/urls";
import { getbearertoken } from "../pleasehelpme/utils";
import { addbuddy, fetchbuddies, removebuddy } from "../actions/friends";

class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
      removeFR: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;

    if (match.params.ID) {
      // dispatch an action
      this.props.dispatch(fetchUser(match.params.ID));
    }
  }

  handleRemoveFr = async () => {
    const userid = this.props.match.params.ID;
    const url = APIurls.removefriend(userid);
    const body = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${getbearertoken()} `,
      },
      // body: getFormBody({ name, password, confirm_password:confirmpassword, id }),
    };
    const resp = await fetch(url, body);
    const data = await resp.json();

    if (data.success) {
      this.props.dispatch(removebuddy());
      this.props.dispatch(fetchbuddies());
      this.setState({ removeFR: true });
      return;
    } else {
      this.setState({ error: data.message });
      return <div>{data.message}</div>;
    }
  };

  handleAddFr = async () => {
    const userid = this.props.match.params.ID;
    const url = APIurls.addfriend(userid);
    const body = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${getbearertoken()} `,
      },
      // body: getFormBody({ name, password, confirm_password:confirmpassword, id }),
    };
    const resp = await fetch(url, body);
    const data = await resp.json();

    if (data.success) {
      this.setState({ success: true });
      this.props.dispatch(addbuddy(data.data.friendship));
      return;
    } else {
      this.setState({ error: data.message });
      return <div>{data.message}</div>;
    }
  };
  render() {
    const { success, error, removeFR } = this.state;
    // console.log(this.props);
    const { params } = this.props.match;

    console.log("this.props", params);
    const { user, inprogress } = this.props.profile;
    // console.log('this.props', match);
    if (inprogress) {
      return <h3 className="login-form">Loading...</h3>;
    }

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>
        {success && (
          <div className="alert success-dailog">Friend Added Successfully</div>
        )}
        {removeFR && (
          <div className="alert success-dailog">Friend Removed Successfully</div>
        )}
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn" onClick={this.handleAddFr}>
            Add Friend
          </button>
          <button className="button save-btn" onClick={this.handleRemoveFr}>
            Remove Friend
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  return { profile };
};

export default connect(mapStateToProps)(Userprofile);
