import React, { Component } from "react";
import "./tools/jss/index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Signup from "./Components/signup";
import Login from "./Components/login";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" strict element={<Home />} />
        <Route path="/signup" strict element={<Signup />} />
        <Route path="/login" strict element={<Login />} />
      </Routes>
    );
  }
}

export default App;
