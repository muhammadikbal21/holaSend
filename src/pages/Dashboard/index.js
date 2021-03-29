import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorDashboard from "../Error/ErrorDashboard";
import ChangePassword from "./Content/ChangePassword";
import CreateDestinations from "./Content/CreateDestinations";
import CreateTask from "./Content/CreateTask/index";
import DestinationsList from "./Content/DestinationsList";
import DashboardCharts from "./Content/index";
import TasksFinished from "./Content/TasksFinished";
import TasksList from "./Content/TasksList";
import TasksUnfinished from "./Content/TasksUnfinished";
import UserManagements from "./Content/UserManagements";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Menu />
        <Switch>
          <Route path="/dashboard/change-password" component={ChangePassword} exact />
          <Route path="/dashboard/tasks-unfinished" component={TasksUnfinished} exact />
          <Route path="/dashboard/tasks-finished" component={TasksFinished} exact />
          <Route path="/dashboard/destinations-list" component={DestinationsList} exact />
          <Route path="/dashboard/create-task" component={CreateTask} exact />
          <Route path="/dashboard/tasks-report" component={TasksList} exact />
          <Route path="/dashboard/create-destinations" component={CreateDestinations} exact />
          <Route path="/dashboard/user-managements" component={UserManagements} exact />
          <Route path="/dashboard" component={DashboardCharts} exact />
          <Route path="/dashboard/*" component={ErrorDashboard} exact />
        </Switch>
      <Footer />
    </div>
  );
};

export default Dashboard;
