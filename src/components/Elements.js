import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import bgQuote from '../images/quote.png';

export const Brand = styled.a`
	padding-top: 5px;
	margin: 20px;
	display: block;
	
	${breakpoint('desktop')`
		display: none;
  `}
`;

export const NavContainer = styled.nav`
	background: #FFFFFF;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0639719);
	position: fixed;
	width: 100%;
	z-index: 1;
	
	${breakpoint('desktop')`
		background: transparent;
		box-shadow: none;
		position: relative;
  `}
`;

export const Nav = styled.ul`
	display: none;
	padding: 0;
	
	${breakpoint('desktop')`
		display: flex;
		justify-content: center;
  `}
`;

export const NavItem = styled.li`
	list-style: none;
	margin-bottom: 10px;
	
	&.brand {
		display: none;
	}
	
	${breakpoint('desktop')`
	display: flex;
    margin-bottom: 0;
		
	&.brand {
		display: list-item;
	}
  `}
`;

export const NavLink = styled.a`
	padding: 1rem 0;
	margin-left: 35px;
	margin-right: 35px;
	color: #4A4A4A;
    text-decoration: none;
    text-transform: uppercase;
	font-family: Poppins;
	font-weight: 600;
	font-size: 12px;
	transition: all .35s ease;
	
	.nav-item:hover & {
		color: #797979;
	}
	
	.active-nav-item & {
		color: #FF9532;
	}
`;

export const Wrapper = styled.div`
	&.wrapper {
		padding-top: 45px;
		padding-bottom: 45px;
	}
	
	&.remove-padding-mobile {
		padding-top: 0;
		padding-bottom: 0;
	}
	
	&.bg-grey {
		background: #F8F8F8;
	}
	
	&.bg-white {
		background: #FFFFFF;
	}
	
	${breakpoint('tablet')`
	&.remove-padding-mobile {
		padding-top: 45px;
		padding-bottom: 45px;
	}
	`}
`;

export const MyRow = styled.div`
&.banner {
	height: 100vh;
}

&.heading-container {
	height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

	&.flex-column-center {
		flex-direction: column;
		align-items: center;
	}

${breakpoint('tablet')`
	&.heading-container {
		height: 60%;
	}
	
	&.flex-column-center {
		flex-direction: row;
	}
`}

&.flex-center {
	display: flex;
    justify-content: center;
	margin-bottom: 33px;
}

&.overlap {
	margin-top: -95px;
	padding-top: 40px;
	padding-bottom: 40px;
	background: #F8F8F8;
}
`;

export const Column = styled.div`
&.column {
	margin-left: 30px;
	margin-right: 30px;
}
`;

export const StyledH1 = styled.h1`
    text-transform: uppercase;
	font-family: Rubik;
	font-size: 30px;
	color: #4A4A4A;
	text-align: center;
	margin-block-start: 0;
    margin-block-end: 20px;
	
	&.light-text-weight {
		font-weight: 300;
	}
	
	&.bold-text-weight {
		font-weight: 600;
	}

  	&.month-name {
		font-size: 35px;
		line-height: 61px;
		font-weight: normal;
	}
	
	${breakpoint('tablet')`
		font-size: 40.32px;
		
  	&.month-name {
		font-size: 51px;
	}
  `}
`;

export const StyledH2 = styled.h2`
	font-family: Rubik;
	font-size: 30px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: left;
	line-height: 34px;
	margin-top: 0;
    margin-bottom: 0;
	margin-left: 0.5em;
    margin-right: 0;

	&.with-margin {
		margin-top: 1em;
		margin-bottom: 1em;
		text-align: center;
	}
	
	&.normal-text-weight {
		font-weight: 500;
	}
	
	&.light-text-weight {
		font-weight: normal;
		text-align: left;
	}
	
	&.primary-color {
		color: #FF9532;
		margin-bottom: 0.5em;
	}
	
	${breakpoint('tablet')`
		font-size: 36px;
		text-align: right;
  `}
`;

export const StyledH3 = styled.h3`
    text-transform: uppercase;
	font-family: Rubik;
	font-size: 18px;
	text-align: center;0
	margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
	margin-right: 0;
	color: #4A4A4A;
	
	${breakpoint('desktop')`
		font-size: 24px;
		margin-left: 19px;
  `}
`;

export const StyledH5 = styled.h5`
    text-transform: uppercase;
	font-family: Rubik;
	font-size: 13px;
	font-weight: 600;
	text-align: center;
	margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 12px;
	color: #4A4A4A;
`;

