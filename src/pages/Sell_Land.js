import { React, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// styles import....
import "../styles/spo.css";

// import components....
import SellPageBanner from "../components/sellbanner";
import Footer from "../components/footer";
import Previews from "../components/Previews"
import Input from "../components/Input";
import TextArea from "../components/Textarea";
// import ContactDetails from "../pages/ContactDetails";
// import Confirmation from "../pages/Confirmation";



function LsForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_db9ie7o', 'template_lcxdjxi', form.current, 'kcnitHNmIGibFcKL3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        window.alert("Account form submitted successfully");
        e.target.reset();
    };
    return (
        <div className="spofc lsfc-wrapper">
            <form ref={form} lassName="spo-form" onSubmit={sendEmail}>
                <label for="land_size">Land size</label><br />
                <Input type="number" id="land_size" name="land_size" placeholder="What's your land size" className="txt-input" /><br />
                <label for="land_location">Location</label><br />
                <Input type="text" id="land_location" name="land_location" placeholder="Where's the location" className="txt-input" /><br />
                <label for="title_of_property">Title of Property</label>< br />
                <div className="select">
                    <select name="title_of_property" id="title_of_property" className="select-input">
                        <option className="option-value" value="top">top</option>
                        <option className="option-value" value="bottom">bottom</option>
                        <option className="option-value" value="left">left</option>
                        <option className="option-value" value="right">right</option>
                        <option className="option-value" value="center">center</option>
                    </select><br />
                </div>
                <label for="land_owner">Owner/Agent name</label><br />
                <Input type="text" id="land_owner" name="land_owner" placeholder="Owner/Agent name" className="txt-input" /><br />
                <label for="land_images">Images</label><br />
                <Previews /><br />
                <label for="land_videos">Video/Virtual tour(s)</label><br />
                <Previews /><br />
                <label for="land_description">Description</label><br />
                <TextArea id="land_description" name="land_description" placeholder="Give a description" className="txt-input" /><br />
                <label for="asking_price">Asking price</label><br />
                <Input type="number" id="asking_price" name="asking_price" placeholder="Asking price" className="txt-input" /><br />
                <div classame="msfd-container">
                    <span className="msfd">
                        Missing field? <Link to="">
                            <span className="msfd-link">Let us know</span>
                        </Link>
                    </span><br />
                    <span className="cmbk">You can always come back to this page and complete your form</span>
                </div>
                <Link to="/cd">
                    <button type="submit" value="Proceed" className="submit-btn" >Proceed</button>
                </Link>
            </form>
        </div>
    )
}

export default function LandSale() {
    return (
        <div className="spo-main">
            <SellPageBanner />
            <LsForm />
            <Footer />
        </div>
    )
}