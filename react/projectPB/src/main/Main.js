import React from 'react';
import './Main.css';
import Calc from './calc/Calc';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'currencyRate': []
        }
        this.getRate();
    }

    getRate = () => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => data.json())
            .then(data => {
                this.setState({ currencyRate: data });
            })
    }
    render() {
        return (
            <main className="site-main">
                <div className="container">
                    <h3>API PrivatBank</h3>
                    <div className="row area">
                        {this.state.currencyRate.map((key, i) => (
                            <div className="work-area a-1" key={i}>
                                <p><b>{key.ccy}</b></p>
                                <p className="add-tab">Buy:<b> {key.buy}</b></p>
                                <p className="add-tab">Sale:<b> {key.sale}</b></p>
                                <p className="add-tab">Base:<b> {key.base_ccy}</b></p>
                            </div>
                        ))}
                    </div>
                    <Calc rate={this.state.currencyRate} />
                </div>
            </main>
        );
    }
}

export default Main;
