import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/pages/Login";
import Home from "./views/pages/Home";
import RecipeList from "./views/pages/RecipeList";
import Setting from "./views/pages/Setting";

import "./assets/styles/css/globalStyles.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipe-list" exact component={RecipeList} />
          <Route path="/setting" exact component={Setting} />

          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
