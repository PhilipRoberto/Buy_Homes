import React from "react";
import { Link } from "react-router-dom";

// Import styles....
import "../styles/createacc.css";


// Import assets...
import whitelogo from "../assets/buyhomesngblack.png";

function AccountCreationForm () {
    const acceptedTermsandConditions = "I have read and accepted the Terms and conditions";
    return (
        <div className="acc-creation-form">
            <form>
                <label for="fname">First name</label><br />
                <input type="text" placeholder="First name" id="fname" /><br />
                <label for="lname">Last name</label><br />
                <input type="text" placeholder="Last name" id="lname" /><br />
                <label for="agency">Real Estate Agency</label><br />
                <input type="text" placeholder="Real Estate Agency" id="agency" /><br />
                <label for="email">Email address</label><br />
                <input type="email" placeholder="Email address" id="email" /><br />
                <label for="password">Password</label><br />
                <input type="password" placeholder="Password" id="password" /><br />
                <input type="checkbox" value={acceptedTermsandConditions} />
                <span className="terms">I have read and accept the <Link to="/terms-and-conditions" className="terms">Terms &amp; Conditions</Link></span><br />
                <Link to="">
                    <button type="submit" value="Create account" className="create-acc">Create account</button>
                </Link>
            </form>
        </div>
    )
}

export default function CreateAcc () {
    return (
        <div className="accounts-creation-page">
            <div className="accounts-creation-container">
                <div className="accounts-creation-side1"></div>
                <div className="accounts-creation-side2">
                    <div className="accounts-creation-side2-contanier">
                        <div className="img-logo-container">
                            <img src={whitelogo} alt="buyhomesng-logo" />
                        </div>
                        <div className="accounts-creation-form">
                            <div>
                                <div className="accounts-creation-form-heading">
                                    <span>Create Account</span>
                                </div>
                                <AccountCreationForm />
                                <div className="sign-in-option">
                                    <span>Already have an account? <Link to="/login"><span>Sign in</span></Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}