import collection_data from '../collection.json';
import React, { Component } from 'react';

// Define the appropriate type for the collection items
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
};

// Adjust getCollection function to retrieve the correct array from collection_data
const getCollection = (): CollectionItem[] => collection_data.collection;

const PresentCollection = ({ item }: { item: CollectionItem }) => {
    return (
        <div>
            <h2>{item.title} ({item.year})</h2>
            <img src={item.poster} alt={item.title} />
            <p>{item.plot}</p>
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