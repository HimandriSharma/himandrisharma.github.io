/* eslint-disable no-lone-blocks */
import './App.css';
import Home from './components/Desktop/home';
import Experience from './components/Desktop/experience';
import Contact from './components/Desktop/contact';
import MobileHome from './components/Mobile/MobileHome';
import MobileExperience from './components/Mobile/MobileExperience';
import MobileContact from './components/Mobile/MobileContact';
import NoneHome from './components/None/NoneHome';
import NoneExperience from './components/None/NoneExperience';
import NoneContact from './components/None/NoneContact';
import { useWindowSize } from 'react-use';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const size = useWindowSize();
  const isDesktop = size.width/size.height > 1.67 ;
  const isMobile = size.width/size.height < 0.88 ;
  return (
    <>
    {isDesktop && (
      <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/experience" exact element={<Experience/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
          </Routes>
      </Router>
    )}
    {isMobile && (
      <Router>
        <Routes>
            <Route path="/" exact element={<MobileHome/>}/>
            <Route path="/experience" exact element={<MobileExperience/>}/>
            <Route path="/contact" exact element={<MobileContact/>}/>
          </Routes>
      </Router>
    )}
    {!isDesktop && !isMobile && (
      <Router>
        <Routes>
            <Route path="/" exact element={<NoneHome/>}/>
            <Route path="/experience" exact element={<NoneExperience/>}/>
            <Route path="/contact" exact element={<NoneContact/>}/>
          </Routes>
      </Router>
    )}
    </>
  );
}

export default App;