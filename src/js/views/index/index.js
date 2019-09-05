import React from "react";
import ProfileTab from "../../components/Containers/ProfileTab/ProfileTab";

import { Container } from "react-bootstrap";
import MainTab from "../../components/Containers/MainTab/MainTab";
import BackToTop from "../../components/Presentational/BackToTop/BackToTop";

function Index(props) {
  // TEXT SETUPS
  return (
    <React.Fragment>
      <BackToTop></BackToTop>
      <Container className="columns-block">
        <div className="left-col-block blocks">
          <ProfileTab></ProfileTab>
        </div>

        <div className="right-col-block blocks">
          <MainTab></MainTab>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Index;
