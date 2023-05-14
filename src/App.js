import { Route, Routes } from 'react-router-dom';


// components and pages imports...
import Navmenu from "./components/Navmenu";
import Error404 from './components/Error404';
import HomePage from './pages/homepage';
import SellPage from './pages/Sell';
import LandSale from './pages/Sell_Land';
import BuildingSale from './pages/Sell_Building';
import CreateAcc from './pages/CreateAcc';
import Login from './pages/Login';
import ContactDetails from './pages/ContactDetails';
import Confirmation from './pages/Confirmation';

export default function App() {
  return (
    <div className="App App-container">
      <Navmenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path='/sell-land' element={<LandSale />} />
        <Route path="/sell-building" element={<BuildingSale />} />
        <Route path="/create-account" element={<CreateAcc />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/cd" element={<ContactDetails />} />
        <Route path="/cnf" element={<Confirmation />} />
      </Routes>
    </div>
  );
};