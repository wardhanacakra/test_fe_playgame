import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "react-slick";
import {Wrapper, CarouselContainer, StyledH2, LinkDefault, BtnFill, GameItem, GameImage, GameDetails, GameTitle, GameDescription} from '../elements/Elements.js';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.playgame.com/v1/games?offset=0&limit=100")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
	  
	  var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
	  swipeToSlide: true,
	  arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
	  
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
	  <Wrapper className="wrapper bg-grey">
		<CarouselContainer className="carousel-container games-carousel">
			<Slider {...settings}>
				{items.map(item => (
				<GameItem className="game-item" key={item.id}>
					<GameImage className="game-image">
						<img className="game-thumbnail" src={item.picture.thumbnail} alt="playgame" />
					</GameImage>
					<GameDetails className="game-details">
						<GameTitle className="game-title">{item.name}</GameTitle>
						<GameDescription className="game-desc">{item.description}</GameDescription>
					</GameDetails>
				</GameItem>
				))}
			</Slider>
		</CarouselContainer>
		<Grid fluid className="container">
			<Row end="xs">
				<Col xs={12}>
					<LinkDefault href="#">More Games ></LinkDefault>
				</Col>
			</Row>
			<Row center="xs">
				<Col xs={12} md={6}>
					<StyledH2 className="with-margin normal-text-weight">Let The Fun Begin</StyledH2>
					<BtnFill className="primary-btn large-btn" href="#">Play The Game</BtnFill>
				</Col>
			</Row>
		</Grid>
	  </Wrapper>
      );
    }
  }
}

export default Games;
