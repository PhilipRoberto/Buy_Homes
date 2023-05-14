import React from "react";
import { Link, Outlet } from "react-router-dom";


// import styles...
import "../styles/sellstyles.css";

// import components...
import SellPageBanner from "../components/sellbanner";
import Footer from "../components/footer";


function SellOptions() {
    return (
        <div className="sell-options-wrapper">
            <div className="sell-options">
                <div className="the-big-question">
                    <span>What do you want to list?</span>
                </div>
                <div className="sell-list-options">
                    <Link to="/sell-land" className="sell-option-link">
                        <div>
                            <div className="sell-option-link-container">
                                <div className="land-sell-option">
                                </div>
                            </div>
                            <div className="sell-option-text">
                                <span>Land</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/sell-building" className="sell-option-link">
                        <div>
                            <div className="sell-option-link-container">
                                <div className="house-sell-option">
                                </div>
                            </div>
                            <div className="sell-option-text">
                                <span>Building</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default function SellPage() {
    return (
        <div className="sell-page-container sell">
            <SellPageBanner />
            <SellOptions />
            <Footer />
        </div>
    )
}