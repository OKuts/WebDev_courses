import React from 'react';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            O: 0
        }
    }
    setRGB = () => `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)}) `;

    render() {
        return (
            <div>
                <p>{Math.random()}</p>
                <div style={{ background: this.setRGB() }}>Change background</div>
                {[1, 2, 3, 4, 5].map(i => (<p key={i}>{i}</p>))}
                {[1, 0, 1, 0].map((el, i) => el === 1
                    ? <p className="white" key={i}>el</p>
                    : <p className="black" key={i}>el</p>)}
                <p>{Array(100).fill(1).map((el, i) => el * i + 1).join(' ')}</p>
            </div>
        );
    }
}

export default App;