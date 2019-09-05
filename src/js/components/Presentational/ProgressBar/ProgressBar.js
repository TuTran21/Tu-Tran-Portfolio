import React from "react";

const ProgressBar = props => {
  const { valuenow } = props;
  console.log(valuenow);
  const valuemax = 100;
  const valuemin = 0;
  return (
    <div
      class="progress-bar"
      role="progressbar"
      aria-valuenow={valuenow}
      aria-valuemin={valuemin}
      aria-valuemax={valuemax}
    ></div>
  );
};

export default ProgressBar;
