import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "react-slick";

const Wrapper = styled.div`
	&.wrapper {
		margin-top: 45px;
		margin-bottom: 45px;
	}
`;

const CarouselContainer = styled.div`
	&.carousel-container {
		margin-top: 45px;
		padding-left: 35px;
		padding-right: 35px;
	}
	
	&.events-carousel {
		padding-left: 0;
		padding-right: 0;
	}
`;

const EventItem = styled.div`
	&.event-item {
		border-top: 2px solid #969696;
	}
	&.event-item:before {
		content: '';
		display: block;
		width: 27px;
		height: 27px;
		-moz-border-radius: 13.5px;
		-webkit-border-radius: 13.5px;
		border-radius: 13.5px;
		background-color: #FF9532;
		position: absolute;
		top: -11.5px;
		margin-left: 45px;
	}
`;

const EventDetails = styled.div`
	&.event-details {
		margin: 24px 45px;
	}
`;

const EventTitle = styled.h4`
	&.event-title {
		font-family: Rubik;
		font-style: normal;
		font-weight: normal;
		line-height: 19px;
		font-size: 16px;
		color: #4A4A4A;
	}
`;

const StyledH1 = styled.h1`
    text-transform: uppercase;
	font-family: Rubik;
	font-size: 40.32px;
	color: #4A4A4A;
	text-align: center;
	margin-block-start: 0;
    margin-block-end: 20px;
	
	&.month-name {
		font-size: 51px;
		line-height: 61px;
		font-weight: normal;
	}
`;

const StyledH2 = styled.h2`
	font-family: Rubik;
	font-size: 36px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: right;
	line-height: 34px;
	margin-block-start: 0;
    margin-block-end: 0;
	color: #4A4A4A;
	
	&.primary-color {
		color: #FF9532;
	}
`;

const LinkDefault = styled.a`
	font-family: Rubik;
	text-decoration: none;
	text-transform: uppercase;
	font-style: normal;
	font-weight: 600;
	line-height: 13px;
	font-size: 11px;
	color: #FF9532;
`;

const EventDate = styled.span`
	font-family: Rubik;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	font-size: 20px;

color: #4A4A4A;
`;

class Events extends Component {

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
	  swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Wrapper className="wrapper">
		<Grid fluid className="container">
	  		<Row end="xs" middle="xs">
				<Col xs={12} md={4}>
					<StyledH2>Event</StyledH2>
					<StyledH2 className="primary-color">Calendar</StyledH2>
				</Col>
				<Col xs={12} md={4}>
					<StyledH1 className="month-name">November</StyledH1>
				</Col>
				<Col xs={12} md={4}>
					<LinkDefault href="#"> More Events ></LinkDefault>
				</Col>
			</Row>
		</Grid>
		<CarouselContainer className="carousel-container events-carousel">
        <Slider {...settings}>
          <EventItem className="event-item">
			<EventDetails className="event-details">
				<EventDate>23/11/2018</EventDate>
				<EventTitle className="event-title">BIG NEWS! Announcement for PXG Listing. Stay Tuned!</EventTitle>
			</EventDetails>
          </EventItem>
          <EventItem className="event-item">
			<EventDetails className="event-details">
				<EventDate>20/11/2018</EventDate>
				<EventTitle className="event-title">Playgame introducing The Proof Of Play to Public</EventTitle>
			</EventDetails>
          </EventItem>
          <EventItem className="event-item">
			<EventDetails className="event-details">
				<EventDate>15/11/2018</EventDate>
				<EventTitle className="event-title">Start Tower Block Competition on Telegram</EventTitle>
			</EventDetails>
          </EventItem>
          <EventItem className="event-item">
			<EventDetails className="event-details">
				<EventDate>06/11/2018</EventDate>
				<EventTitle className="event-title">Start Tower Block Competition on Telegram</EventTitle>
			</EventDetails>
          </EventItem>
        </Slider>
		</CarouselContainer>
      </Wrapper>
    );
  }
}

export default Events;
