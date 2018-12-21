import React, { Component } from 'react';
import logo from '../images/pxg-logo.svg';
import {Nav, NavItem } from './Elements.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navigation extends Component {

  render() {
    return (
      <Nav className="nav">
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#games">Games</AnchorLink></NavItem>
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#about">About Us</AnchorLink></NavItem>
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#">Team</AnchorLink></NavItem>
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#">Partner</AnchorLink></NavItem>
		<NavItem className="nav-item brand"><AnchorLink className="nav-link" href="#"><img src={logo} className="brand-logo" alt="logo" /></AnchorLink></NavItem>
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#">Career</AnchorLink></NavItem>
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#news">News</AnchorLink></NavItem>
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#events">Events</AnchorLink></NavItem>
		<NavItem className="nav-item"><AnchorLink className="nav-link" href="#footer">Contact</AnchorLink></NavItem>
	  </Nav>
    );
  }
}

export default Navigation;
