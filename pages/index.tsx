import type { NextPage } from 'next';
import { Navbar } from '../components/navbar';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Jeremy Guillen | Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  );
};

export default Home;
