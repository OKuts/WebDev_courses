import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Currency exchange <br /><i><small className="h1-lesser">current course</small></i></h3>
                        </div>
                        <div className="col-lg-4 center">
                            &copy; Kuts
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
