var FirstComponent = function() {
	return React.createElement(
		"div",
		null,
		React.createElement("h1", null, "First Compoment.")
	);
};

ReactDOM.render(
	React.createElement(FirstComponent),
	document.getElementById("app")
);
