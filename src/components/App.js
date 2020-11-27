import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "../static/main.css";

import store from "../store";
import Home from "./Home";
import Meal from "./Meal";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meal/:id" component={Meal} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
