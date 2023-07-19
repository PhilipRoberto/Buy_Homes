import { React, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// import styles....
import "../styles/useracc.css";


// import components....
// import Footer from "../components/footer";
import Input from "../components/Input";


export default function CreateAcc() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_db9ie7o', 'template_ue2lg11', form.current, 'kcnitHNmIGibFcKL3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        window.alert("Account form submitted successfully");
        e.target.reset();
    };
    return (
        <div className="craForm craForm-container">
            <div className="xyz">
                <div className="bg-image"></div>
                <div className="sup-form-container">
                    <div className="form-cont">
                        <h1 className="useracc-heading">Create Account</h1>
                        <form ref={form} onSubmit={sendEmail} className="sup-form">
                            <label for="user_fname">First name</label><br />
                            <Input id="user_fname" name="user_fname" type="text" className="useracc-txt-input" placeholder="Enter your first name" /><br />
                            <label for="user_lname">Last name</label><br />
                            <Input type="text" id="user_lname" name="user_lname" className="useracc-txt-input" placeholder="Enter your last name" /><br />
                            <label for="agency_name">Real Estate Agency</label><br />
                            <Input type="text" id="agency_name" name="agency_name" className="useracc-txt-input" placeholder="Enter your real estate agency" /><br />
                            <label for="user_email">Email address</label><br />
                            <Input type="text" id="user_email" name="user_email" className="useracc-txt-input" placeholder="Enter your email address" /><br />
                            <label for="user_code">Password</label><br />
                            <Input type="password" id="user_code" name="user_code" className="useracc-txt-input" placeholder="Create new password" /><br />
                            <Input type="checkbox" id="terms" name="terms" className="useracc-check-input" value="I agree to the terms and conditions" /><label for="terms" className="label-terms">   I have read and accept the <Link to="/terms_and_condition" className="label-terms-link">Terms and Condition</Link></label><br />
                            <button type="submit" className="useracc-submit">Create account</button>
                        </form>
                        <p className="useracc-que">Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}