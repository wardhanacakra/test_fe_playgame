import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "react-slick";
import newsImg1 from '../images/news-1.jpg';
import newsImg2 from '../images/news-2.jpg';

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
`;

const NewsItem = styled.div`
	&.news-item {
	}
`;

const NewsImage = styled.div`
	&.news-image {
		margin: 10px;
	}
`;

const NewsDetails = styled.div`
	&.news-details {
		margin: 24px 10px;
	}
`;

const NewsTitle = styled.h4`
	&.news-title {
		font-family: Rubik;
		font-style: normal;
		font-weight: normal;
		line-height: 19px;
		font-size: 16px;
		color: #4A4A4A;
	}
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
	font-weight: 500;
	transition: all .35s ease;
	
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
				<img src={newsImg2} />
			</NewsImage>
			<NewsDetails className="news-details">
				<NewsTitle className="news-title">PlayGame Visits China's Thriving Blockchain Companies</NewsTitle>
				<BtnDefault className="primary-btn medium-btn" href="#">Read More</BtnDefault>
			</NewsDetails>
          </NewsItem>
          <NewsItem className="news-item">
            <NewsImage className="news-image">
				<img src={newsImg1} />
			</NewsImage>
			<NewsDetails className="news-details">
				<NewsTitle className="news-title">PlayGame.com Akan Mempercepat Pertumbuhan Bisnis Setelah Sukses Mencapai 600 Juta PXG Hard Cap Dalam Penutupan ICO</NewsTitle>
				<BtnDefault className="primary-btn medium-btn" href="#">Read More</BtnDefault>
			</NewsDetails>
          </NewsItem>
          <NewsItem className="news-item">
            <NewsImage className="news-image">
				<img src={newsImg2} />
			</NewsImage>
			<NewsDetails className="news-details">
				<NewsTitle className="news-title">PlayGame.com to Accelerate Business after Successful ICO Closing at 600 Million PXG Hard Cap</NewsTitle>
				<BtnDefault className="primary-btn medium-btn" href="#">Read More</BtnDefault>
			</NewsDetails>
          </NewsItem>
          <NewsItem className="news-item">
            <NewsImage className="news-image">
				<img src={newsImg2} />
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
