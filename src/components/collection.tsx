import collection_data from '../data.json';

import React, { Component } from 'react';

const getCollection = () => collection_data;

const PresentCollection = ({ title }: { title: string }) => {
    return <p>{title}</p>
};

export const Collection = () => {
    const data = getCollection();
    return (
            <div>
                {data.map((e: {title: string}, i: number) => (
                    <PresentCollection key={i} title={e.title} />
                ))}
            </div>
    );
};
