import React from "react";

const ProgressBar = props => {
  const { valuenow } = props;
  const valuemax = 100;
  const valuemin = 0;
  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={valuenow}
      aria-valuemin={valuemin}
      aria-valuemax={valuemax}
    ></div>
  );
};

export default ProgressBar;
