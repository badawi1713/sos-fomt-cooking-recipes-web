import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/pages/Login";
import Home from "./views/pages/Home";
import "./assets/styles/css/globalStyles.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
