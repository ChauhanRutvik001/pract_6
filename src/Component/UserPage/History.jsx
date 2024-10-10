import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function History() {
  const [userData2, setUserData2] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:5501/api/data/userdata",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
  //           },
  //         }
  //       );
  //       if (!response.ok) throw new Error(response.status);

  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error("Error fetching userdata:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5501/api/sendInfo/history",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
            },
          }
        );
        if (!response.ok) throw new Error(response.status);

        const data = await response.json();
        setUserData2(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchData(); // Call the API immediately when the component mounts

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 60 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center"
      style={{width: "100%", height: "649px" }}
    >
      <div
        style={{
          border: "2px solid green",
          width: "90%",
          height: "550px",
          backgroundColor: "white",
          padding: "8px",
          overflowY: "auto",
        }}
      >
        {userData2 &&
          userData2.map((item, index) => (

            <div
              key={index}
              className="Application_History p-4 my-2 flex justify-between items-center cursor-pointer"
              style={{ border: "2px solid black" }}
            >
              <div className="flex">
                <img
                  src={item.url}
                  className="rounded-full w-12 h-12 "
                  style={{
                    border: "2px solid black",
                    backgroundColor: "black",
                    marginRight: "20px",
                  }}
                />
                <p className="flex flex-col">
                  {item.reason}{" "}
                  <span style={{ fontSize: "11px" }}>{item.id}</span>
                </p>
              </div>
              <div className="icon">
                {item.status === "Pending" ? (
                  <div className="flex justify-center items-center h-10 w-10 bg-yellow-500 text-white rounded-full">
                    !
                  </div>
                ) : item.status === "Approved" ? (
                  <div className="flex justify-center items-center h-10 w-10 bg-green-500 text-white rounded-full">
                    ✓
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-10 w-10 bg-red-500 text-white rounded-full">
                    ✕
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default History;
