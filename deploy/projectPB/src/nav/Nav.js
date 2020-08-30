import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        let nav = this.props.nav;
        return (
            <div className='header-menu'>
                <div className="container">
                    <nav>
                        <ul className='top-menu'>
                            {Object.keys(nav).map(el => {
                                return <li key={el}><a href={nav[el]} >{el}</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Nav;
