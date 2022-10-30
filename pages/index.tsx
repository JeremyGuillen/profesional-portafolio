import type { NextPage } from 'next';
import { Navbar } from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Navbar />
        <section className="bg-center bg-[url('/wave-background.svg')] h-screen bg-no-repeat bg-cover md:h-[80vh] relative px-11">
          <div className="absolute top-1/3 -translate-y-1/2">
            <h1 className="text-2xl md:text-4xl text-white tracking-wide">
              Hello, my <br />
              name is
              <span className="font-medium"> Jeremy</span>
            </h1>
            <p className="pt-6 text-lg md:text-2xl text-white font-light">
              I&apos;m a software engineer with <br /> passion for innovation
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
