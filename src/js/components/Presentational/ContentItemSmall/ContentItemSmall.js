import React from "react";

const ContentItemSmall = props => {
  const { title, extra } = props;
  return (
    <div className="col-md-6">
      <div className="expertise-item">
        <h3>{title}</h3>

        <p>{extra}</p>
      </div>
    </div>
  );
};

export default ContentItemSmall;
