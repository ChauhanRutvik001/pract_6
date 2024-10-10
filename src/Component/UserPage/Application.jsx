import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

function Application() {
  const [userData, setUserdata] = useState({
    id: "*******",
    name: "*******"
  });
  const [userReason, setUserReason] = useState('');
  const reasonTextareaRef = useRef(null); // Create a ref for the textarea

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
        setUserdata(data);
      } catch (error) {
        console.error("Login first", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5501/api/send/reason", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userData.id,
          hod_id: userData.hod_id,
          reason: userReason,
          url: userData.image_url
        }),
      });

      const Application_data = await response.json();
      console.log(Application_data);

      // Show success message
      handlesuccessClick();

      // Clear textarea text using ref
      reasonTextareaRef.current.value = '';

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlesuccessClick = () => {
    Swal.fire('Success!', 'Application Submitted', 'success');
  }

  return (
    <>
      <div className="flex justify-center items-center" style={{ color: "white", width: "100%", height: "649px" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center">
              <div className="bg-opacity-85 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ height: "540px", width: "500px" }}>
                <div className="mb-4">
                  <img
                    src="../Image/logo3.jpg"
                    alt="CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY"
                    className="mx-auto h-16"
                  />
                </div>
                <div className="px-4 mt-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      UserID
                  </label>
                    <input
                      type="text"
                      value={userData.id}
                      required
                      readOnly
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Name
                  </label>
                    <input
                      required
                      type="text"
                      readOnly
                      value={userData.name}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Reason
                  </label>
                      <textarea ref={reasonTextareaRef} required onChange={(e) => setUserReason(e.target.value)} placeholder='Write your reason' className='rounded py-2 px-3 resize-none' style={{ color: "black", outline: "none" }} cols="49" rows="5">
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="px-4 mt-6">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">
                    <i className="icon-unlock2"></i> Submit
                </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Application;
