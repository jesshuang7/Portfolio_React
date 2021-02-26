import './App.css';
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/protfolio";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router basename="/">
      <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
