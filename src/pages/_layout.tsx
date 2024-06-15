import '../styles/layout.import.css';

import type { ReactNode } from 'react';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div>
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <main>
        {children}
      </main>
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'Curator dot art - A Film Gallery Art Collection Project',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
