import React from 'react';
import { string } from 'prop-types';

const CollectionCard = ({ title, poster, plot, actors, budget, released }) => (
	<div className="component-card">
		<div className="element-title">{title}</div>
		<img
			className="element-image"
			alt={`${title} Collection Poster`}
			src={`${poster}`}
		/>
		<div>
			<p className="element-plot">{`Plot: ${plot}`}</p>
			<p className="element-actors">{`Actors: ${actors}`}</p>
			<p className="element-budget">{`Budget ${budget}`}</p>
			<p className="element-released">{`Released ${released}`}</p>
		</div>
	</div>
);

CollectionCard.propTypes = {
	title: string.isRequired,
	poster: string.isRequired,
	budget: string.isRequired,
	released: string.isRequired,
	actors: string.isRequired,
	plot: string.isRequired,
};

export default CollectionCard;
