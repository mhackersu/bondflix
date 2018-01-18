import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const TheTitle = function(props) {
	return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const FirstComponent = function() {
	return ce(
		'div',
		{ id: 'first-component' },
		ce(TheTitle, { color: 'indigo', title: 'Casino Royale' }),
		ce(TheTitle, { color: 'indigo', title: 'Dr. No' }),
		ce(TheTitle, { color: 'indigo', title: 'From Russia with Love' })
	);
};

render(ce(FirstComponent), document.getElementById('app'));
