import React,{useEffect,useState} from "react";
import Dashboard from "./Dashboard";

function Header() {
  // Function to handle clicking the user photo/name
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
        className="flex h-20 items-center justify-between bg-white"
        style={{ paddingLeft: "83%"}}
      >
        <div className="flex items-center">
          <span className="cursor-pointer mr-7">
            {userData.name}
          </span>
          <img
            src={userData.image_url}
            alt="User"
            className="cursor-pointer w-12 h-12    rounded-full  object-fill"
            style={{ border: "2px solid black",backgroundColor:"white" }}
          />
        </div>
    </div>      
    </>
  );
}

export default Header;
