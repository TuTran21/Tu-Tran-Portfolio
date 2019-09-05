import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
//Components
//Pages
import Index from "../views/index/index";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Redirect to="/" />
      </Switch>
      {/* FOOTER */}
    </Router>
  );
}

export default App;
