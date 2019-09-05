import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

const ProgressItem = props => {
  const { skillTitle, skillProgress } = props;
  return (
    <div className="progress-item">
      <span className="progress-title">{skillTitle}</span>

      <div className="progress">
        <ProgressBar valuenow={skillProgress}></ProgressBar>
        <span className="progress-percent">{skillProgress} %</span>
      </div>
    </div>
  );
};

export default ProgressItem;
