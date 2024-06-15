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
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href={item.sequence} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{item.year}</p>
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