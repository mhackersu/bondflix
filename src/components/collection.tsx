export const Collection = () => {
	const data = getCollection();
	return(
		<div>
			<p>hello collection</p>
			<p>{data.title}</p>
		</div>
	);
};

const getCollection = () => {
	// const data = '../data.json';
	const data = {
		title: 'data collection',
	};

	return data;
}