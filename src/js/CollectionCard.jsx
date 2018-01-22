import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const CollectionCard = props => (
	<Wrapper>
		<Image
			alt={`${props.title} Collection Poster`}
			src={`${props.poster}`}
		/>
		<div>
			<h3>{props.title}</h3>
			<p>{`Budget ${props.budget}`}</p>
			<p>{`Released ${props.released}`}</p>
			<p>{`Actors: ${props.actors}`}</p>
		</div>
	</Wrapper>
);

CollectionCard.propTypes = {
	title: string.isRequired,
	poster: string.isRequired,
	budget: string.isRequired,
	released: string.isRequired,
	actors: string.isRequired
};

export default CollectionCard;
