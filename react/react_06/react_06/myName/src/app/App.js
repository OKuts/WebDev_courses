import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="head-main" >
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
