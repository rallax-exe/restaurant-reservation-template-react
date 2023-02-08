import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { MelpApp } from './MelpApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    <HashRouter>
      <MelpApp />
    </HashRouter>
    {/*</BrowserRouter>*/}
  </React.StrictMode>
);
