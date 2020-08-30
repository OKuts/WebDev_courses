import React from 'react';
import App1 from './App1';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s1: 0,
            s2: 0,
            s3: 0
        }
    }
    static getDerivedStateFromProps(props, state) {

        return { s1: props.a1, s2: props.a2 }
    }

    componentDidMount() {
        this.setState({ s3: this.state.s1 * this.state.s2 });
    }

    render() {

        return (
            <div>
                <p>{this.props.a1}</p>
                <p>{this.props.a2}</p>
                <p>{this.state.s1}</p>
                <p>{this.state.s2}</p>
                <p>{this.state.s3}</p>
                <App1
                    z1={this.state.s3}
                />
            </div>
        );
    }
}

export default App;