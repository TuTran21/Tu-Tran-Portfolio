import React from "react";
import ProgressItem from "../ProgressItem/ProgressItem";

const Skills = props => {
  const sectionTitle = "Skills";
  const { skills } = props;
  return (
    <section class="section-wrapper skills-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2>{sectionTitle}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="progress-wrapper">
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
