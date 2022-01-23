/* eslint-disable no-lone-blocks */
import './App.css';
import Experience from './components/Desktop/experience';
import Home from './components/Desktop/home';
import NoneHome from './components/None/NoneHome';
import { useWindowSize } from 'react-use';
import Title from './AnimatedText/Title';
import Contact from './components/Desktop/contact';
import NoneContact from './components/None/NoneContact';

function App() {
  const size = useWindowSize();
  const isDesktop = size.width/size.height > 1.67 ;
  const isMobile = size.width/size.height < 0.88 ;
  return (
    <>
    {isDesktop && (
      <div className="App">
        <Contact />
      </div>
    )}
    {!isDesktop && !isMobile && (
      <NoneContact />
    )}
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