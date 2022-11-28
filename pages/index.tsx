/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView, Variants } from 'framer-motion';
import { Button } from 'antd';
import { DesktopOutlined, MobileOutlined, CloudServerOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Navbar } from '../components/navbar';
import { WhiteLogo } from '../components';
import { ServiceCard } from '../components/service-card';

const frontEndTools = ['Angular', 'React', 'Tailwind', 'SCSS', 'Motion'];
const mobileDevelopmentTools = ['React Native', 'Flutter'];
const fullstackDevelopmentToold = ['Angular', 'React', 'NodeJS', 'AWS'];

const fadeInAnimation: Variants = {
  hidden: {
    opacity: 0,
    translateX: -200,
    transition: { duration: 1 },
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 1 },
  },
};

const cardsInAnimation: Variants = {
  hidden: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    animationTimingFunction: 'ease-in',
  },
};

const Home: NextPage = () => {
  const ref = useRef(null);
  const servicesRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const areServicesInView = useInView(servicesRef, { once: true, amount: 0.5 });
  const controls = useAnimationControls();
  const itemsControls = useAnimationControls();
  const onSocialLinkClicked = (url: string) => {
    window.open(url, '_blank');
  };

  const cardAnimationSequence = async () => {
    if (areServicesInView) {
      itemsControls.start((i) => ({ ...cardsInAnimation.visible, transition: { duration: 1, delay: i * 0.2 } }));
    } else {
      itemsControls.start(cardsInAnimation.hidden);
    }
  };

  useEffect(() => {
    cardAnimationSequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areServicesInView]);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Navbar />
        <section className="bg-center bg-[url('/wave-background.svg')] h-screen bg-no-repeat bg-cover md:h-[80vh] relative px-11">
          <div className="absolute top-1/3 -translate-y-1/2 mb-0">
            <motion.div initial={{ opacity: 0, translateX: -400 }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.2, duration: 1 }}>
              <h1 className="text-2xl md:text-4xl text-white tracking-wide">
                Hello, my <br />
                name is
                <span className="font-medium"> Jeremy</span>
              </h1>
              <p className="pt-2 text-lg md:text-2xl text-white font-light">
                I&apos;m a software engineer with <br /> passion for innovation
              </p>
            </motion.div>
          </div>
        </section>
        {/* About me section */}
        <section className="pt-16 pb-40 bg-white" ref={ref}>
          <motion.div animate={controls} variants={fadeInAnimation} className="flex items-center w-4/5 m-auto max-w-5xl">
            <div className="flex-1 pr-7">
              <div className="flex items-center">
                <h4 className="text-xl m-0 pr-2 text-primary font-normal">About me</h4>
                <div className="flex-1 h-[5px] rounded-3xl bg-primary pl-4"></div>
              </div>
              <div className="pt-2 pb-4 text-lg">
                <p className="mb-0">Hello my name is Jeremy Guillen and I enjoy solving problems and delivering great web or mobile aplications.</p>
                <p className="mb-0">My interest in programming started in 2015 when I coded a toy card that maked a turn each time it finds a wall. Fast forward to today. </p>
                <p className="mb-0">Fast forward to the present, I&apos;m a person who loves to learn new techonologies, develop innovating apps and making the life of my clients easier with my creations and knowledge.</p>
              </div>
              <div className="flex-1 h-[5px] rounded-3xl bg-primary pl-4"></div>
            </div>
            <div className="flex-1 pl-7 z-20 flex justify-center">
              <div className=" rounded-lg image-wrapper">
                <img src="/me.JPG" alt="Beatiful picture of me" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services section */}
        <section className="py-9 bg-primary px-4">
          <h3 className="text-center text-white text-2xl pb-5">
            <span className="relative after:transition-all after:-translate-x-1/2 after:content-[''] after:absolute after:bg-white after:bottom-0 after:w-2/3 after:h-[2px] after:left-1/2">Services</span>
          </h3>
          <div ref={servicesRef} className="flex justify-center flex-wrap">
            <motion.div custom={1} animate={itemsControls} className="flex-1 px-4 max-w-[400px] h-[500px] min-w-[377px] pt-3">
              <ServiceCard title="Front end development" iconSrc={<DesktopOutlined />} description="I'll bring your ideas and designs to life and deliver you a clean and scalable project." tools={frontEndTools} />
            </motion.div>
            <motion.div custom={2} animate={itemsControls} className="flex-1 px-4 max-w-[400px] h-[500px] min-w-[377px] pt-3">
              <ServiceCard title="Mobile development" iconSrc={<MobileOutlined />} description="I'll develop and bring your mobile applications to the market in both android and ios." tools={mobileDevelopmentTools} />
            </motion.div>
            <motion.div custom={3} animate={itemsControls} className="flex-1 px-4 max-w-[400px] h-[500px] min-w-[377px] pt-3">
              <ServiceCard title="Full stack development" iconSrc={<CloudServerOutlined />} description="I'll connect your creative ideas with a system that will solve your necesities." tools={fullstackDevelopmentToold} />
            </motion.div>
          </div>
        </section>

        {/* Projects section */}
        <section className="py-9 h-96 bg-white"></section>

        {/* contact and footer section */}
        <section className="py-9 bg-primary relative">
          {/* contact div */}
          <div className="w-3/4 max-w-[1029px] py-6 px-11 absolute top-0 left-1/2 -translate-x-1/2 space-x-2 -translate-y-1/2 text-white text-xl flex-col bg-secondary rounded-xl md:flex-row flex justify-around items-center flex-wrap">
            <h5 className="text-white flex-1 text-bold m-7 md:m-0 text-center md:text-left">Let&apos;s build something</h5>
            <p className="flex-1 text-xl m-7 md:m-0 text-center">
              Wanna work together? <br /> We should chat
            </p>
            {/* todo fix this button color */}
            <Button className="flex-1" type="primary" shape="round">
              Send message
            </Button>
          </div>
          <div className="flex justify-center flex-col items-center pt-16 md:pt-0">
            <div className="relative">
              <WhiteLogo width={350} height={250} />
              <p className="text-base absolute top-3/4 left-1/2 -translate-x-1/2 w-full text-center text-white">Always trying to make the difference</p>
            </div>
            <div className="flex text-lg w-28 justify-around">
              <motion.a className="text-white" onClick={() => onSocialLinkClicked('https://github.com/JeremyGuillen')} whileHover={{ translateY: -3, scale: 1.1 }}>
                <GithubOutlined className="text-[30px]" style={{ color: '#fff' }} />
              </motion.a>
              <motion.a onClick={() => onSocialLinkClicked('https://www.linkedin.com/in/jeremy-guill%C3%A9n-dur%C3%A1n-14223b230/')} whileHover={{ translateY: -3, scale: 1.1 }}>
                <LinkedinOutlined className="text-[30px]" style={{ color: '#fff' }} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
