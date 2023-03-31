import { Route, Routes } from 'react-router-dom';


// styles import...
import './App.css';

// components and pages imports...
import Navmenu from "./components/Navmenu";
import HomePage from './pages/HomePage';
import Error404 from './components/Error404';
import SellPage from './pages/Sell';
import CreateAcc from './pages/CreateAcc';
import SignIn from './pages/SignIn';

export default function App () {
  return (
    <div className="App App-container">
      <Navmenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/create-account" element={<CreateAcc />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};