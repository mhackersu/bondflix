import collection_data from '../collection.json';
import React, { Component } from 'react';

type CollectionItem = {
    imdb_id: string;
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writers: string;
    actors: string;
    plot: string;
    country: string;
    language: string;
    metascore: string;
    poster: string;
    rating: string;
    votes: string;
    budget: string;
    opening_weekend: string;
    gross: string;
    production: string;
    type: string;
    status: string;
    sequence: string;
};

const getCollection = (): CollectionItem[] => collection_data.collection;

const PresentCollection = ({ item }: { item: CollectionItem }) => {
    return (
        <div className="collection-card">
            <p className="collection-card-title">{item.title}</p>
            <img src={item.poster} alt={item.title} />
            <p className="collection-card-plot">{item.plot}</p>
            <a className="collection-card-title-seq" href={item.sequence} target="window">Title Sequence</a>
            <p className="collection-card-released">{item.released}</p>
        </div>
    );
};

export const Collection = () => {
    const data = getCollection();
    return (
        <div>
            {data.map((item, index) => (
                <PresentCollection key={item.imdb_id} item={item} />
            ))}
        </div>
    );
};