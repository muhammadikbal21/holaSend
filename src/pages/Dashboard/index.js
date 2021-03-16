import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
};

export default Dashboard;
