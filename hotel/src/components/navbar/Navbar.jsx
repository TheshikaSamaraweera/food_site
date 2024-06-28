import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import React from 'react';
import { Link } from "react-router-dom"; 
import {
  faHotel,
  faBed,
  faBookmark,
  faBriefcase,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myImage from './logo.JPG';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="horizontalItems">
          <img src={myImage} alt="" className="featuredImg" />
          <span className="logo">GRAND HOTEL SRI LANKA</span>
          <div className="navItems">
          <Link to="/login"><button className="navButton">Login</button>
         </Link>
         <Link to="/register"><button className="navButton">Sign Up</button>
         </Link>
             </div>
          <div className="navItems">
            {user ? (
              <span className="navGreeting">Hi, Welcome {user.username}</span>
            ) : (
             null
            )}
          </div>
        </div>
        <div className="navList">
          <div className="navListItem" data-section="home">
            <FontAwesomeIcon icon={faHotel} />
            <span>Home</span>
          </div>
          <div className="navListItem" data-section="about">
            <FontAwesomeIcon icon={faBookmark} />
            <span>About</span>
          </div>
          <div className="navListItem" data-section="rooms">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
          </div>
          <div className="navListItem" data-section="amenity">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Amenity</span>
          </div>
          <div className="navListItem" data-section="contact">
            <FontAwesomeIcon icon={faPhoneSquare} />
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
