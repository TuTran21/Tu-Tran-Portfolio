import React from "react";

import { connect } from "react-redux";
import ProfileContent from "../../Presentational/ProfileContent/ProfileContent";
import ProfileImg from "../../Presentational/ProfileImg/ProfileImg";

const ProfileTab = props => {
  const { avatarUrl, profile } = props;
  return (
    <React.Fragment>
      <header id="profile" className="header theiaStickySidebar">
        <ProfileImg avatarUrl={avatarUrl}></ProfileImg>
        <ProfileContent profile={profile}></ProfileContent>
      </header>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    profile: state.profile,
    avatarUrl: state.profile.avatarUrl
  };
};

export default connect(
  mapStateToProps,
  null
)(ProfileTab);
