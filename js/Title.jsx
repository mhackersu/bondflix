import React from 'react';

const TheTitle = function(props) {
	return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

export default Title;
