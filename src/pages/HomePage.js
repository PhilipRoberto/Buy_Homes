import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

// import styles...
import "../styles/homepage.css";

// import components....
import Footer from "../components/footer";
import Input from "../components/Input";
import PropertyStocks from "../components/Stocks";


// import db....
import { sponsoredProperties, otherProperties } from "../data/db";

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
                    <div className="home-section-two-heading sponsored-heading">
                        <span>Sponsored</span>
                    </div>
                    <div className="home-section-display-grid">
                        {
                            sponsoredProperties.map((property) => {
                                return (
                                    <PropertyStocks
                                        id={property.sys.id}
                                        image={property.fields.image.fields.file.url}
                                        price={property.fields.price}
                                        listingAgent={property.fields.listingAgent}
                                        location={property.fields.location}
                                        type={property.fields.type}
                                        livingRooms={property.fields.livingrooms}
                                        bedRooms={property.fields.bedrooms}
                                        bathRooms={property.fields.bathRooms}
                                        pool={property.fields.pool}
                                        gym={property.fields.gym}
                                        size={property.fields.size}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="section-mini-container">
                    <div className="home-section-two-heading browser-heading">
                        <span>Browse available homes</span>
                    </div>

                    <div className="home-section-display-grid">
                        {
                            otherProperties.map((property) => {
                                return (
                                    <PropertyStocks
                                        id={property.sys.id}
                                        image={property.fields.image.fields.file.url}
                                        price={property.fields.price}
                                        listingAgent={property.fields.listingAgent}
                                        location={property.fields.location}
                                        type={property.fields.type}
                                        livingRooms={property.fields.livingrooms}
                                        bedRooms={property.fields.bedrooms}
                                        bathRooms={property.fields.bathRooms}
                                        pool={property.fields.pool}
                                        gym={property.fields.gym}
                                        size={property.fields.size}
                                    />
                                )
                            })
                        }
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