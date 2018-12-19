import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import imgBird from '../images/img-bird-competition.png';

const MyRow = styled.div`
&.overlap {
	margin-top: -95px;
	padding-top: 40px;
	padding-bottom: 40px;
	background: #F8F8F8;
}
`;

const StyledBlockquote = styled.blockquote`
	font-family: Rubik;
	font-size: 13px;
	font-weight: normal;
	font-style: italic;
	text-align: right;
	margin-block-start: 72px;
    margin-block-end: 0;
	margin-inline-start: 110px;
    margin-inline-end: 0px;
`;

const StyledH2 = styled.h2`
	font-family: Rubik;
	font-size: 36px;
	font-weight: normal;
	text-transform: uppercase;
	line-height: 34px;
	margin-block-start: 0;
    margin-block-end: 0;
	
	&.primary-color {
		color: #FF9532;
		margin-bottom: 40px;
	}
`;

const BtnDefault = styled.a`
	background: #FFFFFF;
	box-sizing: border-box;
	border-radius: 25px;
    text-decoration: none;
    text-transform: uppercase;
	margin-left: 10px;
	margin-right: 10px;
	font-family: Rubik;
	font-size: 14px;
	line-height: 17px;
	font-weight: 600;
	transition: all .35s ease;
	
	&.large-btn {
		padding: 22px 61.45px;
	}
	
	&.primary-btn {
		border: 2px solid #FF9532;
		background: #FF9532;
		color: #FFFFFF;
	}
	
	&.primary-btn:hover {
		border: 2px solid #FF9532;
		color: #FFFFFF;
		background: #FF9532;
	}
`;

class Tech extends Component {

  render() {
    return (
	<div className="wrapper">
	<MyRow><img src={imgBird} />
	</MyRow>
	<MyRow className="overlap">
	<Grid fluid className="container">
		<Row bottom="xs">
			<Col xs={12} md={4}>
				<StyledBlockquote><strong>Playgame Token is an ERC20 cryptocurrency token</strong> with smart contract platform enabling game publishers, developers and communities to monetise directly from cryptocurrency crowds all over the world.</StyledBlockquote>
			</Col>
			<Col xsOffset={1} xs={12} md={7}>
				<StyledH2>Curious About</StyledH2>
				<StyledH2>Technologies Behind</StyledH2>
				<StyledH2 className="primary-color">Playgame?</StyledH2>
				<Row>
					<BtnDefault className="primary-btn large-btn" href="#">One Pager</BtnDefault>
					<BtnDefault className="primary-btn large-btn" href="#">White Paper</BtnDefault>
				</Row>
			</Col>
		</Row>
	</Grid>
	</MyRow>
	</div>
    );
  }
}

export default Tech;
