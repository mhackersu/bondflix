import React from 'react';
import { string } from 'prop-types';

const CollectionCard = props => (
	<div className="component-card">
		<div className="element-title">{props.title}</div>
		<img
			className="element-image"
			alt={`${props.title} Collection Poster`}
			src={`${props.poster}`}
		/>
		<div>
			<p className="element-plot">{`Plot: ${props.plot}`}</p>
			<p className="element-actors">{`Actors: ${props.actors}`}</p>
			<p className="element-budget">{`Budget ${props.budget}`}</p>
			<p className="element-released">{`Released ${props.released}`}</p>
		</div>
	</div>
);

CollectionCard.propTypes = {
	title: string.isRequired,
	poster: string.isRequired,
	budget: string.isRequired,
	released: string.isRequired,
	actors: string.isRequired,
	plot: string.isRequired
};

export default CollectionCard;
