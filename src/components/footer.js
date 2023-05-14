import React from "react";
import { Link } from "react-router-dom";

// import assets....
import majorLogo from "../assets/buyhomesngwhite.png";
import wa from "../assets/wavector.png";
import fb from "../assets/fbvector.png";

// import styles....
import "../styles/footer.css";

export default function Footer () {
    return (
        <div className="footer-container">
            <footer className="footer-content-wrapper">
                <div className="ft-logo-container">
                    <img src={majorLogo} alt="BuyHomeNG_Logo" />
                </div>
                <div className="comp-container">
                    <h1 className="ft-hd">Company</h1>
                    <p>About us</p>
                    <p>Properties</p>
                    <p>Careers</p>
                </div>
                <div className="feat-cont">
                    <h1 className="ft-hd">Features</h1>
                    <p>Find a home</p>
                    <p>Become a seller</p>
                    <p>Property management</p>
                </div>
                <div className="cont-container">
                    <h1 className="ft-hd">Contact</h1>
                    <div className="soc-container">
                        <Link to="">
                            <img src={wa} alt="wa-logo-link" />
                        </Link>
                        <Link to="">
                            <img src={fb} alt="fb-logo-link" />
                        </Link>
                    </div>
                    <p>+234 703 163 5772</p>
                    <p>contact@buyhomes.ng</p>
                </div>
            </footer>
        </div>
    )
}