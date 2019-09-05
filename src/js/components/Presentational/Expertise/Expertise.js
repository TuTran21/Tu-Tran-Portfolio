import React from "react";
import ContentItemSmall from "../ContentItemSmall/ContentItemSmall";

const Expertise = props => {
  const { expertise } = props;
  const sectionTitle = "Expertise";
  return (
    <section
      id="expertise"
      className="expertise-wrapper section-wrapper gray-bg"
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
          {expertise.map(expertise => (
            <ContentItemSmall
              key={expertise.title}
              title={expertise.title}
              extra={expertise.extra}
            ></ContentItemSmall>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
