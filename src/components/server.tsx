// server component
import db from 'data';

import { Collection } from '../components/collection';

export const Gallery = async () => {
	const titles = await db.query('SELECT * FROM titles');

	return <Collection titles={titles} />;
};
