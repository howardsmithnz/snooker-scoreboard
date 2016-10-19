import React, { Component } from 'react';
import logo from './Snooker_triangle.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Snooker Scoreboard</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Game 1</h3>
        
<table class="tg">
  <tr>
    <th class="tg-s6z2" colspan="3">Title</th>
  </tr>
  <tr>
    <td class="tg-baqh">Photo</td>
    <td class="tg-baqh">Change Player</td>
    <td class="tg-baqh">Photo</td>
  </tr>
  <tr>
    <td class="tg-s6z2">Ronnie O'Sullivan</td>
    <td class="tg-s6z2">V</td>
    <td class="tg-s6z2">Stephen Hendry</td>
  </tr>
  <tr>
    <td class="tg-s6z2">0</td>
    <td class="tg-s6z2">Frames</td>
    <td class="tg-s6z2">0</td>
  </tr>
  <tr>
    <td class="tg-s6z2">0</td>
    <td class="tg-s6z2">Points</td>
    <td class="tg-s6z2">0</td>
  </tr>
  <tr>
    <td class="tg-s6z2">0</td>
    <td class="tg-s6z2">Break</td>
    <td class="tg-s6z2">18</td>
  </tr>
  <tr>
    <td class="tg-baqh" colspan="3">1 - 7 - 1 - 5 - 1 - 3</td>
  </tr>
</table>

<p></p>
<table class="tg">
  <tr>
    <th class="tg-yw4l" colspan="9">Add points</th>
  </tr>
  <tr>
    <td class="tg-031e">1</td>
    <td class="tg-031e">2</td>
    <td class="tg-031e">3</td>
    <td class="tg-yw4l">4</td>
    <td class="tg-yw4l">5</td>
    <td class="tg-yw4l">6</td>
    <td class="tg-yw4l">7</td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l">Foul</td>
  </tr>
</table>
      </div>
    );
  }
}

export default App;
