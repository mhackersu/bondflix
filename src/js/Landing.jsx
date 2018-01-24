import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
	<div className="landing">
		<h1>BondFlix</h1>
		<Link className="component-link" to="/search">
			Browse All
		</Link>
	</div>
);

export default Landing;
