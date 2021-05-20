import React from "react";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Card />
    </div>
  );
}

export default App;
