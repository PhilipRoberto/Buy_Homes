import React from "react";

// import error syles...
import "../styles/errorstyles.css";


export default function Error404() {
    return (
        <div className="error-page-container">
            <div>
                <h1>Error 404...</h1>
                <h3>The page requested not found</h3>
                <p>Check your url and try again</p>
            </div>
        </div>
    )
}