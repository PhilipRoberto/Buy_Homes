import React from "react";
import { Link } from "react-router-dom";


// Import styles....
import "../styles/createacc.css";


// Import assets...
import whitelogo from "../assets/buyhomesngblack.png";


function SignInForm () {
    return (
        <div className="acc-creation-form">
            <form>
                <label for="email">Email address</label><br />
                <input type="email" placeholder="Email address" id="email" /><br />
                <label for="password">Password</label><br />
                <input type="password" placeholder="Password" id="password" /><br />
                <div className="password-resetter">
                    <Link to="/aacounts/reset-password">
                        <span>Forgot password?</span>
                    </Link>
                </div>
                <Link to="">
                    <button type="submit" value="Create account" className="create-acc">Sign in</button>
                </Link>
            </form>
        </div>
    )
}

export default function SignIn() {
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
                                    <span>Welcom back</span>
                                </div>
                                <SignInForm />
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