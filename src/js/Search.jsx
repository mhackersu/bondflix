import React, { Component } from 'react';
import CollectionCard from './CollectionCard';
import preload from '../../data.json';

class Search extends Component {
	constructor (props) {
		super(props)

		this.state = {
			searchTerm: 'Debug Statement'
		}
	}
	render() {
		return (
			<div className="search">
				<h1>BondFlix</h1>
				<input type="text" placeholder="Search" />
				<div>
					{preload.collection007.map(collection => (
						<CollectionCard key={collection.imdb_id} {...collection} />
					))}
				</div>
			</div>
		);
	};
};

export default Search;
