import { Link } from 'waku';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="">{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'About',
    headline: 'Bondflix',
    body: 'A collection of 007 artwork',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
