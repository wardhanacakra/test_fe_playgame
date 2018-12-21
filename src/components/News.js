import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "react-slick";
import newsImg1 from '../images/news-1.jpg';
import newsImg2 from '../images/news-2.jpg';
import {Wrapper, StyledH2, BtnDefault, CarouselContainer, LinkDefault, NewsItem, NewsImage, NewsDetails, NewsTitle} from './Elements.js';

class News extends Component {

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
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
					<StyledH2>Playgame</StyledH2>
					<StyledH2 className="primary-color">News</StyledH2>
				</Col>
				<Col xs={12} md={8}>
					<LinkDefault href="#"> More News ></LinkDefault>
				</Col>
			</Row>
		</Grid>
		<CarouselContainer className="carousel-container">
        <Slider {...settings}>
          <NewsItem className="news-item">
            <NewsImage className="news-image">
				<img src={newsImg2} alt="news" />
			</NewsImage>
			<NewsDetails className="news-details">
				<NewsTitle className="news-title">PlayGame Visits China's Thriving Blockchain Companies</NewsTitle>
				<BtnDefault className="primary-btn medium-btn" href="#">Read More</BtnDefault>
			</NewsDetails>
          </NewsItem>
          <NewsItem className="news-item">
            <NewsImage className="news-image">
				<img src={newsImg1} alt="news" />
			</NewsImage>
			<NewsDetails className="news-details">
				<NewsTitle className="news-title">PlayGame.com Akan Mempercepat Pertumbuhan Bisnis Setelah Sukses Mencapai 600 Juta PXG Hard Cap Dalam Penutupan ICO</NewsTitle>
				<BtnDefault className="primary-btn medium-btn" href="#">Read More</BtnDefault>
			</NewsDetails>
          </NewsItem>
          <NewsItem className="news-item">
            <NewsImage className="news-image">
				<img src={newsImg2} alt="news" />
			</NewsImage>
			<NewsDetails className="news-details">
				<NewsTitle className="news-title">PlayGame.com to Accelerate Business after Successful ICO Closing at 600 Million PXG Hard Cap</NewsTitle>
				<BtnDefault className="primary-btn medium-btn" href="#">Read More</BtnDefault>
			</NewsDetails>
          </NewsItem>
          <NewsItem className="news-item">
            <NewsImage className="news-image">
				<img src={newsImg2} alt="news" />
			</NewsImage>
			<NewsDetails className="news-details">
				<NewsTitle className="news-title">PlayGame.com to Accelerate Business after Successful ICO Closing at 600 Million PXG Hard Cap</NewsTitle>
				<BtnDefault className="primary-btn medium-btn" href="#">Read More</BtnDefault>
			</NewsDetails>
          </NewsItem>
        </Slider>
		</CarouselContainer>
      </Wrapper>
    );
  }
}

export default News;
