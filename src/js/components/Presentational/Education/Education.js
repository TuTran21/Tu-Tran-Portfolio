import React from "react";

const Education = props => {
  return (
    <section class="section-wrapper section-education">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2>Education</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
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
