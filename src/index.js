import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import About from './components/About';
import Tech from './components/Tech';
import News from './components/News';
import Events from './components/Events';
import Games from './components/Games';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Tech />, document.getElementById('tech'));
ReactDOM.render(<News />, document.getElementById('news'));
ReactDOM.render(<Events />, document.getElementById('events'));
ReactDOM.render(<Games />, document.getElementById('games'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
