import React from 'react';
import './Footer.css';
import Nav from '../nav/Nav';

class Footer extends React.Component {
    render() {
        let tel = this.props.tel;
        let address = this.props.adress;
        return (
            <footer className="site-footer">
                <p className="footer-caption">{this.props.caption}</p>
                <div className="footer-address">
                    <div>{tel.map(el => <span>{el}</span>)}</div>
                    <div>{address.map(el => <span>{el}</span>)}</div>
                </div>
                <p> &copy; Kuts</p>
            </footer>
        );
    }
}

export default Footer;