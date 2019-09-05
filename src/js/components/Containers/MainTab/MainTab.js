import React from "react";
import Expertise from "../../Presentational/Expertise/Expertise";
import Skills from "../../Presentational/Skills/Skills";

import { connect } from "react-redux";
import Experience from "../../Presentational/Experience/Experience";
const MainTab = props => {
  const { skills, experience } = props;
  return (
    <div class="theiaStickySidebar">
      <Expertise></Expertise>
      <Skills skills={skills}></Skills>
      <Experience experience={experience}></Experience>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    skills: state.skills,
    experience: state.experience
  };
};

export default connect(
  mapStateToProps,
  null
)(MainTab);
