/* eslint-disable no-lone-blocks */
import './App.css';
import Experience from './components/experience';
import Home from './components/home';
import { useWindowSize } from 'react-use';
import Title from './AnimatedText/Title';

function App() {
  const size = useWindowSize();
  const isDesktop = size.width > 1800 ;
  return (
    <>
    {isDesktop && (
      <div className="App">
        <Home />
      </div>
    )}
    {!isDesktop && (
      <Title text="CSS HOVER MASK"/>
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