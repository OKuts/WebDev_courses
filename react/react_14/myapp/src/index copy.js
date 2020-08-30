import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import * as serviceWorker from './serviceWorker';

const nav = {
  project1: '#',
  project2: '#',
  project3: '#'
}

const tel = ['+380504567891', '+380934567891', '+380674567891'];
const adress = ['Novomoskovsk', 'Obama str.', 'Офис 88'];

ReactDOM.render(
  <React.StrictMode>
    <div className="head-main">
      <Header
        name="Oleksandr Kuts"
        slogan="Чем больше я узнаю технологий, тем отчетливее понимаю, что середина еще далеко..."
      />
      <Nav nav={nav} />
      <Main />
    </div>
    <Footer
      caption="Contacts"
      tel={tel}
      adress={adress}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();