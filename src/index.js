import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';

const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   ReactDOM.hydrate(
//     <React.StrictMode>
//       <HashRouter>
//         <App />
//       </HashRouter>
//     </React.StrictMode>, 
//     rootElement);
// } else {
//   ReactDOM.render(
//     <React.StrictMode>
//       <HashRouter>
//         <App />
//       </HashRouter>
//     </React.StrictMode>,
//     rootElement);
// }
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);