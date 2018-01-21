import React from 'react';
import { string } from 'prop-types';

const CollectionCard = props => (
	<div className="collection-card">
		<img alt={`${props.title} Collection Poster`} src={`${props.poster}`} />
		<div>
			<h3>{props.title}</h3>
			<p>{`Budget ${props.budget}`}</p>
			<p>{`Released ${props.released}`}</p>
		</div>
	</div>
);

CollectionCard.propTypes = {
	title: string.isRequired,
	poster: string.isRequired,
	budget: string.isRequired,
	released: string.isRequired
};

export default CollectionCard;
