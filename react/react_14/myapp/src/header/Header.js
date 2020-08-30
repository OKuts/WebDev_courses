import React from 'react';
import logo from './logo.svg';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <div className="my-name">
                        <h1>{this.props.name}</h1>
                        <p> {this.props.slogan} </p>
                    </div>
                </header>
                <img src={logo} className="App-logo" alt="Oeksandr Kuts" />
            </div>
        );
    }
}

export default Header;