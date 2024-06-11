// server component
import db from 'collection';

export const Collection = async () => {
	const titles = await db.query('SELECT * FROM title');

	return <Collection titles={titles} />;
};
