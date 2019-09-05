import React from "react";
import ProgressItem from "../ProgressItem/ProgressItem";

const Skills = props => {
  const sectionTitle = "Skills";
  const { skills } = props;

  return (
    <section id="skills" className="section-wrapper skills-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>{sectionTitle}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="progress-wrapper">
              {skills.map(skill => (
                <ProgressItem
                  key={skill.skillTitle}
                  skillTitle={skill.skillTitle}
                  skillProgress={skill.skillProgress}
                ></ProgressItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
