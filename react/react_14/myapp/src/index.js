import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const nav = {
  main: '/',
  about: 'About',
  contacts: 'Contacts'
};

const tel = ['+380504567891', '+380934567891', '+380674567891'];
const address = ['Novomoskovsk', 'Obama str.', 'Офис 88'];

ReactDOM.render(
  <React.StrictMode>
    <App nav={nav} tel={tel} address={address} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();