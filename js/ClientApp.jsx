import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

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
