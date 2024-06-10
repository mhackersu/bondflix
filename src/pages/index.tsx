import { Link } from 'waku';

// import { Counter } from '../components/counter';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <Link to="/collection" className="mt-4 inline-block underline">
        <p>{data.body}</p>
      </Link>
      {/*<Counter />*/}
{/*      <Link to="/about" className="mt-4 inline-block underline">
        About Bondflix
      </Link>*/}
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Bondflix',
    headline: 'Bondflix',
    body: 'Browse the collection',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
