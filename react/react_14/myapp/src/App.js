import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import About from './about/About';
import Contacts from './contacts/Contacts';
import My404 from './404/404';

class App extends React.Component {
    render() {
        let nav = this.props.nav;
        let tel = this.props.tel;
        let address = this.props.address;
        return (
            <div className="App" >
                <div className="head-main" >
                    <Header
                        name="Oleksandr Kuts"
                        slogan="Чем больше технологий я узнаю, тем отчетливее понимаю, что середина еще далеко..."
                    />
                    <Router>
                        <nav >
                            <ul className="top-menu">
                                {Object.keys(nav).map(el => {
                                    return <li key={el}><a href={nav[el]} >{el}</a></li>
                                })}
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/About" component={About} />
                            <Route exact path="/Contacts" component={Contacts} />
                            <Route component={My404} />
                        </Switch>
                    </Router>
                </div>
                <Footer tel={tel} address={address} caption="Contacts" />
            </div>
        );
    }
}


export default App;