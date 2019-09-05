import React from "react";
import { connect } from "react-redux";
const ScrollTopbarContainer = props => {
  const { sections } = props;
  return (
    <div className="btn-group scrollTopbar">
      {Object.keys(sections).map(section => (
        <button
          scrollTo={section}
          className="btn btn-primary page-scroll text-uppercase"
        >
          {section}
        </button>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sections: state
  };
};

export default connect(
  mapStateToProps,
  null
)(ScrollTopbarContainer);
