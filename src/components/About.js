import React, { Component } from 'react';
import styled from 'styled-components';
import bgAbout from '../images/bg-about.jpg';
import telegramIcon from '../images/icon-telegram.png';

const Container = styled.div`
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
`;

const Row = styled.div`
&.banner {
	height: 100vh;
}

&.heading-container {
	height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

&.flex-center {
	display: flex;
    justify-content: center;
	margin-bottom: 33px;
}
`;

const Column = styled.div`
&.column {
	margin-left: 30px;
	margin-right: 30px;
}
`;

const StyledH1 = styled.h1`
    text-transform: uppercase;
	font-family: Rubik;
	font-size: 40.32px;
	color: #4A4A4A;
	text-align: center;
	margin-block-start: 0;
    margin-block-end: 0;
	
	&.light-text-weight {
		font-weight: 300;
	}
	
	&.bold-text-weight {
		font-weight: 600;
	}
`;

const StyledH3 = styled.h3`
    text-transform: uppercase;
	font-family: Rubik;
	font-size: 24px;
	text-align: center;
	margin-block-start: 0;
    margin-block-end: 0;
	margin-top: auto;
    margin-bottom: auto;
    margin-left: 19px;
	color: #4A4A4A;
`;

const StyledH5 = styled.h5`
    text-transform: uppercase;
	font-family: Rubik;
	font-size: 13pxpx;
	font-weight: 600;
	text-align: center;
	margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 12px;
	color: #4A4A4A;
`;

const BtnDefault = styled.a`
	background: #FFFFFF;
	box-sizing: border-box;
	border-radius: 20px;
    text-decoration: none;
    text-transform: uppercase;
	margin-left: 3px;
	margin-right: 3px;
	font-family: Rubik;
	font-size: 13px;
	font-weight: 600;
	transition: all .35s ease;
	
	&.small-btn {
		padding: 8px 28px;
	}
	
	&.medium-btn {
		padding: 8px 33px;
	}
	
	&.primary-btn {
		border: 2px solid #FF9532;
		color: #FF9532;
	}
	
	&.primary-btn:hover {
		border: 2px solid #FF9532;
		color: #FFFFFF;
		background: #FF9532;
	}
	
	&.secondary-btn {
		border: 2px solid #2FA6DA;
		color: #2FA6DA;
	}
	
	&.secondary-btn:hover {
		border: 2px solid #2FA6DA;
		color: #FFFFFF;
		background: #2FA6DA;
	}
`;


class About extends Component {

  render() {
    return (
	<Container className="container">
		<Row className="banner">
			<Row className="heading-container">
				<StyledH1 className="light-text-weight">Powering Real Economy In The</StyledH1>
				<StyledH1 className="bold-text-weight">Gaming World</StyledH1>
			</Row>
			<Row className="flex-center">
				<img src={telegramIcon} />
				<StyledH3 className="bold-text-weight">Join Our Telegram</StyledH3>
			</Row>
			<Row className="flex-center">
				<Column className="column">
					<StyledH5 className="light-text-weight">Group</StyledH5>
					<Row className="flex-center">
						<BtnDefault href="#" className="secondary-btn small-btn">eng</BtnDefault>
						<BtnDefault href="#" className="secondary-btn small-btn">ind</BtnDefault>
					</Row>
				</Column>
				<Column className="column">
					<StyledH5 className="light-text-weight">Channel</StyledH5>
					<Row className="flex-center">
						<BtnDefault href="#" className="primary-btn medium-btn">playgameico</BtnDefault>
					</Row>
				</Column>
			</Row>
		</Row>
	</Container>
    );
  }
}

export default About;
