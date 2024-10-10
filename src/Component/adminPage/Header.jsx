import React,{useState,useEffect} from "react";

function Header(props) {
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
    <div className="flex h-20 items-center justify-between bg-white" style={{ paddingLeft: "80%"}}>
      <div className="flex items-center">
        <span className="cursor-pointer mr-7">{userData.name} </span>
        <img
          src={userData.image_url || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"}
          alt="User"
          className="cursor-pointer w-12 h-12 rounded-full object-fit"
          style={{ border: "2px solid black" }}
        />
      </div>  
    </div>
  );
}

export default Header;
