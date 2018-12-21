import React, { Component } from 'react';
import Tech from './contents/Tech';
import News from './contents/News';
import Events from './contents/Events';
import Games from './contents/Games';

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
