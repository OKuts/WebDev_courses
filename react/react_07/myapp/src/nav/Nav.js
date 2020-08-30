import React from 'react';
import './Nav.css';
class Nav extends React.Component {
    render() {
        let nav = this.props.nav;
        return (
            <div className="App" >
                <nav >
                    <ul className="top-menu">
                        {Object.keys(nav).map(el => {
                            return <li><a src={nav[el]}>{el}</a></li>
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}


export default Nav;