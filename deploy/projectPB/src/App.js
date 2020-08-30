import React from 'react';
import './App.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Nav from './nav/Nav';
import About from './about/About';
import Contacts from './contacts/Contacts';
import My404 from './my404/My404';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    let nav = this.props.nav;
    return (
      <div>
        <div className="header-name" >
          <Header />
          <Router>
            <Nav nav={nav} />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
              <Route component={My404} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
