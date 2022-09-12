/* eslint-disable no-lone-blocks */
import "./App.css";
import Home from "./components/Desktop/home";
import Experience from "./components/Desktop/experience";
import Socials from "./components/Desktop/Socials";
import MobileHome from "./components/Mobile/MobileHome";
import MobileExperience from "./components/Mobile/MobileExperience";
import MobileSocials from "./components/Mobile/MobileSocials";
import NoneHome from "./components/None/NoneHome";
import NoneExperience from "./components/None/NoneExperience";
import NoneSocials from "./components/None/NoneSocials";
import useWindowDimensions from "./useWindowDimensions";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-163181774-1"; // OUR_TRACKING_ID
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
          <Route path="/About" exact element={<Experience />} />
          <Route path="/Socials" exact element={<Socials />} />
        </Routes>
      )}
      {isMobile && (
        <Routes>
          <Route path="/" exact element={<MobileHome />} />
          <Route path="/About" exact element={<MobileExperience />} />
          <Route path="/Socials" exact element={<MobileSocials />} />
        </Routes>
      )}
      {!isMobile && !isDesktop && (
        <Routes>
          <Route path="/" exact element={<NoneHome />} />
          <Route path="/About" exact element={<NoneExperience />} />
          <Route path="/Socials" exact element={<NoneSocials />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
