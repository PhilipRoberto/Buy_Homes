import React from "react";
import { Link } from "react-router-dom";
import getSymbolFromCurrency from "currency-symbol-map";


// globals....
const ngn = getSymbolFromCurrency('NGN');

export default function PropertyStocks ({id, image, price, listingAgent, location, type, livingRooms, bedRooms, bathRooms, pool, gym, size }) {
    return (
        <div className="home-option-wrapper" data-id={id}>
            <Link to="/details" className="home-option-link">
                <div className="home-option-image-container">
                    <div className="home-option-image">
                        <img src={image} alt="home_image" className="home-img" />
                    </div>
                </div>
                <div className="home-option-text">
                    <div className="home-option-text-marginal-wrapper">
                        <div className="price-agency-container">
                            <div className="house-price">{ngn}{price}</div>
                            <div className="listing-agent">{listingAgent}</div>
                        </div>
                        <div className="house-location">{location}</div>
                        <div className="house-specs">
                            <div className="house-specs1">
                                <div>{type}</div>
                                <div>{livingRooms}</div>
                                <div>{bedRooms}</div>
                            </div>
                            <div className="house-specs2">
                                <div>{bathRooms}</div>
                                <div>{pool}</div>
                                <div>{gym}</div>
                                <div>{size}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}