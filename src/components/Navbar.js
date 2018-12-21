import React, { Component } from 'react';
import logo from '../images/pxg-logo.svg';
import Navigation from './Nav.js';
import MobileNav from './MobileNav.js';
import {Brand, NavContainer} from './Elements.js';
import { Row, Col } from 'react-flexbox-grid';

class Navbar extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render() {
    return (

	<NavContainer className={this.state.isTop ? "nav-container transparent-header" : "nav-container white-header"}>
	  <Row middle="xs" end="xs" start="md">
	  <Col xs={6}>
	  <Brand href="#"><img src={logo} className="brand-logo" alt="logo" /></Brand>
	  </Col>
	  <Col xs={6}>
	  <MobileNav />
	  </Col>
	  </Row>
	  <Navigation />
	</NavContainer>
    );
  }
}

export default Navbar;
