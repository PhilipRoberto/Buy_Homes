import React, { useState } from "react";
import { Link } from "react-router-dom";

// assets import...
import whitelogo from "../assets/buyhomesngwhite.png";
import photoCard from "../assets/photo-card.png";

// styles imports...
import "../styles/navmenu.css";
// import { useEffect } from "react";

export default function Navmenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

//   useEffect(() => {
//     setIsLoggedIn(window.localStorage.getItem("loggedIn"));
//   });
  return (
    <div className="menu menu-container">
      <nav className="nav nav-container">
        <div className="image-container">
          <Link to="/" className="image-link">
            <img src={whitelogo} alt="buy-homes-ng" />
          </Link>
        </div>
        <div className="sm_hidden">
        <div className="menu-options">
          <div className="about-link-container">
            <Link to="/about" className="about-link">
              <span>About</span>
            </Link>
          </div>
          <div className="contact-link-container">
            <Link to="/contact" className="contact-link">
              <span>Contact</span>
            </Link>
          </div>
          {isLoggedIn ? (
            <div className="option-sell-container sell">
              <Link to="/sell">
                <span>Sell property</span>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
        </div>
        <div className="sm_hidden">
        {isLoggedIn ? (
          <div className="temp_flex">
            <Link to="/user">
              <img
                src={photoCard}
                alt="profile-photo"
                className="custom_rounded_temp"
              />
            </Link>
            <Link to="/">
              <button
                className="zero_bg user-login"
                onClick={() => {
                //   window.localStorage.removeItem("loggedIn");
                setIsLoggedIn(false)
                }}
              >
                <span>Log out</span>
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="account-options signin-signup-container">
              <div className="account-creator">
                <Link to="/create-account">
                  <span>Create account</span>
                </Link>
              </div>
              <div className="user-login">
              <button className="zero_bg"
                onClick={() => {
                    setIsLoggedIn(true);
                }}
              >
                {/* <Link to="/login"> */}
                  
                  <span>Log in</span>
                {/* </Link> */}
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </nav>
    </div>
  );
}
