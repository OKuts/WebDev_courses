import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <h1>First React APP</h1>
            <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt="" />
            <p>my first react app</p>
            <button className="button-primary">Default</button>
          </div>
        </div>
      </div>
      <table>
        <caption><b>Информация обо мне</b></caption>
        <tbody>
          <tr>
            <td>Имя</td>
            <td>Александр</td>
          </tr>
          <tr>
            <td>Фамилия</td>
            <td>Куц</td>
          </tr>
          <tr>
            <td>Возраст</td>
            <td>51</td>
          </tr>
          <tr>
            <td>Цель</td>
            <td>Научиться &rarr; Создавать &rarr; Зарабатывать на жизнь</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2">Занимаюсь самообучением 1,5 года</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
