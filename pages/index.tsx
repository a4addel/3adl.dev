import { Hero } from 'components/Hero';
import { Newsletter } from 'components/Newsletter';
import { Writing } from 'components/Writing';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mahmoud Abdelwahab</title>
      </Head>
      <Hero />
      <Writing />
    </div>
  );
};

export default Home;
