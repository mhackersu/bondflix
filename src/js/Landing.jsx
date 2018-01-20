import React from 'react';

const Landing = () => (
	<div className="landing">
		<h1>BondFlix</h1>
		<input type="text" placeholder="Search" />
		<Link to="/search">Browse All</Link>
	</div>
);

export default Landing;
