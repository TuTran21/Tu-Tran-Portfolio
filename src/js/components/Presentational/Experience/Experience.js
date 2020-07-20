import React from "react";
import ContentItem from "../ContentItem/ContentItem";

const Experience = (props) => {
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
            <div className="section-title">
              <h5>COMPANIES: </h5>
            </div>
            {experience.companies.map((company) => (
              <ContentItem
                key={company.project}
                time={company.time}
                title={company.project}
                subtitle={company.role}
                extra={company.extra}
              ></ContentItem>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h5>PROJECTS: </h5>
            </div>
            {experience.projects.map((project) => (
              <ContentItem
                key={project.project}
                time={project.time}
                title={project.project}
                subtitle={project.role}
                extra={project.extra}
              ></ContentItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
