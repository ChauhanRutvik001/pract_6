import React from 'react';
import '../Css/SplashScreen.css'; // Import CSS for styling

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="img">
          <img src="../Image/LOGO.png" alt="" />
      </div>
      <div className="title">
        <p className='title_name'>
            Charusat Health & Care
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
