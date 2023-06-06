import React from "react";
import { Route, Routes } from "react-router-dom";

// import components and pages....
import Navmenu from "./components/Navmenu";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import SellPage from "./pages/Sell";
import CreateAcc from "./pages/CreateAcc";
import Login from "./pages/Login";
import LandSale from "./pages/Sell_Land";
import BuildingSale from "./pages/Sell_Building";
import ContactDetails from "./pages/ContactDetails";
import Confirmation from "./pages/Confirmation";
// **** import error-handling components/pages ****
import Error404 from "./components/Error404";
import ErrorBoundary from "./components/ErrorBoundary"


export default function App () {
    return (
        <div className="App">
            <ErrorBoundary>
            <Navmenu />
            </ErrorBoundary>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/sell-land" element={<LandSale />} />
                <Route path="/sell-building" element={<BuildingSale />} />
                <Route path="/cd" element={<ContactDetails />} />
                <Route path="/cnf" element={<Confirmation />} />
                <Route path="/create-account" element={<CreateAcc />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}