import React from "react";
import { Link } from "react-router-dom";

// import styles....
import "../styles/useracc.css";


// import components....
// import Footer from "../components/footer";
import Input from "../components/Input";


export default function CreateAcc() {
    return (
        <div className="craForm craForm-container">
            <div className="xyz">
                <div className="bg-image"></div>
                <div className="sup-form-container">
                    <div className="form-cont">
                        <h1 className="useracc-heading">Create Account</h1>
                        <form className="sup-form">
                            <label for="fname">First name</label><br />
                            <Input id="fname" type="text" className="useracc-txt-input" placeholder="Enter your first name" /><br />
                            <label for="lname">Last name</label><br />
                            <Input type="text" id="lname" className="useracc-txt-input" placeholder="Enter your last name" /><br />
                            <label for="agent">Real Estate Agency</label><br />
                            <Input type="text" id="agent" className="useracc-txt-input" placeholder="Enter your real estate agency" /><br />
                            <label for="email">Email address</label><br />
                            <Input type="text" id="email" className="useracc-txt-input" placeholder="Enter your email address" /><br />
                            <label for="code">Password</label><br />
                            <Input type="password" id="code" className="useracc-txt-input" placeholder="Create new password" /><br />
                            <Input type="checkbox" id="terms" className="useracc-check-input" value="agree terms" /><label for="terms" className="label-terms">   I have read and accept the <Link to="/terms_and_condition" className="label-terms-link">Terms and Condition</Link></label><br />
                            <button className="useracc-submit">Create account</button>
                        </form>
                        <p className="useracc-que">Already have and account? <Link to="/login">Sign in</Link></p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}