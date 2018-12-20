import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Nav.js';
import Toggle from '../images/toggle-menu.png';

const SmallMenu = styled.div`
  display: none;
  text-align: right;
  @media (max-width: 1025px) {
    display: block;
  }
`;

const ToggleButton = styled.a`
	margin-right: 25px;
`;

const MenuIcon = ({ onClick, icon }) => (
  <ToggleButton role="button" onClick={onClick}>
    <img src={Toggle} alt="toggle" />
  </ToggleButton>
);

const MobileMenu = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    text-align: left;
    padding-top: 10px;
    background: #FFFFFF;
	
	&.show {
		display: block;
	}
	
	&.hide {
		display: none;
	}
`;

class MobileNav extends Component {
constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  render() {
    return (
        <SmallMenu className="small-menu">
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} />
          ) : (
            <MenuIcon onClick={this.handleClick} />
          )}
          {this.state.showMenu ? <MobileMenu className="show"><Navigation /></MobileMenu> : <MobileMenu className="hide"><Navigation /></MobileMenu>}
        </SmallMenu>
    );
  }
}

export default MobileNav;
