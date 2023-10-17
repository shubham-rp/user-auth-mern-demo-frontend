import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<div>Home</div>}></Route>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
