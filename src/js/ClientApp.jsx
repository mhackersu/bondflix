import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import '../styles/_import.sass';

const container = document.getElementById('app');
const root = createRoot(container);
const FourZeroFour = () => <h1>404</h1>;

const App = () => (
		<div className="app container-app">
			<Router>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={Search} />
				<Route component={FourZeroFour} />
			</Router>
		</div>
);

root.render(<App />);