export const StyledP = styled.p`
	font-family: Rubik;
	font-size: 18px;
	font-weight: normal;
	line-height: 28px;
	margin-block-start: 0;
	margin-inline-start: 2em;
`;

export const StyledBlockquote = styled.blockquote`
	background: url(${bgQuote});
	background-size: cover;
    background-position: 100% 15%;
	font-family: Rubik;
	font-size: 13px;
	font-weight: normal;
	font-style: italic;
	text-align: right;
	margin-top: 72px;
    margin-bottom: 45px;
	margin-left: 110px;
    margin-right: 0px;
	
	${breakpoint('tablet')`
		margin-bottom: 0;
  `}
`;

export const BtnDefault = styled.a`
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

export const BtnFill = styled.a`
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
	margin-bottom: 15px;
	
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
	
	${breakpoint('tablet')`
		margin-bottom: 0;
  `}
`;

export const LinkDefault = styled.a`
	font-family: Rubik;
	text-decoration: none;
	text-transform: uppercase;
	font-style: normal;
	font-weight: 500;
	line-height: 13px;
	font-size: 11px;
	color: #FF9532;
`;

export const CarouselContainer = styled.div`
	&.carousel-container {
		margin-top: 45px;
		padding-left: 35px;
		padding-right: 35px;
	}
	
	&.events-carousel {
		padding-left: 0;
		padding-right: 0;
	}
	
	&.games-carousel {
		margin-bottom: 10px;
	}
`;

export const NewsItem = styled.div`
	&.news-item {
	}
`;

export const NewsImage = styled.div`
	&.news-image {
		margin: 10px;
	}
`;

export const NewsDetails = styled.div`
	&.news-details {
		margin: 24px 10px;
	}
`;

export const NewsTitle = styled.h4`
	&.news-title {
		font-family: Rubik;
		font-style: normal;
		font-weight: normal;
		line-height: 19px;
		font-size: 16px;
		color: #4A4A4A;
	}
`;

export const EventItem = styled.div`
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

export const EventDetails = styled.div`
	&.event-details {
		margin: 24px 45px;
	}
`;

export const EventTitle = styled.h4`
	&.event-title {
		font-family: Rubik;
		font-style: normal;
		font-weight: normal;
		line-height: 19px;
		font-size: 16px;
		color: #4A4A4A;
	}
`;

export const EventDate = styled.span`
	font-family: Rubik;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	font-size: 20px;

color: #4A4A4A;
`;

export const GameItem = styled.div`
	&.game-item {
	}
`;

export const GameImage = styled.div`
	&.game-image {
		padding: 0;
		margin: 0 10px;
	}
`;

export const GameDetails = styled.div`
	&.game-details {
		padding: 1px 10px;
		margin: 0 10px;
		background: #FFFFFF;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0639719);
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
	}
`;

export const GameTitle = styled.h4`
	&.game-title {
		font-family: Rubik;
		font-style: normal;
		font-weight: 600;
		line-height: 19px;
		font-size: 12px;
		color: #000000;
		margin-bottom: 10px;
	}
	
	${breakpoint('tablet')`
	&.game-title {
		font-size: 16px;
	}
  `}
  
`;

export const GameDescription = styled.p`
	&.game-desc {
		font-family: Rubik;
		font-style: normal;
		font-weight: normal;
		line-height: 19px;
		font-size: 12px;
		color: #4A4A4A;
		height: 57px;
		overflow: hidden;
		margin-top: 0;
		margin-bottom: 22px;
	}
	
	${breakpoint('tablet')`
	&.game-desc {
		font-size: 16px;
	}
  `}
`;

export const SocialLinks = styled.ul`
	padding-left: 0px;
	    display: flex;
    align-items: center;
`;

export const SocialLinksItem = styled.li`
	display: inline-block;
	padding-left: 5px;
    padding-right: 5px;
`;

export const Social = styled.a`
	font-family: Rubik;
	line-height: 13px;
	font-weight: bold;
	font-size: 13px;
	text-align: center;
	color: #4A4A4A;
	text-transform: uppercase;
	text-decoration: none;
	
	&.subscribe {
		border: 1px solid #EAEAEA;
		border-radius: 16.5px;
		padding: 9px 12px 5px;
	}
`;

export const SiteCopyright = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	line-height: normal;
	font-size: 10px;
	text-align: center;
	color: #9B9B9B;
	margin-top: 0;
	margin-bottom: 0;
`;