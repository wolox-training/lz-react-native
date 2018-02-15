import React, { Component } from "react";
import Profile from "./layout";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/accounts/actions";

class ProfileContainer extends Component {
  state = {
    emailError: null,
    passwordError: null,
    redirect: false
  };

  componentWillMount() {
    const userId = this.props.match.params.id;
    this.props.dispatch(getUserInfo(userId));
    // this.props.dispatch(getWishlist(userId));
    // this.props.dispatch(getComments(userId));
  }

  componentWillUnmount() {
    // this.props.dispatch(resetGalleryView());
  }

  render() {
    debugger;
    console.log(this.props.wishlist);
    return (
      <Profile
        loading={this.props.loading}
        rents={this.props.rents}
        wishList={this.props.wishlist}
        comments={this.props.comments}
      />
    );
  }
}

const mapStateToProps = store => ({
  loading: store.account.loading,
  rents: store.account.rents,
  wishlist: store.account.wishlist,
  comments: store.account.comments
});

export default connect(mapStateToProps)(ProfileContainer);
