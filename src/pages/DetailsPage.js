import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import getSymbolFromCurrency from "currency-symbol-map";

// import styles....
import "../styles/details.css";


// import components....
import Footer from "../components/footer";
// import Input from "../components/Input";


// import assets....
import home1 from "../assets/homes/home1.png";
import home2 from "../assets/homes/home2.png";
import home3 from "../assets/homes/home3.png";
import home4 from "../assets/homes/home4.png";
import home5 from "../assets/homes/home5.png";
import home6 from "../assets/homes/home6.png";
import prev_btn from "../assets/back_arrow.png";
import next_btn from "../assets/front_arrow.png";
import agent_card from "../assets/photo-card.png";
import TextArea from "../components/Textarea";

// globals....
const ngn = getSymbolFromCurrency('NGN');
const openBracket = `(`;
const closeBracket = `)`;
// const fPlace = `${ngn} 0.00`;

const sliderArray = [
    {
        img: `${home1}`,
        price: `${ngn}"50,000,000"`,
        agent: "Adron Homes",
        location: "Osapa London Lekki",
        status: "Newly-built",
        type: "Fully-detached",
        lrooms: "2 Living rooms",
        bedrooms: "4 Bedrroms",
        bathrooms: "2 Bathrooms",
        pool: "Swimming pool",
        gym: "Gym",
        size: "2,000sqm",
    },
    {
        img: `${home2}`,
        price: `${ngn}"50,000,000"`,
        agent: "Adron Homes",
        location: "Osapa London Lekki",
        status: "Newly-built",
        type: "Fully-detached",
        lrooms: "2 Living rooms",
        bedrooms: "4 Bedrroms",
        bathrooms: "2 Bathrooms",
        pool: "Swimming pool",
        gym: "Gym",
        size: "2,000sqm",
    },
    {
        img: `${home3}`,
        price: `${ngn}"50,000,000"`,
        agent: "Adron Homes",
        location: "Osapa London Lekki",
        status: "Newly-built",
        type: "Fully-detached",
        lrooms: "2 Living rooms",
        bedrooms: "4 Bedrroms",
        bathrooms: "2 Bathrooms",
        pool: "Swimming pool",
        gym: "Gym",
        size: "2,000sqm",
    },
    {
        img: `${home4}`,
        price: `${ngn}"50,000,000"`,
        agent: "Adron Homes",
        location: "Osapa London Lekki",
        status: "Newly-built",
        type: "Fully-detached",
        lrooms: "2 Living rooms",
        bedrooms: "4 Bedrroms",
        bathrooms: "2 Bathrooms",
        pool: "Swimming pool",
        gym: "Gym",
        size: "2,000sqm",
    },
    {
        img: `${home5}`,
        price: `${ngn}"50,000,000"`,
        agent: "Adron Homes",
        location: "Osapa London Lekki",
        status: "Newly-built",
        type: "Fully-detached",
        lrooms: "2 Living rooms",
        bedrooms: "4 Bedrroms",
        bathrooms: "2 Bathrooms",
        pool: "Swimming pool",
        gym: "Gym",
        size: "2,000sqm",
    },
    {
        img: `${home6}`,
        price: `${ngn}"50,000,000"`,
        agent: "Adron Homes",
        location: "Osapa London Lekki",
        status: "Newly-built",
        type: "Fully-detached",
        lrooms: "2 Living rooms",
        bedrooms: "4 Bedrroms",
        bathrooms: "2 Bathrooms",
        pool: "Swimming pool",
        gym: "Gym",
        size: "2,000sqm",
    },
]





