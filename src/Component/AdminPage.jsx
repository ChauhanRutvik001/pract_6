import React, { useState, useEffect } from "react";
import Sidebar from "./adminPage/Sidebar";
import Header from "./adminPage/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./adminPage/Dashboard";
import History from "./adminPage/History";
import Application from "./adminPage/Application";

function AdminPage(props) {
  const [userData, setUserdata] = useState({});

  const [userReason, setUserReason] = useState('');

  

  return (
    <div className="min-h-screen flex bg-black">
      <Sidebar />
      <div className="flex flex-col" style={{ width: "83%" }}>
        <Header/>
        <div className="flex-grow">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/application" element={<Application />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
