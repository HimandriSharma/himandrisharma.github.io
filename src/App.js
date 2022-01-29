/* eslint-disable no-lone-blocks */
import './App.css';
import MobileHome from './components/Mobile/MobileHome';
import NoneHome from './components/None/NoneHome';
import { useWindowSize } from 'react-use';
import Education from './components/Common/education';
import Skills from './components/Common/skills';

function App() {
  const size = useWindowSize();
  const isDesktop = size.width/size.height > 1.67 ;
  const isMobile = size.width/size.height < 0.88 ;
  return (
    <>
    {/* {isDesktop && (
      <div className="App">
        <Education />
      </div>
    )}
    {isMobile && (
      <div>
        <MobileHome />
      </div>
    )}
    {!isDesktop && !isMobile && (
      <NoneHome />
    )} */}
    <Skills />
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