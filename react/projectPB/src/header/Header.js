import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className='site-header header-top'>
                    <div className="container"></div>
                </div>
                <div className='site-header header-midle'>
                    <div className="container">
                        <h1>Currency exchange <br /><i><small className="h1-lesser">current course</small></i></h1>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
