import React, { useEffect, useState } from "react";
function Dashboard() {
  const [userData, setUserdata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5501/api/data/userdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
          },
        });
        if (!response.ok) throw new Error(response.status);

        const data = await response.json();
        // console.log(data);  
        setUserdata(data);
      } catch (error) {
        console.error("Login first", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          height: "649px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "500px",
            width: "700px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <div className="card mb-3" style={{}}>
            <div className="row g-0 flex " style={{ height: "500px" }}>
              <div
                className="col-md-4 text-center  "
                style={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "50px",
                  backgroundColor: "blue",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={userData.image_url}
                  alt="Avatar"
                  className=""
                  style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "fill", border: "2px solid white" }}
                />
                <h5
                  style={{
                    padding: "5px",
                    marginTop: "30px",
                    fontSize: "20px",
                  }}
                >
                  {userData.name}
                </h5>

                <i className="far fa-edit mb-5"></i>
              </div>

              <div className="col-md-8" style={{ width: "70%" }}>
                <div className="card-body px-4 py-8">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div
                    className="row pt-1 flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <div className="col-md-6 mb-3">
                      <h6 className="py-2">ID Number</h6>
                      <p className="text-muted ">{userData.id}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h6 className="py-2">Department</h6>
                      <p className="text-muted">{userData.college_department}</p>
                    </div>
                  </div>
                  <hr className="mt-5 mb-4" />
                  <div
                    className="row pt-1 flex"
                    style={{ justifyContent: "space-around" }}
                  >
                    <div className="col-md-6 mb-3">
                      <h6 className="py-2">Email</h6>
                      <p className="text-muted">{userData.email}</p>
                    </div>
                  </div>
                  <hr className="mt-5 mb-4" />
                  <div
                    className="row pt-1 flex "
                    style={{ justifyContent: "space-around" }}
                  >
                    <div className="col-md-6 mb-3">
                      <h6 className="py-2">HOD</h6>
                      <p className="text-muted ">{userData.hod}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h6 className="py-2">counselor</h6>
                      <p className="text-muted">{userData.counselor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
