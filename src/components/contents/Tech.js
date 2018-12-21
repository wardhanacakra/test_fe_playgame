import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import imgBird from '../../assets/images/img-bird-competition.png';
import {MyRow, StyledBlockquote, StyledH2, BtnFill} from '../elements/Elements.js';

class Tech extends Component {

  render() {
    return (
	<div className="wrapper">
	<MyRow><img src={imgBird} alt="imgBird"/>
	</MyRow>
	<MyRow className="overlap">
	<Grid fluid className="container">
		<Row bottom="xs">
			<Col xs={12} md={4}>
				<StyledBlockquote><strong>Playgame Token is an ERC20 cryptocurrency token</strong> with smart contract platform enabling game publishers, developers and communities to monetise directly from cryptocurrency crowds all over the world.</StyledBlockquote>
			</Col>
			<Col mdOffset={1} xs={12} md={7}>
				<StyledH2 className="light-text-weight">Curious About</StyledH2>
				<StyledH2 className="light-text-weight">Technologies Behind</StyledH2>
				<StyledH2 className="light-text-weight primary-color">Playgame?</StyledH2>
				<Row>
					<BtnFill className="primary-btn large-btn" href="#">One Pager</BtnFill>
					<BtnFill className="primary-btn large-btn" href="#">White Paper</BtnFill>
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
