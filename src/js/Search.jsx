import React from 'react';
import CollectionCard from './CollectionCard';
import preload from '../../data.json';

const Search = () => (
	<div className="search">{preload.collection007.map(collection => <CollectionCard collection={collection} />)}</div>
);

export default Search;
