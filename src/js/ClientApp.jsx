import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import '../styles/_import.sass';

const FourZeroFour = () => <h1>404</h1>;

const App = () => (
	<BrowserRouter>
		<div className="app container-app">
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={Search} />
				<Route component={FourZeroFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

render(<App />, document.getElementById('app'));
