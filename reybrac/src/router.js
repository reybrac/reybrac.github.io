import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Homepage />
          </Route>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
