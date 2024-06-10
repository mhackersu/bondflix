import { Link } from 'waku';

// import { Counter } from '../components/counter';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <a className="mt-4 inline-block underline">
        <a target="_blank" href="https://www.youtube.com/watch?v=U6YTbp9P-gA&list=PLDbiFUm7nzNjAtyvr6KI7kGZI_5eIo4gx&ab_channel=AvengedS939-TheJamesBondNetwork">{data.body}</a>
      </a>
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
