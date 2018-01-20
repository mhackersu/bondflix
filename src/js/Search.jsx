import React from 'react';
import preload from '../../data.json';

const Search = () => (
	<div className="search">
		{preload.collection007.map(collection => (
			<div className="collection-card">
				<img alt={`${collection.title} Collection Poster`} src={`${collection.poster}`} />
				<div>
					<h3>{collection.title}</h3>
					<p>{`Budget ${collection.budget}`}</p>
					<p>{`Released ${collection.released}`}</p>
				</div>
			</div>
		))}
	</div>
);

export default Search;
