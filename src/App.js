/* eslint-disable no-lone-blocks */
import './App.css';
import Home from './components/Desktop/home';
import MobileHome from './components/Mobile/MobileHome';
import NoneHome from './components/None/NoneHome';
import { useWindowSize } from 'react-use';


function App() {
  const size = useWindowSize();
  const isDesktop = size.width/size.height > 1.67 ;
  const isMobile = size.width/size.height < 0.88 ;
  return (
    <>
    {isDesktop && (
      <div className="App">
        <Home/>
      </div>
    )}
    {isMobile && (
      <div>
        <MobileHome/>
      </div>
    )}
    {!isDesktop && !isMobile && (
      <NoneHome />
    )}
    </>
  );
}

export default App;