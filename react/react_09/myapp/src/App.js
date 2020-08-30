import React from 'react';
import './App.css';
import logo from './favicon.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mess: '',
      count: 0,
      wordMove: '',
      inputText: '',
      inputSelect: '',
      divWidth: 10,
      inputRange: '',
      display: 'none'
    }
  }
  message = () => {
    console.log('button work');
    this.setState({ mess: 'button work' });
  }

  plusCount = () => this.setState({ count: this.state.count + 1 });

  resetCount = () => this.setState({ count: 0 });

  outMove = () => this.setState({ wordMove: 'Move' });;

  getAttr = e => console.log(e.target.getAttribute('data'));

  getInput = e =>
    e.target.value.length < 6
      ? this.setState({ inputText: 'длина < 6 символов' })
      : this.setState({ inputText: e.target.value });

  getChecked = e => e.target.checked
    ? console.log('checkbox checked')
    : console.log('checkbox unchecked');

  getValue = e => console.log(e.target.value);

  getSelect = e => this.setState({ inputSelect: e.target.value });

  plusWidth = () => this.setState({ divWidth: this.state.divWidth + 3 });

  getRange = e => this.setState({ inputRange: e.target.value });

  showImg = () => this.state.display === 'none'
    ? this.setState({ display: 'block' })
    : this.setState({ display: 'none' })

  render() {
    return (
      <div>
        < button onClick={this.message} > write 'button work' to console and to &lt;p&gt;</button >
        <p>{this.state.mess}</p>
        < button onClick={this.plusCount} > count</button >
        <p>{this.state.count}</p>
        < button onClick={this.resetCount} > ResetCount</button >
        <div className='green' onMouseMove={this.outMove}>{this.state.wordMove}</div>
        < button onClick={this.getAttr} data="art-1"> Art1</button >
        < button onClick={this.getAttr} data="art-2"> Art2</button >
        <input onInput={this.getInput} />
        <p>{this.state.inputText}</p>
        <input type="checkbox" onChange={this.getChecked} />
        <input type="radio" name="radio" value="Radio 1" onChange={this.getValue} />
        <input type="radio" name="radio" value="Radio 2" onChange={this.getValue} />
        <input type="radio" name="radio" value="Radio 3" onChange={this.getValue} />
        <select onChange={this.getSelect}>
          <option value="iphone 6s" >iPhone 6S</option>
          <option value="lumia 950" >Lumia 950</option>
          <option value="nexus 5x" >Nexus 5X</option>
          <option value="galaxy s7" >Galaxy S7</option>
        </select>
        <p>{this.state.inputSelect}</p>
        <div style={{ width: this.state.divWidth + 'px', height: "20px", background: "red" }}></div>
        < button onClick={this.plusWidth} > Width + 3px</button >
        <input type="range" min="0" max="100" step="1" onChange={this.getRange} />
        <p>{this.state.inputRange}</p>
        < button onClick={this.showImg} >Image</button >
        <img src={logo} alt="predator" style={{ display: this.state.display }} />
      </div >
    )
  }
}

export default App;