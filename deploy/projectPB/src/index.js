import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const nav = {
  Main: '/',
  About: '/about',
  Contacts: '/contacts'
};

ReactDOM.render(
  // <React.StrictMode>
  <App nav={nav} />,
  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
