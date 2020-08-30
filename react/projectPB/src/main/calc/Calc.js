import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'result': ''
        }
    }
    calcRate = (e) => {
        e.preventDefault();
        let current = '';
        let index = 0;
        let el = e.target.elements;
        for (const i in this.props.rate) {
            if (el[3].value === this.props.rate[i].ccy) index = i
        }
        current = el[0].checked ? this.props.rate[index].sale : this.props.rate[index].buy;

        this.setState({ result: (el[2].value * current).toFixed(2) + ' ' + this.props.rate[index].base_ccy });
    }

    cleanOut = () => this.setState({ result: '' });

    render() {
        return (
            <div>
                <h3>Currency calculator</h3>
                <div className="calc">
                    <form onSubmit={this.calcRate} onChange={this.cleanOut}>
                        <div className="calc-form">
                            <div><b>I want:</b></div>
                            <div>
                                <div>
                                    <input type="radio" name="buy" defaultValue="0" defaultChecked />
                                    <label htmlFor="buy">To buy </label>
                                </div>
                                <div>
                                    <input type="radio" name="buy" defaultValue="1" />
                                    <label htmlFor="buy">To sale </label>
                                </div>
                            </div>
                            <div>
                                <input type="number" defaultValue="150" />
                                <select>
                                    {this.props.rate.map((el, i) => <option key={i} value={el.ccy}>{el.ccy}</option>)}
                                </select>
                            </div>
                            <input type="submit" value="Сalculate" />
                            <div><b>Result:</b></div>
                            <div className="calc-out">
                                {this.state.result}
                            </div>
                        </div>
                    </form >
                </div >
            </div>
        );
    }
}

export default Calc;
