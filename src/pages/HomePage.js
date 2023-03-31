import React from "react";
import { Link } from "react-router-dom";
import getSymbolFromCurrency from 'currency-symbol-map';

// import styles...
import "../styles/homepage.css";

// import assets....
import vector from "../assets/vector.png";
import searchvector from "../assets/searchvector.png";
// import home options...
import home1 from "../assets/homes/home1.png";
import home2 from "../assets/homes/home2.png";
import home3 from "../assets/homes/home3.png";
import home4 from "../assets/homes/home4.png";
import home5 from "../assets/homes/home5.png";
import home6 from "../assets/homes/home6.png";


// homepage sections...

function HomeSection1() {
    return (
        <div className="section home-section-one">
            <div className="home-section-one-main-flex">
                <div className="home-searchbar-container">
                    <input type="search" placeholder="Search by location or agent" />
                </div>
                <div className="home-searchbtn-container">
                    <button>
                        <img src={searchvector} alt="searchvector" classname="searchvector" />
                    </button>
                </div>
                <div className="home-searchfilter-container">
                    <button>
                        Filter results <img src={vector} alt="vector9" className="vector " />
                    </button>
                </div>
            </div>
        </div>
    );
};

function HomeSection2() {
    const ngn = getSymbolFromCurrency('NGN');
    return (
        <div className="home-section-two">
            <div className="home-section-two-heading">
                <span>Browse available homes</span>
            </div>
            <div className="home-section-display-grid">
                <div className="home-option-wrapper">
                    <Link to="" className="home-option-link">
                        <div className="home-option-image-container">
                            <div className="home-option-image">
                                <img src={home5} alt="home_image" className="home-img" />
                            </div>
                        </div>
                        <div className="home-option-text">
                            <div className="home-option-text-marginal-wrapper">
                                <div className="price-agency-container">
                                    <div className="house-price">{ngn}50,000,000</div>
                                    <div className="listing-agent">Ramos Reality</div>
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
                <div className="home-option-wrapper">
                    <Link to="" className="home-option-link">
                        <div className="home-option-image-container">
                            <div className="home-option-image">
                                <img src={home3} alt="home_image" className="home-img" />
                            </div>
                        </div>
                        <div className="home-option-text">
                            <div className="home-option-text-marginal-wrapper">
                                <div className="price-agency-container">
                                    <div className="house-price">{ngn}50,000,000</div>
                                    <div className="listing-agent">Cardone Homes</div>
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
                                <img src={home4} alt="home_image" className="home-img" />
                            </div>
                        </div>
                        <div className="home-option-text">
                            <div className="home-option-text-marginal-wrapper">
                                <div className="price-agency-container">
                                    <div className="house-price">{ngn}50,000,000</div>
                                    <div className="listing-agent">Lekki Global Propeties</div>
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
                                <img src={home4} alt="home_image" className="home-img" />
                            </div>
                        </div>
                        <div className="home-option-text">
                            <div className="home-option-text-marginal-wrapper">
                                <div className="price-agency-container">
                                    <div className="house-price">{ngn}50,000,000</div>
                                    <div className="listing-agent">Lekki Global Properties</div>
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
    );
}



export default function HomePage() {
    return (
        <div className="home home-container">
            <HomeSection1 />
            <HomeSection2 />
        </div>
    );
};