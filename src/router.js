import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={withRouter(Homepage)} />

          <Route exact path="/portfolio" component={withRouter(Portfolio)} />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
