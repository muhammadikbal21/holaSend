import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDestinations from "./Content/CreateDestinations";
import CreateTask from "./Content/CreateTask/index";
import Content from "./Content/index";
import TasksList from "./Content/TasksList";
import UserManagements from "./Content/UserManagements";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Route path="/dashboard/create-task" component={CreateTask} exact />
      <Route path="/dashboard/tasks-list" component={TasksList} exact />
      <Route path="/dashboard/create-destinations" component={CreateDestinations} exact />
      <Route path="/dashboard/user-managements" component={UserManagements} exact />
      <Route path="/dashboard" component={Content} exact />
      <Footer />
    </div>
  );
};

export default Dashboard;
