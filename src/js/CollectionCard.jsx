import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 300px;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
	position: relative;
	background-color: white;
`;

const Image = styled.img`
	width: 120px;
	float: left;
	margin-right: 10px;
	margin-top: 10px;
	margin-left: 10px;
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
			<p>{`Plot: ${props.plot}`}</p>
		</div>
	</Wrapper>
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
