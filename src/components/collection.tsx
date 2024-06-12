import collection_data from '../data.json';

import React, { Component } from 'react';

// export const Collection = () => {
// 	// const data = getCollection();
// 	return(
// 		<div>
// 			<p>hello collection</p>
// 			{/*<p>{data.title}</p>*/}
// 		</div>
// 	);
// };

const getCollection = () => {
	// const data = {
	// 	title: 'data collection',
	// };

	// return data;
	// return mydata;
}

export class Collection extends React.Component {
    render() {
        const { data } = this.props.collection_data;
        return (
            // <div>
            //     {
            //       Object.keys(data).map((e, i) => {
            //         <SomeComponent key={i} {...e} />
            //       })
            //     }
            // </div>
			<div>
			  {this.props.collection_data.data.map((e, i) => 
			    // <SomeComponent key={i} item={e} />
			    <SomeComponent key={i} label={e.label} value={e.value} />
			  )}
			</div>
        )
    }
}
