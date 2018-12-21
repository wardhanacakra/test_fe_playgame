import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "react-slick";
import {Wrapper, StyledH2, CarouselContainer, LinkDefault, StyledH1, EventItem, EventDetails, EventTitle, EventDate} from '../elements/Elements.js';

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
	  arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
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
      <Wrapper className="wrapper remove-padding-mobile">
		<Grid fluid className="container">
	  		<Row end="xs" middle="xs">
				<Col xs={12} md={4}>
					<StyledH2>Event</StyledH2>
					<StyledH2 className="primary-color">Calendar</StyledH2>
				</Col>
				<Col xs={6} md={4}>
					<StyledH1 className="month-name">November</StyledH1>
				</Col>
				<Col xs={6} md={4}>
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
