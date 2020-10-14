import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./static/App.css";
import "./static/Meal.css";
import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Second from "./components/Second";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Sapper from "./components/Sapper";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/breakfast" component={Breakfast} />
        <Route exact path="/second" component={Second} />
        <Route exact path="/lunch" component={Lunch} />
        <Route exact path="/dinner" component={Dinner} />
        <Route exact path="/sapper" component={Sapper} />
      </Switch>
    </Router>
  );
}

export default App;
