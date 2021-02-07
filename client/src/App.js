import './App.css';
import Header from "./components/header/header";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/protfolio";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/contact.html" component={Contact} />
      <Route path="/portfolio.html" component={Portfolio} />
      <Route path="/index.html" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
