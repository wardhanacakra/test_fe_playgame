import React, { Component } from 'react';
import { Container } from './components/Elements.js';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
	<Container>
      <Header />
	  <Content />
	  <Footer />
	</Container>
    );
  }
}

export default App;
