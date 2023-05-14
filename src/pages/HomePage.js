import React from "react";
import { Link } from "react-router-dom";
import getSymbolFromCurrency from "currency-symbol-map";


// import styles...
import "../styles/homepage.css";

// import components....
import Footer from "../components/footer";
import Input from "../components/Input";


// import assets....
import home1 from "../assets/homes/home1.png";
import home2 from "../assets/homes/home2.png";
import home3 from "../assets/homes/home3.png";
import home4 from "../assets/homes/home4.png";
import home5 from "../assets/homes/home5.png";
import home6 from "../assets/homes/home6.png";

// globals....
const ngn = getSymbolFromCurrency('NGN');
const fPlace = `${ngn} 0.00`;




function Properties() {

    return (
        <div className="flexy-pop">
            <div className="filter-container">
                <div className="filter-marginal-container">
                    <div className="filter-headers">
                        <h3>Filter</h3>
                        <button>
                            Reset filters
                        </button>
                    </div>
                    <div className="filter-form">
                        <div className="filter-price-range">
                            <div className="price-range-heading">
                                <h3>Price</h3>
                            </div>
                            <div className="filter-range-form">
                                <div className="range">
                                    <Input type="number" id="low-range" name="low-range" className="low-range-input rng" placeholder={fPlace} /><br />
                                    <label for="low-range" className="filter-label">lowest</label>
                                </div>
                                <div className="range">
                                    <Input type="number" id="high-range" name="high-range" className="high-range-input rng" placeholder={fPlace} /><br />
                                    <label for="high-range" className="filter-label">highest</label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-chekboxes-container">
                            <div className="agency-filter">
                            <div className="filter-checkbox-heading">
                                <span>Agency</span>
                            </div>
                            <div className="filter-checkboxes">
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="AdronHomes" id="adronhomes" name="adronhomes" className="filter-checkbox" /><label for="adronhomes" className="filter-checkbox-label">Adron Homes</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="AlbertWand" id="albertwand" name="albertwand" className="filter-checkbox" /><label for="albertwand" className="filter-checkbox-label">Albert &amp; Wand</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="OsmondProperties" id="osmondproperties" name="osmondproperties" className="filter-checkbox" /><label for="osmondproperties" className="filter-checkbox-label">Osmond Properties</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Ramos Reality" id="ramosreality" name="ramosreality" className="filter-checkbox" /><label for="ramosreality" className="filter-checkbox-label">Ramos Reality</label>
                                </div>
                                <div className="filter-toggle-btn-container">
                                    <button className="filter-toggle-btn">See all</button>
                                </div>
                            </div>
                            </div>
                            <div className="agency-filter">
                            <div className="filter-checkbox-heading">
                                <span>City</span>
                            </div>
                            <div className="filter-checkboxes">
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Lagos" id="lagos" name="lagos" className="filter-checkbox" /><label for="lagos" className="filter-checkbox-label">Lagos</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Abuja" id="abuja" name="abuja" className="filter-checkbox" /><label for="abuja" className="filter-checkbox-label">Abuja</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Ibadan" id="ibadan" name="ibadan" className="filter-checkbox" /><label for="ibadan" className="filter-checkbox-label">Ibadan</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Yes" id="yes" name="yes" className="filter-checkbox" /><label for="yes" className="filter-checkbox-label">Yes</label>
                                </div>
                                <div className="filter-toggle-btn-container">
                                    <button className="filter-toggle-btn">See all</button>
                                </div>
                            </div>
                            </div>
                            <div className="agency-filter">
                            <div className="filter-checkbox-heading">
                                <span>Home type</span>
                            </div>
                            <div className="filter-checkboxes">
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Bungalow" id="bungalow" name="bungalow" className="filter-checkbox" /><label for="bungalow" className="filter-checkbox-label">Bungalow</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Duplex" id="duplex" name="duplex" className="filter-checkbox" /><label for="duplex" className="filter-checkbox-label">Duplex</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Flat" id="flat" name="flat" className="filter-checkbox" /><label for="flat" className="filter-checkbox-label">Flat</label>
                                </div>
                                <div className="filter-checkbox-container">
                                <Input type="checkbox" value="Semi_detached" id="semi_detached" name="semi_detached" className="filter-checkbox" /><label for="semi_detached" className="filter-checkbox-label">Semi detached</label>
                                </div>
                                <div className="filter-toggle-btn-container">
                                    <button className="filter-toggle-btn">See all</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-section-two">
                <div className="section-mini-container">
                    <div className="home-section-two-heading">
                        <span>Sponsored</span>
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
                    </div>
                </div>
                <div className="section-mini-container">
                    <div className="home-section-two-heading">
                        <span>Browse available homes</span>
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
                    </div>
                </div>
            </div>

        </div>
    );
}


export default function HomePage() {
    return (
        <div className="hpc">
            <div className="homepage-banner-image">
                <div className="search-btn-container">
                    <Input type="search" placeholder="Search by location or agency" className="search-bar" />
                </div>
            </div>
            <Properties />

            <Footer />
        </div>
    )
}