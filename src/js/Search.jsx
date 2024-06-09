import React from 'react';
import CollectionCard from './CollectionCard';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: '' };
	}

	handleChange = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	filterCollections = () => {
		const { searchTerm } = this.state; // Destructure state
		return this.props.collections.filter(
			(collection) =>
				`${collection.title} ${collection.plot}`
					.toUpperCase()
					.indexOf(searchTerm.toUpperCase()) >= 0,
		);
	};

	render() {
		const { searchTerm } = this.state; // Destructure state for rendering
		return (
			<div>
				<input type='text' onChange={this.handleChange} />
				<div>
					{this.filterCollections().map((collection) => (
						<CollectionCard
							key={collection.imdb_id}
							title={collection.title}
							genre={collection.genre}
							year={collection.year}
							poster={collection.poster}
							rating={collection.rating}
							votes={collection.votes}
							director={collection.director}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Search;
