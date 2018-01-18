import React from 'react';
import { render } from 'react-dom';

var ce = React.createElement;

var TheTitle = function(props) {
	return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

var FirstComponent = function() {
	return ce(
		'div',
		null,
		ce(TheTitle, { color: 'indigo', title: 'Casino Royale' }),
		ce(TheTitle, { color: 'indigo', title: 'Dr. No' }),
		ce(TheTitle, { color: 'indigo', title: 'From Russia with Love' })
	);
};

render(ce(FirstComponent), document.getElementById('app'));
