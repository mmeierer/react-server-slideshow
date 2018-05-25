import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Components/AppRouter/AppRouter';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.hydrate((
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
), document.getElementById('root'))
// registerServiceWorker();
