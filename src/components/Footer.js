import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import imgFb from '../images/icon-facebook.svg';
import imgYtb from '../images/icon-youtube.svg';
import imgTwitter from '../images/icon-twitter.svg';
import imgMedium from '../images/icon-medium.svg';
import imgEnvelope from '../images/icon_mail.svg';
import {Wrapper, LinkDefault, SocialLinks, SocialLinksItem, Social, SiteCopyright} from './Elements.js';

class Footer extends Component {

  render() {
      return (
	  <Wrapper className="wrapper bg-white">
		<Grid fluid className="container">
			<Row middle="xs">
				<Col md={4} xs={12} className="center-xs start-md">
					<LinkDefault href="#">Privacy Policy</LinkDefault>
				</Col>
				<Col md={4} xs={12} className="center-xs">
					<SocialLinks>
						<SocialLinksItem>
							<Social href="#">
								<img src={imgFb} />
							</Social>
						</SocialLinksItem>
						<SocialLinksItem>
							<Social href="#">
								<img src={imgYtb} />
							</Social>
						</SocialLinksItem>
						<SocialLinksItem>
							<Social href="#">
								<img src={imgTwitter} />
							</Social>
						</SocialLinksItem>
						<SocialLinksItem>
							<Social href="#">
								<img src={imgMedium} />
							</Social>
						</SocialLinksItem>
						<SocialLinksItem>
							<Social href="#" className="subscribe">
								<img src={imgEnvelope} /> Subscribe Here
							</Social>
						</SocialLinksItem>
					</SocialLinks>
				</Col>
				<Col md={4} xs={12} className="center-xs end-md">
					<LinkDefault href="#">Terms & Conditions</LinkDefault>
				</Col>
				<Col xs={12} className="center-xs">
					<SiteCopyright>&#169; 2018 PlayGame Ltd. All rights reserved.</SiteCopyright>
					<SiteCopyright>All trademarks are property of their respective owners</SiteCopyright>
				</Col>
			</Row>
		</Grid>
	  </Wrapper>
      );
    }
  }

export default Footer;
