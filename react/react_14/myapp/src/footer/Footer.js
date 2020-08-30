import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        let tel = this.props.tel;
        let address = this.props.address;
        return (
            <footer className="site-footer">
                <p className="footer-caption">{this.props.caption}</p>
                <div className="footer-address">
                    <div>{tel.map(el => <span key={el}>{el}</span>)}</div>
                    <div>{address.map(el => <span key={el}>{el}</span>)}</div>
                </div>
                <p> &copy; Kuts</p>
            </footer>
        );
    }
}

export default Footer;