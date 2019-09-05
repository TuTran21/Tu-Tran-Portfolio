import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
//Components
import WOW from "wowjs";
//Pages
import Index from "../views/index/index";

function App() {
  new WOW.WOW().init();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Index} />
        <Redirect to="/" />
      </Switch>
      {/* FOOTER */}
    </Router>
  );
}

export default App;
