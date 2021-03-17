import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateTask from "./Content/CreateTask/index";
import Content from "./Content/index";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Router>
        <Switch>
          <Route path="/dashboard/create-task" component={CreateTask} exact />
          <Route path="/dashboard" component={Content} exact/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default Dashboard;
