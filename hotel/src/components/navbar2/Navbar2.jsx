import "./navbar2.css";
import React from 'react';

import myImage from '../navbar/logo.JPG';

const Navbar2 = () => {

  return (
    <div className="navbar2">
      <div className="navContainer">
        <div className="horizontalItems">
          <img src={myImage} alt="" className="featuredImg" />
          <span className="logo">GRAND HOTEL</span>
          
        </div>
      
        </div>
      </div>
   
  );
}

export default Navbar2;
