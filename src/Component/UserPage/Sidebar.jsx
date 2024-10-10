import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
      <div className="flex flex-col bg-white overflow-hidden" style={{width: "17%", opacity: 10 }}>
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl flex text-indigo-500 font-serif">
          <img src="../Image/user.jpg" alt="" style={{ width: "50px" }} />
          User
        </h1>
      </div>
      <ul className="flex flex-col py-10 px-8">
        <li className='py-2'>
          <Link to="/userPage/dashboard" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L2 12h3v8h6v-6h4v6h6v-8h3L12 2zm6 10h-3v6h-4v-4H9v4H6v-6H3l9-9 9 9z" />
              </svg>
            </span>
            <span className="text-sm font-medium">
              Dashboard
            </span>
          </Link>
        </li>
        <li className='py-2'>
          <Link to="/userPage/application" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13h-2v4H7v-4H5v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5h-2v4H9v-4H7v5h10v-5zM2 10v10a1 1 0 0 0 1 1h3V10H3a1 1 0 0 0-1 1zm18 0h-3v11h3a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zM9 3v4h6V3H9z" />
              </svg>
            </span>
            <span className="text-sm font-medium">
              Applications
            </span>
          </Link>
        </li>
        <li className='py-2'>
          <Link to='/userPage/history' className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17.702 11.164l-4.06 4.059a.75.75 0 0 1-1.061 0l-2.122-2.122a.75.75 0 0 1 1.061-1.06l1.364 1.364 3.535-3.535a.75.75 0 1 1 1.061 1.06zM14 3a9 9 0 1 1-9 9 9 9 0 0 1 9-9zm0 2.25a6.75 6.75 0 1 0 6.75 6.75A6.757 6.757 0 0 0 14 5.25z" />
              </svg>
            </span>
            <span className="text-sm font-medium">
              History
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
