import React from "react";
import ContentItem from "../ContentItem/ContentItem";

const Experience = props => {
  const { experience } = props;
  const sectionTitle = "Work Experience";
  return (
    <section
      id="experience"
      className="section-wrapper wow fadeInUp section-experience gray-bg"
    >
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
