import React from 'react';
import './Footer.css';
class Footer extends React.Component {
    render() {
        return (
            <div className="App">
                <footer style={{ background: "black", color: "white" }}>
                    <h1>Footer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa unde architecto molestias provident assumenda magnam in distinctio numquam dicta <i>esse dolorem praesentium, aliquid accusamus aperiam</i> voluptatum. Esse quibusdam voluptates aperiam!</p>
                </footer>
            </div>
        );
    }
}

export default Footer;
