import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Pages from "./route";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Pages />
        <Footer />
      </Router>
    );
  }
}

export default App;
