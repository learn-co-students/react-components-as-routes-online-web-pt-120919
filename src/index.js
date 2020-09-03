import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Navbar from "./Navbar";
import SignUp from "./signup";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>,
  document.getElementById("root")
);
