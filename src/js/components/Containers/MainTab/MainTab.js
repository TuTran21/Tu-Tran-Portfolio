import React from "react";
import Expertise from "../../Presentational/Expertise/Expertise";
import Skills from "../../Presentational/Skills/Skills";

import { connect } from "react-redux";
import Experience from "../../Presentational/Experience/Experience";
import Education from "../../Presentational/Education/Education";
const MainTab = props => {
  const { skills, experience, education, expertise } = props;
  return (
    <div className="theiaStickySidebar">
      <Expertise expertise={expertise}></Expertise>
      <Skills skills={skills}></Skills>
      <Experience experience={experience}></Experience>
      <Education education={education}></Education>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    skills: state.skills,
    experience: state.experience,
    education: state.education,
    expertise: state.expertise
  };
};

export default connect(
  mapStateToProps,
  null
)(MainTab);
