import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Li from './Li'
import './Li.css'
class App extends React.Component {
  state = {
    openId: null
  }
  render() {
    const li = this.props.list.map((elem, i) =>
      <li className='list' key={elem.id}>
        <Li el={elem}
          show={this.state.openId === elem.id}
          onButtonClick={this.btnClick.bind(this, elem.id)}
        />
      </li>
    )

    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>App name</h1>
        </div>
        <ul>
          {li}
        </ul>
      </div>
    )
  }
  btnClick = newOpenId => this.state.openId === newOpenId ? this.setState({ openId: null }) : this.setState({ openId: newOpenId })
}
export default App;