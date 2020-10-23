import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./static/App.css";
import "./static/Meal.css";
import Home from "./components/Home";
import Meal from "./components/Meal";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meal/:id" component={Meal} />
      </Switch>
    </Router>
  );
}

export default App;
