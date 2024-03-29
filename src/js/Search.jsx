import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
				<div className="header">
					<input
						className="element-input-search"
						onChange={this.handleSearchTermChange}
						value={this.state.searchTerm}
						type="text"
						placeholder="Search"
					/>
					<Link className="search-title-bar" to="/">
						BondFlix
					</Link>
				</div>
				<div className="container-results">
					<div className="results-search">
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
			</div>
		);
	}
}

export default Search;
