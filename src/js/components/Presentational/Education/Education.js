import React from "react";
import ContentItem from "../ContentItem/ContentItem";

const Education = props => {
  const { education } = props;
  const sectionTitle = "Education";
  return (
    <section
      id="education"
      className="section-wrapper wow fadeInUp section-education"
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
            {education.map(education => (
              <ContentItem
                key={education.project}
                time={education.time}
                title={education.project}
                subtitle={education.role}
                extra={education.extra}
              ></ContentItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
