import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpaceHistory from "../pages/SpaceHistory";
import SpacePayload from "../pages/SpacePayload";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SpaceHistory />
        </Route>
        <Route exact path="/payloads">
          <SpacePayload />
        </Route>
      </Switch>
    </Router>
  );
}
