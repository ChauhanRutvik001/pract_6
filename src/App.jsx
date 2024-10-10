import React, { useState, useEffect } from "react";
import SplashScreen from "./Component/SplashScreen";
import LogIn from "./Component/LogIn";
import "./Css/App.css"; // Import your main CSS file
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./Component/AdminPage";
import UserPage from "./Component/UserPage";
// Import UserPage directly from its file

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this time as needed
  }, []);

  return (
    <Router>
      <div className="app"> 
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/adminPage/*" element={<AdminPage />} />
          <Route path="/userPage/*" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
