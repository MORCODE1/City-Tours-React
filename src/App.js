import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.scss";
import TourList from "./components/TourList/index.js";

class App extends Component{
  render() {
    return(
    <main>
      <Navbar/>
      <TourList/>
    </main>
    ); 
  }
}

export default App;
