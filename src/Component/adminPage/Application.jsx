import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function Application() {
  const [userData2, setUserData2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5501/api/sendInfoAdmin/admin_application",
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

  const updateUserModelStatus = async (id, status) => {
    try {
      console.log(id);
      const response = await fetch(
        "http://localhost:5501/api/responce/request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            status: status,
          }),
        }
      );
      if (!response.ok) throw new Error(response.status);

      const updatedData = await response.json();
      // Handle the updated data as needed
      console.log("User model status updated successfully:", updatedData);

      // Refetch data after updating user model status
      fetchData();
      
      // Show success message
      handlesuccessClick();
    } catch (error) {
      console.error("Error updating user model status:", error);
    }
  };

  const handlesuccessClick = () => {
    Swal.fire('Success!', 'Response  Sent', 'success');
  }

  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "100%", height: "649px" }}
    >
      <div
        style={{
          border: "2px solid white",
          width: "90%",
          height: "550px",
          backgroundColor: "white",
          padding: "8px",
          overflowY: "auto",
        }}
      >
        {userData2 &&
          userData2.map(
            (item, index) =>
              item.status === "Pending" && (
                <div
                  key={index}
                  className="Application_History p-4 my-2 flex justify-between items-center"
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

                  <div className="icon flex flex-row gap-20">
                    <div
                      className="flex justify-center items-center cursor-pointer h-10 w-10 bg-green-500 text-white rounded-full"
                      onClick={() => {
                        updateUserModelStatus(item._id, "Approved");
                      }}
                    >
                      ✓ {/* Unicode character for a checkmark */}
                    </div>
                    <div
                      className="flex justify-center items-center cursor-pointer h-10 w-10 bg-green-500 text-white rounded-full"
                      style={{ fontSize: "22px" }}
                      onClick={() => {
                        updateUserModelStatus(item._id, "Rejected");
                      }}
                    >
                      × {/* Unicode character for a cross */}
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default Application;
