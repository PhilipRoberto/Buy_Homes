import React from "react";
import { Link } from "react-router-dom";


// import styles...
import "../styles/sellstyles.css";

// import assets...


function SellOptions() {
    return (
        <div className="sell-options-wrapper">
            <div className="sell-options">
                <div className="the-big-question">
                    <span>What do you want to list?</span>
                </div>
                <div className="sell-list-options">
                    <Link to="/sell/land" className="sell-option-link">
                        <div className="sell-option-link-container">
                            <div className="land-sell-option">
                            </div>
                        </div>
                        <div className="sell-option-text">
                            <span>Land</span>
                        </div>
                    </Link>
                    <Link to="/sell/house" className="sell-option-link">
                        <div className="sell-option-link-container">
                            <div className="house-sell-option">
                            </div>
                        </div>
                        <div className="sell-option-text">
                            <span>House</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function SellPage() {
    return (
        <div className="sell-page-container sell">
            <div className="sell-banner-container">
                <div className="sell-banner-content-wrapper">
                    <div className="sell-banner-content">
                        <div>
                            <span>
                                Want to sell some property? Fill in the form below to get started
                            </span>
                        </div>
                        <div>
                            <span>
                                To sell more than one property, you need to fill in the information for each of them, one after the other.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <SellOptions />
        </div>
    )
}