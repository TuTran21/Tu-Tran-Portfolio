import React from "react";

import { connect } from "react-redux";
import ProfileContent from "../../Presentational/ProfileContent/ProfileContent";
import ProfileImg from "../../Presentational/ProfileImg/ProfileImg";

const ProfileTab = props => {
  const { avatarUrl, personalInfo } = props;
  return (
    <React.Fragment>
      <header class="header theiaStickySidebar">
        <ProfileImg avatarUrl={avatarUrl}></ProfileImg>
        <ProfileContent personalInfo={personalInfo}></ProfileContent>
      </header>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    personalInfo: state.personalInfo,
    avatarUrl: state.appResources.avatarUrl
  };
};

export default connect(
  mapStateToProps,
  null
)(ProfileTab);
