import React, { Component } from "react";
// import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";

// import Homepage from "./pages/Homepage";
// import Portfolio from "./pages/Portfolio";

class App extends Component {
  state = {
    currentPage: "Homepage",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.state.currentPage === "Homepage" ? (
          <Homepage
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
        ) : this.state.currentPage === "Portfolio" ? (
          <Portfolio />
        ) : this.state.currentPage === "NoMatch" ? (
          <NoMatch />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default App;

// function App() {
//   return(
//      <Router>
//        <div>
//          <Navbar />
//          <Route exact path="/" component={Homepage} />
//          <Route exact path="/portfolio" component={Portfolio} />
//          <Route >
//            <NoMatch />
//          </Route>
//        </div>
//      </Router>>
