import React from "react";
import { Link } from "react-router-dom";


// assets import...
import whitelogo from "../assets/buyhomesngwhite.png";

// styles imports...
import "../styles/navmenu.css";



export default function Navmenu () {
    return (
        <div className="menu menu-container">
            <nav className="nav nav-container">
                <div className="image-container">
                    <Link to="/" className="image-link">
                        <img src={whitelogo} alt="buy-homes-ng" />
                    </Link>
                </div>
                <div className="menu-options">
                    <div className="option-sell-container sell">
                        <Link to="/sell">
                            <span>Sell property</span>
                        </Link>
                    </div>
                    <div className="account-creator">
                        <Link to="/create-account">
                            <span>Create account</span>
                        </Link>
                    </div>
                    <div className="user-login">
                        <Link to="/login">
                            <span>Log in</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};