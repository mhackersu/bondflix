import React from 'react';
import CollectionCard from './CollectionCard';
import preload from '../../data.json';

const Search = () => (
	<div className="search">
		<div>
			{preload.collection007.map(collection => (
				<CollectionCard key={collection.imdb_id} {...collection} />
			))}
		</div>
	</div>
);

export default Search;
