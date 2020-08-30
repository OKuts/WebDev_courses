import React from 'react';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: Array(9).fill(null),
            count: 0,
            X: 0,
            O: 0
        }
        this.game = true;
        this.victoryLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.start = ['O', 'X'];
    }

    doNewGame = (e) => {
        this.setState({ count: 0, square: Array(9).fill(null), game: true });
        this.game = true;
        if (e.target.textContent === 'Change X/O') this.start = this.start.reverse();
    }

    isResult = squares => this.victoryLine.some(el =>
        squares[el[0]] === squares[el[1]] && squares[el[0]] === squares[el[2]] && squares[el[0]] !== null);

    doStep = e => {
        let step;
        let num = e.target.getAttribute('data');
        let squares = this.state.square;
        if (!squares[num] && this.game) {
            step = this.state.count % 2 ? this.start[0] : this.start[1];
            squares[num] = step;
            this.setState({ count: this.state.count + 1, square: squares });
            if (this.state.count > 3 && this.isResult(squares)) {
                this.game = false;
                this.setState({ [step]: this.state[step] + 1 });
                setTimeout(() => { alert("Victory - " + step) }, 0)
            } else if (this.state.count > 7) {
                this.game = false;
                setTimeout(() => { alert("Draw") }, 0)
            }
        }
    }

    render() {
        return (
            <div>
                <div className="info">
                    <div className="alert alert-primary">X - {this.state.X}</div>
                    <div className="alert alert-info">O - {this.state.O}</div>
                </div>
                <div className="tic-tac-toe">
                    {this.state.square.map((el, i) =>
                        <div onClick={this.doStep} data={i} key={i} className="square">{el}</div>
                    )}
                </div>
                <div className="info">
                    <button onClick={this.doNewGame} className="btn btn-success">New game</button>
                    <button onClick={this.doNewGame} className="btn btn-success">Change X/O</button>
                </div>
            </div>
        );
    }
}

export default App;