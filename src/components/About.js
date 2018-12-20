import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import telegramIcon from '../images/icon-telegram.png';
import {MyRow, StyledH1, StyledH3, StyledH5, BtnDefault, StyledP, StyledH2} from './Elements.js';

class About extends Component {

  render() {
    return (
	<Grid fluid className="container">
		<MyRow className="banner">
			<MyRow className="heading-container">
				<StyledH1 className="light-text-weight">Powering Real Economy In The</StyledH1>
				<StyledH1 className="bold-text-weight">Gaming World</StyledH1>
			</MyRow>
			<MyRow className="flex-center flex-column-center">
				<img src={telegramIcon} className="medium-icon" alt="telegram" />
				<StyledH3 className="bold-text-weight">Join Our Telegram</StyledH3>
			</MyRow>
			<Row center="xs">
				<Col xs={12} md={3}>
					<StyledH5 className="light-text-weight">Group</StyledH5>
					<MyRow className="flex-center">
						<BtnDefault href="#" className="secondary-btn small-btn">eng</BtnDefault>
						<BtnDefault href="#" className="secondary-btn small-btn">ind</BtnDefault>
					</MyRow>
				</Col>
				<Col xs={12} md={3}>
					<StyledH5 className="light-text-weight">Channel</StyledH5>
					<MyRow className="flex-center">
						<BtnDefault href="#" className="primary-btn medium-btn">playgameico</BtnDefault>
					</MyRow>
				</Col>
			</Row>
		</MyRow>
			<Row>
				<Col xs={12} md={4}>
					<StyledH2>About</StyledH2>
					<StyledH2 className="primary-color">Playgame</StyledH2>
				</Col>
				<Col xs={12} md={8}>
					<StyledP>To simplify marketing and distribution, we are creating playgame.com. A direct-to-play gaming platform where players can play HTML5 games directly from their desktop, mobile browser or even embedded on their own application. No application downloads required. Publishing your game to playgame.com is not mandatory.</StyledP>
					<StyledP>We will also be launching a crypto-powered crowdfunding platform that we called the FunFund Initiative.</StyledP>
				</Col>
			</Row>
	</Grid>
    );
  }
}

export default About;
