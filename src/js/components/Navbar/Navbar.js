import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";

import history from "../../js/router/history";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false
    };
  }

  render() {
    return (
      <Navbar
        expand="lg"
        sticky="top"
        bg="white"
        variant="dark"
        className="tab"
      >
        <Navbar.Brand>
          <p>TU TRAN</p>
        </Navbar.Brand>

        <Nav className="ml-auto d-flex flex-row">
          <Nav.Item />
          <Nav.Item />
          <Nav.Item />
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
