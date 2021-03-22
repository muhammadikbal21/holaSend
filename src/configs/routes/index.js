import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { ADMIN, STAFF } from "../constants/roles/roleConstant";

const Routes = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [role, setRole] = useState(localStorage.getItem("role"))

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" render={() => (
          (role == ADMIN || role == STAFF) && token ?
            <Dashboard /> : <Redirect to="/login" />
        )} />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
