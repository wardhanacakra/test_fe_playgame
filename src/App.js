import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Navbar extends Component {

  render() {
    return (
      <ul>
		<li><a href="#">Games</a></li>
		<li><a href="#">About Us</a></li>
		<li><a href="#">Team</a></li>
		<li><a href="#">Partner</a></li>
		<li><a href="#">Logo</a></li>
		<li><a href="#">Career</a></li>
		<li><a href="#">News</a></li>
		<li><a href="#">Events</a></li>
		<li><a href="#">Logo</a></li>
	  </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
