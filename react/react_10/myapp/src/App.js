import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      salary: '',
      comment: '',
      production: ''
    }
  }
  myInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    let tab = {};
    for (const key in this.state) {
      if (this.state[key]) {
        tab[key] = this.state[key];
      }
    }

    return (
      <div>
        <form >
          <fieldset>
            <legend>Введите данные:</legend>
            <p>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" onInput={this.myInput} />
            </p>
            <p>
              <label htmlFor="age">Age: </label>
              <input type="number" name="age" onInput={this.myInput} />
            </p>
            <p>
              <label htmlFor="salary">Salary: </label>
              <input type="range" step="100" min="0" max="10000" name="salary" onInput={this.myInput} />
            </p>
            <p>
              <label htmlFor="comment">Comment:</label><br />
              <textarea name="comment" onInput={this.myInput}></textarea>
            </p>
            <p>
              <label htmlFor="production">Production:</label>
              <select name="production" onInput={this.myInput}>
                <option value=""></option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
              </select>
            </p>
            <p>
              <button type="submit">Отправить</button>
            </p>
          </fieldset>
        </form >
        <table>
          <tbody>
            {Object.keys(tab).map(el => <tr key={el}><td>{el}</td><td>{tab[el]}</td></tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;