import React from 'react';

const CollectionCard = props => (
	<div className="collection-card">
		<img alt={`${props.collection.title} Collection Poster`} src={`${props.collection.poster}`} />
		<div>
			<h3>{props.collection.title}</h3>
			<p>{`Budget ${props.collection.budget}`}</p>
			<p>{`Released ${props.collection.released}`}</p>
		</div>
	</div>
);

export default CollectionCard;
