import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <main className="site-main">
                <div className="container">
                    <h3>Курсы валют ПриватБанка</h3>
                    <p>API предоставляет информацию о наличных, безналичных курсах валют ПриватБанка</p>
                </div>
            </main>
        );
    }
}

export default About;
