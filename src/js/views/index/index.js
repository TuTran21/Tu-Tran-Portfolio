import React from "react";
import ProfileTab from "../../components/Containers/ProfileTab/ProfileTab";

import { Container } from "react-bootstrap";
import MainTab from "../../components/Containers/MainTab/MainTab";

function Index(props) {
  // TEXT SETUPS
  return (
    <React.Fragment>
      <Container className="columns-block">
        <div class="left-col-block blocks">
          <ProfileTab></ProfileTab>
        </div>

        <div class="right-col-block blocks">
          <MainTab></MainTab>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Index;
