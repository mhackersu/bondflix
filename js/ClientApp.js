var Title = function() {
	return React.createElement(
		'div',
		null,
		React.createElement('h1', null, 'Title Component')
	);
};

var FirstComponent = function() {
	return React.createElement(
		'div',
		null,
		React.createElement(Title, null),
		React.createElement(Title, null),
		React.createElement(Title, null)
	);
};

ReactDOM.render(
	React.createElement(FirstComponent),
	document.getElementById('app')
);
