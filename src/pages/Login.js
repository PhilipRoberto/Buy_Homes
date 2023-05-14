import React from "react";
import { Link } from "react-router-dom";

// import styles....
import "../styles/useracc.css";


// import components....
// import Footer from "../components/footer";
import Input from "../components/Input";


export default function Login() {
    return (
        <div className="craForm craForm-container">
            <div className="xyz">
                <div className="bg-image"></div>
                <div className="sup-form-container">
                    <div className="form-cont">
                        <h1 className="useracc-heading">Create Account</h1>
                        <form className="sup-form">
                            <label for="email">Email address</label><br />
                            <Input type="text" id="email" className="useracc-txt-input" placeholder="Enter your email address" /><br />
                            <label for="code">Password</label><br />
                            <Input type="password" id="code" className="useracc-txt-input" placeholder="Enter your password" /><br />
                            <p className="password-reset">
                                <Link to="/reset-password" className="password-reset-link">
                                    Forgot password?
                                </Link>
                            </p>
                            <button className="useracc-submit">Sign in</button>
                        </form>
                        <p className="useracc-que">New memebr? <Link to="/login">Create account</Link></p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}