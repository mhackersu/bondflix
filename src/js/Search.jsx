import React, { Component } from 'react';
import CollectionCard from './CollectionCard';
import preload from '../../data.json';

class Search extends Component {
	state = {
		searchTerm: ''
	};
	handleSearchTermChange = event => {
		this.setState({ searchTerm: event.target.value });
	};
	render() {
		return (
			<div className="search">
				<input
					onChange={this.handleSearchTermChange}
					value={this.state.searchTerm}
					type="text"
					placeholder="Search"
				/>
				<div>
					{preload.collection007
						.filter(
							collection =>
								`${collection.title} ${collection.plot}`
									.toUpperCase()
									.indexOf(
										this.state.searchTerm.toUpperCase()
									) >= 0
						)
						.map(collection => (
							<CollectionCard
								key={collection.imdb_id}
								{...collection}
							/>
						))}
				</div>
			</div>
		);
	}
}

export default Search;
