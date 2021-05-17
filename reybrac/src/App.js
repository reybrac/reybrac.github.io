import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Homepage />
      <Card />
    </div>
  );
}

export default App;
