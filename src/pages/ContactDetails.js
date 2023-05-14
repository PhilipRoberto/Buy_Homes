import { React } from "react";
import { Link } from "react-router-dom";

// styles import....
import "../styles/spo.css";

// import components....
import SellPageBanner from "../components/sellbanner";
import Footer from "../components/footer";
import Input from "../components/Input";


function LsForm() {
    return (
        <div className="spofc lsfc-wrapper">
            <form className="spo-form">
                <label for="cn">Contact name</label><br />
                <Input type="text" id="cn" placeholder="Enter your name" className="txt-input" /><br />
                <label for="cpn">Contact phone number</label><br />
                <Input type="text" id="cpn" placeholder="Enter your phone number" className="txt-input" /><br />
                <label for="cea">Contact email address</label><br />
                <Input type="email" id="cea" placeholder="Enter your email address" className="txt-input" /><br />
                <p className="radio-que">Please select one option</p>
                <Input type="radio" id="agn" value="Agency" className="radio-input" />
                <label for="agn">Agency</label>
                <Input type="radio" id="ind" value="Individual" className="radio-input" />
                <label for="ind">Individual</label><br />
                <label for="agnName">Agency name</label><br />
                <Input type="text" id="agnName" placeholder="Enter agency name" className="txt-input" /><br />
                <label for="location">Location</label><br />
                <Input type="text" id="location" placeholder="Street" className="txt-input location-input" /><br />
                <Input type="text" id="location" placeholder="Town/CIty" className="txt-input location-input l-input-small" /><br />
                <Input type="text" id="location" placeholder="State" className="txt-input location-input l-input-last l-input-small" /><br />
                <div classame="msfd-container">
                    <span className="msfd">
                        Missing field? <Link to="">
                            <span className="msfd-link">Let us know</span>
                        </Link>
                    </span><br />
                    <span className="cmbk">You can always come back to this page and complete your form</span>
                </div>
                <Link to="/cnf">
                    <button type="submit" className="submit-btn">Submit listing</button>
                </Link>
            </form>
        </div>
    )
}

export default function ContactDetails() {
    return (
        <div className="spo-main">
            <SellPageBanner />
            <LsForm />
            <Footer />
        </div>
    )
}