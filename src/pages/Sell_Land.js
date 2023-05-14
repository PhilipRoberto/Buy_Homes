import { React, useCallback, useState } from "react";
import { Link } from "react-router-dom";

// styles import....
import "../styles/spo.css";

// import components....
import SellPageBanner from "../components/sellbanner";
import Footer from "../components/footer";
import DropBox from "../components/dropZone";
import ShowImage from "../components/ShowImage";
import Input from "../components/Input";
import TextArea from "../components/Textarea";


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

function LsForm() {
    return (
        <div className="spofc lsfc-wrapper">
            <form className="spo-form">
                <label for="ls">Land size</label><br />
                <Input type="number" id="ls" placeholder="What's your land size" className="txt-input" /><br />
                <label for="ll">Location</label><br />
                <Input type="text" id="ll" placeholder="Where's the location" className="txt-input" /><br />
                <label for="top">Title of Property</label>< br />
                <select name="top" id="top" className="select-input">
                    <option value="top">top</option>
                    <option value="top">top</option>
                    <option value="top">top</option>
                    <option value="top">top</option>
                    <option value="top">top</option>
                </select><br />
                <label for="owner">Owner/Agent name</label><br />
                <Input type="text" id="owner" placeholder="Owner/Agent name" className="txt-input" /><br />
                <label for="l-images">Images</label><br />
                <DragDrop /><br />
                <label for="l-vids">Video/Virtual tour(s)</label><br />
                <DragDrop /><br />
                <label for="desc">Description</label><br />
                <TextArea id="desc" placeholder="Give a description" className="txt-input" /><br />
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