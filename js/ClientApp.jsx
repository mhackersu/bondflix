import React from 'react';
import ReactDOM from 'react-dom';
import FlixTitle from './FlixTitle';

const FlixComponent = () => {
	return (
		<div>
			<FlixTitle title="Title Placeholder" color="indigo" />
			<FlixTitle title="Title Placeholder" color="indigo" />
			<FlixTitle title="Title Placeholder" color="indigo" />
		</div>
	);
};

ReactDOM.render(<FirstComponent />, document.getElementById('app'));
