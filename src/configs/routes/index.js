import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../pages";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
