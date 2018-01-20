import React from 'react';
import preload from '../../data.json';

const Search = () => (
	<div className="search">{preload.collection007.map(collection => <h3>{collection.title}</h3>)}</div>
);

export default Search;
