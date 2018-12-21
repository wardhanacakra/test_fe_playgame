import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';

class Header extends Component {

  render() {
      return (
      <header className="site-header">
		<Navbar />
		<div id="about">
			<About />
		</div>
	  </header>
      );
    }
  }

export default Header;