const DetailsPageContainer = () => {
    return (
        <div className="details-page-container">
            <div className="details-angled-marginal-container">
                <div className="details-angled-banner">
                    <div className="details-btns-container">
                        <div className="b2b-btn-container">
                            <button className="dp-b2b-btn">
                                <Link to="/" className="dp-b2b-btn-link">
                                    <img src={prev_btn} alt="back_to_browse_button" className="b2b-btn" /><span>Back to browse</span>
                                </Link>
                            </button>
                        </div>
                        <div className="nextprev-btns">
                            <div className="prev-btn-container">
                                <button className="dp-btn">
                                    <img src={prev_btn} alt="prev_button" className="prev_btn" />
                                </button>
                            </div>
                            <div className="next-btn-container">
                                <button className="dp-btn">
                                <img src={next_btn} alt="next_button" className="next_btn" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-page-house-details-container">
                    <div className="dph-headers-container">
                        <div className="price-agent-container">
                            <div className="price-marginal-container">
                                <span>{ngn}50,000,000</span>
                            </div>
                            <div className="agent-marginal-container">
                                <span>Osmond Properties</span>
                            </div>
                        </div>
                        <div className="location-header-container">
                            <p>Osapa London, Lekki, Lagos</p>
                        </div>
                        <div className="house-features-headers">
                            <div className="house-features">
                                <span>Newly-built</span>
                            </div>
                            <div className="house-features">
                                <span>Fully-detached</span>
                            </div>
                            <div className="house-features">
                                <span>2 Living rooms</span>
                            </div>
                            <div className="house-features">
                                <span>4 Bedrooms</span>
                            </div>
                            <div className="house-features">
                                <span>2 Bathrooms</span>
                            </div>
                            <div className="house-features">
                                <span>Swimming pool</span>
                            </div>
                            <div className="house-features">
                                <span>Gym</span>
                            </div>
                            <div className="house-features">
                                <span>2,000 sqm</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-action-marginal-container">
                        <div className="tour-phy-btn-container">
                            <button className="dp-action-btn">Schedule physical tour</button>
                        </div>
                        <div className="tour-vir-btn-container">
                            <button className="dp-action-btn">Schedule virtual tour</button>
                        </div>
                        <div className="buy-btn-container">
                            <button className="dp-action-btn">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-split-container">
                <div className="details-grid-main-container">
                <div className="section-mini-container">
                        <div className="home-section-two-heading browser-heading">
                            <span>More from Osmond Properties</span>
                        </div>
                        <div className="home-section-display-grid">
                            <div className="home-option-wrapper">
                                <Link to="" className="home-option-link">
                                    <div className="home-option-image-container">
                                        <div className="home-option-image">
                                            <img src={home6} alt="home_image" className="home-img" />
                                        </div>
                                    </div>
                                    <div className="home-option-text">
                                        <div className="home-option-text-marginal-wrapper">
                                            <div className="price-agency-container">
                                                <div className="house-price">{ngn}50,000,000</div>
                                                <div className="listing-agent">Albert &amp; Wand</div>
                                            </div>
                                            <div className="house-location">Osapa London, Lekki, Lagos</div>
                                            <div className="house-specs">
                                                <div className="house-specs1">
                                                    <div>Fully-detached</div>
                                                    <div>2 Living rooms</div>
                                                    <div>4 Bedrooms</div>
                                                </div>
                                                <div className="house-specs2">
                                                    <div>2 Bathrooms</div>
                                                    <div>Swimmiing pool</div>
                                                    <div>Gym</div>
                                                    <div>2,000 Sqm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="home-option-wrapper">
                                <Link to="" className="home-option-link">
                                    <div className="home-option-image-container">
                                        <div className="home-option-image">
                                            <img src={home1} alt="home_image" className="home-img" />
                                        </div>
                                    </div>
                                    <div className="home-option-text">
                                        <div className="home-option-text-marginal-wrapper">
                                            <div className="price-agency-container">
                                                <div className="house-price">{ngn}50,000,000</div>
                                                <div className="listing-agent">Grebes Properties</div>
                                            </div>
                                            <div className="house-location">Osapa London, Lekki, Lagos</div>
                                            <div className="house-specs">
                                                <div className="house-specs1">
                                                    <div>Fully-detached</div>
                                                    <div>2 Living rooms</div>
                                                    <div>4 Bedrooms</div>
                                                </div>
                                                <div className="house-specs2">
                                                    <div>2 Bathrooms</div>
                                                    <div>Swimmiing pool</div>
                                                    <div>Gym</div>
                                                    <div>2,000 Sqm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="home-option-wrapper">
                                <Link to="" className="home-option-link">
                                    <div className="home-option-image-container">
                                        <div className="home-option-image">
                                            <img src={home2} alt="home_image" className="home-img" />
                                        </div>
                                    </div>
                                    <div className="home-option-text">
                                        <div className="home-option-text-marginal-wrapper">
                                            <div className="price-agency-container">
                                                <div className="house-price">{ngn}50,000,000</div>
                                                <div className="listing-agent">Natty Homes</div>
                                            </div>
                                            <div className="house-location">Osapa London, Lekki, Lagos</div>
                                            <div className="house-specs">
                                                <div className="house-specs1">
                                                    <div>Fully-detached</div>
                                                    <div>2 Living rooms</div>
                                                    <div>4 Bedrooms</div>
                                                </div>
                                                <div className="house-specs2">
                                                    <div>2 Bathrooms</div>
                                                    <div>Swimmiing pool</div>
                                                    <div>Gym</div>
                                                    <div>2,000 Sqm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="home-option-wrapper">
                                <Link to="" className="home-option-link">
                                    <div className="home-option-image-container">
                                        <div className="home-option-image">
                                            <img src={home2} alt="home_image" className="home-img" />
                                        </div>
                                    </div>
                                    <div className="home-option-text">
                                        <div className="home-option-text-marginal-wrapper">
                                            <div className="price-agency-container">
                                                <div className="house-price">{ngn}50,000,000</div>
                                                <div className="listing-agent">Natty Homes</div>
                                            </div>
                                            <div className="house-location">Osapa London, Lekki, Lagos</div>
                                            <div className="house-specs">
                                                <div className="house-specs1">
                                                    <div>Fully-detached</div>
                                                    <div>2 Living rooms</div>
                                                    <div>4 Bedrooms</div>
                                                </div>
                                                <div className="house-specs2">
                                                    <div>2 Bathrooms</div>
                                                    <div>Swimmiing pool</div>
                                                    <div>Gym</div>
                                                    <div>2,000 Sqm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agent-contact-card-container">
                    <div>
                        <div className="agent-contact-header">
                            <div className="agent-contact-img-container">
                                <img src={agent_card} alt="agent-card" className="agent-photo-card" />
                            </div>
                            <div className="agent-info-container">
                                <h3>Listing agent</h3>
                                <h2>Osmond Properties</h2>
                                <h3>Contact</h3>
                                <h2>{openBracket}234{closeBracket} 703-163-5772</h2>
                            </div>
                        </div>
                        <div className="agent-contact-mssg-container">
                            <div>
                                <label for="mssg-agent" className="mssg-agent-label">Message Osmond Properties</label><br />
                                <TextArea id="mssg-agent" name="mssg-agent" placeholder="Hi, I would like to know more about this listing" className="agent-contact-mssg" /><br />
                            </div>
                        </div>
                        <div className="mssg-agent-btn-container">
                            <button className="mssg-send-btn">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DetailsPage () {
    useEffect (() => {
        console.log(sliderArray);
        console.log(sliderArray.length);
    })
    return (
        <div className="dp-container">
            <DetailsPageContainer />
            <Footer/>
        </div>
    )
}