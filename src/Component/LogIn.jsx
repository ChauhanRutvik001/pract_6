import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";

function Login({ onLogin }) {
  const [id, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const [popUp,setPopUp] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5501/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          password: password,
        }),
      });

      const data = await response.json();
      localStorage.setItem("UserToken",data.token);
      if(data.user){
        if(data.pass){
            setPopUp("Login successful")

            if(data.isAdmin){
              navigate("/adminPage"); // Programmatic navigation to admin dashboard
            }
            else{
              navigate("/userPage"); // Programmatic navigation to admin dashboard
            }
        }
        else{
          setPopUp("ID & Password not match !!!");
        }
      }
      else{
        setPopUp("ID & Password not match !!!")
      }

      setAdmin(data.isAdmin);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="box">
        <div className="log_img">
          <img src="Image/logIn.png" alt="" />
        </div>
        <div className="login">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center" style={{width:"100%",height:"100vh"}}>
            <div className="bg-opacity-85 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{height:"450px"}}>
              <div className="mb-4">
                <img
                  src="../Image/logo3.jpg"
                  alt="CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY"
                  className="mx-auto h-16"
                />
                <h5 className="text-center mt-1">Gateway to e-Governance</h5>
              </div>
              <div className="px-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={id}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="">
                    <p onClick={()=> setPopUp("We can't change your password !!!")}  className="text-blue-800 cursor-pointer hover:text-blue-500 text-center">
                      Forgot your password?
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
                  <i className="icon-unlock2"></i> Login
                </button>
              </div>
              <h2 className="px-4 mt-4 text-red-600" style={{fontSize:"18px"}}>
              {popUp}
              </h2>
            </div>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default Login;


{/* <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={id}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
</form> */}