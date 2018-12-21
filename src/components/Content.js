import React, { Component } from 'react';
import Tech from './Tech';
import News from './News';
import Events from './Events';
import Games from './Games';

class Content extends Component {

  render() {
      return (
	  <div className="content">
		<section id="tech">
			<Tech />
		</section>
		<section id="news">
			<News />
		</section>
		<section id="events">
			<Events />
		</section>
		<section id="games">
			<Games />
		</section>
	  </div>
      );
    }
  }

export default Content;
