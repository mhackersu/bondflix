import collection_data from '../collection.json';
import React, { Component } from 'react';

type CollectionItem = {
    id: string;
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
        <div className="">
            <a className="">
              <a href={item.sequence} target="window"className="">
                <img
                  src={item.poster}
                  alt={item.title}
                  className=""
                />
              </a>
              <h2 className="">{item.title}</h2>
              <p className="">{item.year}</p>
            </a>
        </div>
    );
};

export const Collection = () => {
    const data = getCollection();
    return (
        <div>
            {data.map((item, index) => (
                <PresentCollection key={item.id} item={item} />
            ))}
        </div>
    );
};