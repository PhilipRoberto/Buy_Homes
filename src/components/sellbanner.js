import React from "react";

// import styles....
import "../styles/sellbanner.css";

export default function SellPageBanner() {
    return (
        <div className="sell-banner-container">
            <div className="sell-banner-content-wrapper">
                <div className="sell-banner-content">
                    <div className="sbtcw">
                        <div>
                            <span className="sell-banner-text sbt-1">
                                Want to sell some property?<br />
                                Fill in the form below to get started
                            </span>
                        </div>
                        <div>
                            <span className="sell-banner-text sbt-2">
                                To sell more than one property, you need to fill in the<br />information for each of them, one after the other.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}