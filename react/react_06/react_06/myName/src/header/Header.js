import React from 'react';
import logo from './logo.svg';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Oeksandr Kuts" />
                    <div className="my-name">
                        <h1>Oleksandr Kuts</h1>
                        <p> ...about me </p>
                    </div>

                </header>
            </div>
        );
    }
}

export default Header;