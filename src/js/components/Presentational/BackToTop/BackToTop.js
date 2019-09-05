import React from "react";

const BackToTop = props => {
  return (
    <button
      scrollTo="profile"
      className="btn btn-sm btn-primary top-scroll btn-toTop"
    >
      <i class="fa fa-caret-up"></i>
    </button>
  );
};

export default BackToTop;
