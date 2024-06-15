import { Link } from 'waku';

// import { Counter } from '../components/counter';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <Header />
      {/*<Counter />*/}
      <p>{data.collectionTitle}</p>
      <Link to="/gallery">{data.buttonTitle}</Link>
      <Footer />
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
