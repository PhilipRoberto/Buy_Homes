import { React } from "react";
import { Link } from "react-router-dom";

// styles import....
import "../styles/spo.css";

// import components....
import SellPageBanner from "../components/sellbanner";
import Footer from "../components/footer";


function Confirm() {
    return (
        <div className="confirmation-container">
            <div className="confirm-mssg-wrapper">
                <div>
                    <h1 className="confirmation-heading">Your listing has been submitted successfully!</h1>
                    <p className="confirmation-message">
                        Thank you for submitting your listing. Your submission will go through a verification process and someone will be in touch with you shortly.
                    </p>
                </div>
            </div>
            <div className="action-links-container">
                <div>
                    <Link to="/" className="action-to-homepage">
                        Back to homepage
                    </Link>
                </div>
                <div>
                    <Link to="/sell" className="action-to-sell-page">
                        Submit another listing
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Confirmation() {
    return (
        <div className="spo-main">
            <SellPageBanner />
            <Confirm />
            <Footer />
        </div>
    )
}