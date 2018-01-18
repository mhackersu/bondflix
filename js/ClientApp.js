var ce = React.createElement;

var TheTitle = function(props) {
	return ce('div', null, ce('h1', null, props.title));
};

var FirstComponent = function() {
	return ce(
		'div',
		null,
		ce(TheTitle, { title: 'Casino Royale' }),
		ce(TheTitle, { title: 'Dr. No' }),
		ce(TheTitle, { title: 'From Russia with Love' })
	);
};

ReactDOM.render(ce(FirstComponent), document.getElementById('app'));
