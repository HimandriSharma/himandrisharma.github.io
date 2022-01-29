/* eslint-disable no-lone-blocks */
import './App.css';
import Experience from './components/Desktop/experience';
// import NoneHome from './components/None/NoneHome';
import { useWindowSize } from 'react-use';
// import Title from './AnimatedText/Title';
// import Contact from './components/Desktop/contact';
import NoneExperience from './components/None/NoneExperience';
import MobileExperience from './components/Mobile/MobileExperience';
import Home from './components/Desktop/home';
import Skills from './components/Desktop/skills';
import Projects from './components/Common/projects';
import Education from './components/Common/education';

function App() {
  const size = useWindowSize();
  const isDesktop = size.width/size.height > 1.67 ;
  const isMobile = size.width/size.height < 0.88 ;
  return (
    // <>
    // {isDesktop && (
    //   <div className="App">
    //     <Home />
    //   </div>
    // )}
    // {isMobile && (
    //   <div>
    //     <MobileExperience />
    //   </div>
    // )}
    // {!isDesktop && !isMobile && (
    //   <NoneExperience />
    // )}
    // </>
    <>
    <Skills />
    <Projects/>
    <Education/>
    </>
  );
}

export default App;



{/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> */}