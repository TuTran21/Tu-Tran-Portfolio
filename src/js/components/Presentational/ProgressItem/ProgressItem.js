import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

const ProgressItem = props => {
  const { skillTitle, skillProgress } = props;
  return (
    <div class="progress-item">
      <span class="progress-title">{skillTitle}</span>

      <div class="progress">
        <ProgressBar valuenow={skillProgress}></ProgressBar>
        <span class="progress-percent">{skillProgress} %</span>
      </div>
    </div>
  );
};

export default ProgressItem;
