import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import list from './List';


ReactDOM.render(
  <React.StrictMode>
    <App list={list} />
  </React.StrictMode>,
  document.getElementById('root')
);
