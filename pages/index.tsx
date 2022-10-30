import type { NextPage } from 'next';
import { Navbar } from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Navbar />
        <div className="bg-[url('/wave-background.svg')] bg-no-repeat bg-cover h-screen">
          <p>Hola mundo</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
