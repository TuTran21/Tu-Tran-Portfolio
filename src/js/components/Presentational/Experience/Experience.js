import React from "react";
import ContentItem from "../ContentItem/ContentItem";

const Experience = props => {
  const { experience } = props;
  const sectionTitle = "Work Experience";
  return (
    <section class="section-wrapper section-experience gray-bg">
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
            {experience.map(experience => (
              <ContentItem
                key={experience.project}
                time={experience.time}
                title={experience.project}
                subtitle={experience.role}
                extra={experience.extra}
              ></ContentItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
