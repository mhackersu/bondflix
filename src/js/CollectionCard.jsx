import React from 'react';
import { shape, string } from 'prop-types';

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

CollectionCard.propTypes = {
	collection: shape({
		title: string.isRequired,
		poster: string.isRequired,
		budget: string.isRequired,
		released: string.isRequired
	}).isRequired
};

export default CollectionCard;
