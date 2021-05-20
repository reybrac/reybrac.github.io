import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={withRouter(Homepage)} />

        <Route exact path="portfolio" component={withRouter(Portfolio)} />

        <Route>
          <NoMatch />
        </Route>
      </Switch>

      <Card />
    </Router>
  );
}

export default AppRouter;
