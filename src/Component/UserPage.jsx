import React,{useState,useEffect} from 'react'
import Sidebar from './UserPage/Sidebar';
import History from './UserPage/History';
import Header from './UserPage/Header';
import Application from './UserPage/Application';
import Dashboard from './UserPage/Dashboard';
// import Pdf from './UserPage/Pdf';
import { Route, Routes } from 'react-router-dom';

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:5501/api/data/userdata", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
//         },
//       });
//       if (!response.ok) throw new Error(response.status);
       
//       const data = await response.json();
//       console.log(data);  
//       setUserdata(data);
//     } catch (error) {
//       console.error("Login first", error);
//     }
//   };

//   fetchData();
// }, []);
function UserPage() { 
  return (
    <div className="min-h-screen flex bg-black">
      <Sidebar />
      <div className="flex flex-col" style={{ width: "83%" }}>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/application" element={<Application />} />
            <Route path="/history" element={<History />} />
            {/* <Route path="/pdf" element={<Pdf />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default UserPage
