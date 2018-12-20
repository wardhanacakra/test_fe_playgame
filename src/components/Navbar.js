import React, { Component } from 'react';
import logo from '../images/pxg-logo.svg';
import Navigation from './Nav.js';
import MobileNav from './MobileNav.js';
import {Brand, NavContainer} from './Elements.js';
import { Row, Col } from 'react-flexbox-grid';

class Navbar extends Component {

  render() {
    return (
	<NavContainer className="nav-container">
	  <Row middle="xs" end="xs">
	  <Col xs={6}>
	  <Brand href="#"><img src={logo} className="brand-logo" /></Brand>
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
