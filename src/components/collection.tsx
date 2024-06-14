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
    return collection_data;
}

class PresentCollection extends React.Component<{title: string}> {
    render() {
        return <p>{this.props.title}</p>;
    }
}

export class Collection extends React.Component {
    render() {
        // const { data } = this.props.collection_data;
        const data = getCollection();
        return (

            // <div>
            //     {
            //       Object.keys(data).map((e, i) => {
            //         <SomeComponent key={i} {...e} />
            //       })
            //     }
            // </div>

			// <div>
			  // {this.props.data.map((e, i) => 
			    // <SomeComponent key={i} item={e} />
			    // <SomeComponent key={i} title={e.title} />
			  // )}
			// </div>

            <div>
                {data.map((e: {title: string}, i: number) =>
                          <PresentCollection key={i} title={e.title} />
                )}
            </div>
        )
    }
}
