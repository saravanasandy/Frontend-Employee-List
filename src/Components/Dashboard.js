import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";
import NavPage from "./NavPage";

const Dashboard = () => {
  return (
    <>
      <NavPage />
      <Sidebar />
      <MainPage />
    </>
  );
};

export default Dashboard;
