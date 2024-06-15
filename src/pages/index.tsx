import { Link } from 'waku';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="landing">
      <p className="landing-title">{data.collectionTitle}</p>
      <Link className="landing-button" to="/gallery">{data.buttonTitle}</Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    collectionTitle: "BondFlix",
    buttonTitle: 'Browse All',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
