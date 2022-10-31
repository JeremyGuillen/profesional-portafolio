import type { NextPage } from 'next';
import { Navbar } from '../components/navbar';
import { ServiceCard } from '../components/service-card';
import { DesktopOutlined, MobileOutlined, CloudServerOutlined } from '@ant-design/icons';

const frontEndTools = ['Angular', 'React', 'Tailwind', 'SCSS', 'Motion'];
const mobileDevelopmentTools = ['React Native', 'Flutter'];
const fullstackDevelopmentToold = ['Angular, React, NodeJS, AWS'];

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
        {/* About me section */}
        <section className="py-6 h-96 bg-white"></section>

        {/* Services section */}
        <section className="py-9 bg-primary px-4">
          <h3 className="text-center text-white">Services</h3>
          <div className="flex justify-center">
            <div className="flex-1 px-4 max-w-[400px] h-[459px]">
              <ServiceCard title="Front end development" iconSrc={<DesktopOutlined />} description="I'll bring your ideas and designs to life and deliver you a clean and scalable project." tools={frontEndTools} />
            </div>
            <div className="flex-1 px-4 max-w-[400px] h-[459px]">
              <ServiceCard title="Mobile development" iconSrc={<MobileOutlined />} description="I'll develop and bring your mobile applications to the market in both android and ios." tools={mobileDevelopmentTools} />
            </div>
            <div className="flex-1 px-4 max-w-[400px] h-[459px]">
              <ServiceCard title="Full stack development" iconSrc={<CloudServerOutlined />} description="I'll connect your creative ideas with a system that will solve your necesities." tools={fullstackDevelopmentToold} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
