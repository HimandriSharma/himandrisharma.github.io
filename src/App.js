/* eslint-disable no-lone-blocks */
import "./App.css";
import Home from "./components/Desktop/home";
import MobileHome from "./components/Mobile/MobileHome";
import NoneHome from "./components/None/NoneHome";
import useWindowDimensions from "./useWindowDimensions";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-163181774-1"; 
ReactGA.initialize(TRACKING_ID);
function App() {
  const ratio = useWindowDimensions();
  const isDesktop = ratio > 1.67;
  const isMobile = ratio < 0.88;
  return (
    <div className="App">
      {isDesktop && (
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      )}
      {isMobile && (
        <Routes>
          <Route path="/" exact element={<MobileHome />} />
        </Routes>
      )}
      {!isMobile && !isDesktop && (
        <Routes>
          <Route path="/" exact element={<NoneHome />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
