import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 32%;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;
`;

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
