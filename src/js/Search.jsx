import React from 'react';
import PropTypes from 'prop-types';
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
		const { collections } = this.props; // Destructure props
		const { searchTerm } = this.state; // Destructure state
		return collections.filter(
			(collection) =>
				`${collection.title} ${collection.plot}`
					.toUpperCase()
					.indexOf(searchTerm.toUpperCase()) >= 0,
		);
	};

	render() {
		return (
			<div>
				<input type="text" onChange={this.handleChange} />
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

Search.propTypes = {
	collections: PropTypes.arrayOf(
		PropTypes.shape({
			imdb_id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			plot: PropTypes.string.isRequired,
			genre: PropTypes.string,
			year: PropTypes.number,
			poster: PropTypes.string,
			rating: PropTypes.string,
			votes: PropTypes.number,
			director: PropTypes.string,
		}),
	).isRequired,
};

export default Search;
