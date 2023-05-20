import React, { useCallback, useState } from "react";


// import styles....
import "../styles/spo.css";


// import components....
import SellPageBanner from "../components/sellbanner";
import Footer from "../components/footer";
import DropBox from "../components/dropZone";
import ShowImage from "../components/ShowImage";
import Input from "../components/Input";
import TextArea from "../components/Textarea";
import { Link } from "react-router-dom";

function DragDrop() {
    const [images, setImages] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.map((file, index) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages((prevState) => [
                    ...prevState,
                    { id: index, src: e.target.result },
                ]);
            };
            reader.readAsDataURL(file);
            return file;
        });
    }, []);
    return (
        <div className="App">
            <DropBox onDrop={onDrop} />
            <ShowImage images={images} />
        </div>
    );
}



function BsForm() {
    return (
        <div className="spofc bsfc-wrapper">
            <form className="spo-form">
                <label for="ls">Land size</label><br />
                <Input type="text" placeholder="Land size" id="ls" className="txt-input" /><br />
                <label for="location">Location</label><br />
                <Input type="text" placeholder="Street" id="location" className="txt-input location-input" /><br />
                <Input type="text" placeholder="Town/City" id="location" className="txt-input location-input l-input-small" /><br />
                <Input type="text" placeholder="State" id="location" className="txt-input location-input l-input-last l-input-small" /><br />
                <label for="soc">Stage of construction</label><br />
                <select id="soc" className="select-input">
                    <option value="Complete">Complete</option>
                    <option value="Incomplete" selected>Incomplete</option>
                </select><br />
                <p className="radio-que">Fully furnished?</p>
                <Input type="radio" id="yes" name="furnish" value="Yes" className="radio-input" />
                <label for="yes" className="radio-label">Yes</label>
                <Input type="radio" id="no" name="furnish" value="No" className="radio-input" />
                <label for="no" className="radio-label">No</label><br />
                <label for="top">Title of Property</label><br />
                <select id="top" className="select-input">
                    <option vlaue="top">top</option>
                    <option vlaue="top">top</option>
                    <option vlaue="top">top</option>
                    <option vlaue="top">top</option>
                </select><br />
                <label for="nob">Number of bedrooms</label><br />
                <Input type="number" id="nob" placeholder="NUmber of bedrooms" className="txt-input" /><br />
                <label for="nol">Number of living rooms</label><br />
                <Input type="number" id="nol" placeholder="Number of living rooms" className="txt-input" /><br />
                <label for="not">Number of toilets</label><br />
                <Input type="number" id="not" placeholder="Number of toilets" className="txt-input" /><br />
                <label for="nobth">Number of bathrooms</label><br />
                <Input type="number" id="nobth" placeholder="Number of bathrooms" className="txt-input" /><br />
                <p className="radio-que">Newly built?</p>
                <Input type="radio" id="yes" name="built-current" value="Yes" className="radio-input" />
                <label for="yes" className="radio-label">Yes</label>
                <Input type="radio" id="no" name="built-current" value="No" className="radio-input" />
                <label for="no" className="radio-label">No</label><br />
                <p className="radio-que">Swimming pool?</p>
                <Input type="radio" id="yes" name="pool" value="Yes" className="radio-input" />
                <label for="yes" className="radio-label">Yes</label>
                <Input type="radio" id="no" name="pool" value="No" className="radio-input" />
                <label for="no" className="radio-label">No</label><br />
                <p className="radio-que">Gym?</p>
                <Input type="radio" id="yes" name="gym" value="Yes" className="radio-input" />
                <label for="yes" className="radio-label">Yes</label>
                <Input type="radio" id="no" name="gym" value="No" className="radio-input" />
                <label for="no" className="radio-label">No</label><br />
                <label for="agent">Owner/Agent name</label><br />
                <Input type="text" id="agent" placeholder="Owner/agent name" className="txt-input" /><br />
                <label for="images">Image(s)</label><br />
                <DragDrop /><br />
                <label for="vids">Videos/Virtual tours</label><br />
                <DragDrop /><br />
                <label for="desc">Description</label><br />
                <TextArea id="desc" placeholder="Description" /><br />
                <label for="asp">Asking price</label><br />
                <Input type="number" id="asp" placeholder="Asking price" className="txt-input" /><br />
                <div classame="msfd-container">
                    <span className="msfd">
                        Missing field? <Link to="">
                            <span className="msfd-link">Let us know</span>
                        </Link>
                    </span><br />
                    <span className="cmbk">You can always come back to this page and complete your form</span>
                </div>
                <Link to="/cd">
                    <button type="submit" value="Proceed" className="submit-btn">Proceed</button>
                </Link>
            </form>
        </div>
    )
}

export default function BuildingSale() {
    return (
        <div className="spo-main">
            <SellPageBanner />
            <BsForm />
            <Footer />
        </div>
    )
}