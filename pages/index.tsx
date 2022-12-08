/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useEffect, useRef, useState, MutableRefObject } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls, useInView, Variants } from 'framer-motion';
import { Button, Layout } from 'antd';
import { DesktopOutlined, MobileOutlined, CloudServerOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Navbar } from '../components/navbar';
import { ProjectImage } from '../components/project';
import { WhiteLogo } from '../components';
import { ServiceCard } from '../components/service-card';
import { Project } from '../types/types';
import { ContactMe } from '../components/contact-me';
import { Sidebar } from '../components/sidebar';
import developerImage from '../public/developer_image.svg';

const frontEndTools = ['Angular', 'React', 'Tailwind', 'SCSS', 'Motion'];
const mobileDevelopmentTools = ['React Native', 'Flutter'];
const fullstackDevelopmentToold = ['Angular', 'React', 'NodeJS', 'AWS'];
const { Header, Content } = Layout;
const projects: Project[] = [
  {
    name: 'Clon de twitter',
    description: 'Un clon de twitter hecho con Nextjs, Tailwind y Sanity',
    img: 'https://developer-portafolio-images.s3.amazonaws.com/Screen+Shot+2022-12-04+at+14.20.53.png',
    repository: 'https://github.com/JeremyGuillen/twitter-clone-nextjs',
  },
];

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
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(aboutMeRef, { once: true, amount: 0.5 });
  const areServicesInView = useInView(servicesCardsRef, { once: true, amount: 0 });
  const controls = useAnimationControls();
  const itemsControls = useAnimationControls();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(true);
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

  const scrollIntoView = (key: string) => {
    let ref: MutableRefObject<HTMLDivElement | null>;
    switch (key) {
      case 'home':
        ref = homeRef;
        break;
      case 'about':
        ref = aboutMeRef;
        break;
      case 'services':
        ref = servicesRef;
        break;
      case 'projects':
        ref = projectsRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        console.error(`Invalid key type: ${key}`);
        ref = homeRef;
        break;
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  };

  useEffect(() => {
    cardAnimationSequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areServicesInView]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const openContactMeModal = () => {
    setOpenModal(true);
  };

  const closeContactMeModal = () => {
    setOpenModal(false);
  };

  const toggleSider = () => {
    setSiderCollapsed(!siderCollapsed);
  };

  const onBreakSider = (broken: boolean) => {
    if (!broken && !siderCollapsed) {
      toggleSider();
    }
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100vw', top: 0, left: 0, zIndex: 100 }}>
        <Navbar onClickElement={scrollIntoView} onToggleSidebar={toggleSider} />
      </Header>
      <Layout>
        <Sidebar onClickElement={scrollIntoView} collapsed={siderCollapsed} onBreak={onBreakSider} />
        <Content>
          <div className="flex min-h-screen flex-col pt-32">
            <main>
              <section ref={homeRef} className="h-[80vh] bg-center bg-[url('/wave-background.svg')] bg-no-repeat bg-cover md:h-[80vh] relative px-11">
                <div className="absolute top-1/3 -translate-y-1/2 mb-0">
                  <motion.div initial={{ opacity: 0, translateX: -400 }} animate={{ opacity: 1, translateX: 0 }} transition={{ delay: 0.2, duration: 1 }}>
                    <h1 className="text-3xl md:text-5xl text-white tracking-wide">
                      Hola, mi <br />
                      soy
                      <span className="font-medium"> Jeremy</span>
                    </h1>
                    <p className="pt-2 text-lg md:text-4xl text-white font-light">
                      Soy un ingeniero de software <br /> apasionado por la innovación
                    </p>
                  </motion.div>
                </div>
                <div className="hidden absolute top-1/3 -translate-y-1/2 mb-0 right-[10%] md:inline xl:right-[20%]">
                  <Image src={developerImage} className="w-[300px] xl:w-[400px]" alt="developer image" />
                </div>
              </section>
              {/* About me section */}
              <section className="pb-20 pt-16 md:pb-40 bg-white" ref={aboutMeRef}>
                <motion.div animate={controls} variants={fadeInAnimation} className="flex items-center w-4/5 m-auto max-w-5xl flex-wrap">
                  <div className="flex-1 pr-7 pb-4 md:pb-0">
                    <div className="flex items-center">
                      <h4 className="text-xl m-0 pr-2 text-primary font-normal">Sobre mi</h4>
                      <div className="flex-1 h-[5px] rounded-3xl bg-primary pl-4"></div>
                    </div>
                    <div className="pt-2 pb-4 text-lg">
                      <p className="mb-0">Hola mi nombre es Jeremy Guillen y amo solucionar problemas y entregar increibles aplicaciones web y móviles.</p>
                      <p className="mb-0">Mi intéres en la programación comenzó en 2015 cuando programé un carro que giraba cada vez que encontraba una pared.</p>
                      <p className="mb-0">Ahora en la actualidad, soy una persona que ama aprender nuevas tecnologías, desarrollar aplicaciones innovadoras y hacer la vida de mis clientes más sencillas con mi conocimiento.</p>
                    </div>
                    <div className="flex-1 h-[5px] rounded-3xl bg-primary pl-4"></div>
                  </div>
                  <div className="pt-4 flex-1 pl-7 z-20 flex justify-center md:pt-0">
                    <div className=" rounded-lg image-wrapper">
                      <img src="/me.JPG" alt="Beatiful picture of me" />
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Services section */}
              <section ref={servicesRef} className="py-9 bg-primary px-4">
                <h3 className="text-center text-white text-2xl pb-5">
                  <span className="relative after:transition-all after:-translate-x-1/2 after:content-[''] after:absolute after:bg-white after:bottom-0 after:w-2/3 after:h-[2px] after:left-1/2">Servicios</span>
                </h3>
                <div ref={servicesCardsRef} className="flex justify-center flex-wrap">
                  <motion.div custom={1} animate={itemsControls} className="flex-1 px-4 max-w-[400px] h-[500px] min-w-[377px] pt-3">
                    <ServiceCard onContactClick={openContactMeModal} title="Desarrollo front end" iconSrc={<DesktopOutlined />} description="Traeré sus ideas a la vida mientras les dejo un proyecto limpio y escalable." tools={frontEndTools} />
                  </motion.div>
                  <motion.div custom={2} animate={itemsControls} className="flex-1 px-4 max-w-[400px] h-[500px] min-w-[377px] pt-3">
                    <ServiceCard onContactClick={openContactMeModal} title="Desarrollo movíl" iconSrc={<MobileOutlined />} description="Desarrollarê y enviaré sus aplicaciones al mercado tanto en Android como iOS." tools={mobileDevelopmentTools} />
                  </motion.div>
                  <motion.div custom={3} animate={itemsControls} className="flex-1 px-4 max-w-[400px] h-[500px] min-w-[377px] pt-3">
                    <ServiceCard onContactClick={openContactMeModal} title="Desarrollo full stack" iconSrc={<CloudServerOutlined />} description="Conectaré sus ideas creativas con un sistema que resolverá sus necesidades." tools={fullstackDevelopmentToold} />
                  </motion.div>
                </div>
              </section>

              {/* Projects section */}
              <section ref={projectsRef} className="pt-20 pb-48 md:pb-40 px-20 bg-white">
                <h3 className="text-center text-primary text-2xl pb-5">
                  <span className="relative after:transition-all after:-translate-x-1/2 after:content-[''] after:absolute after:bg-primary after:bottom-0 after:w-2/3 after:h-[2px] after:left-1/2">Proyectos</span>
                </h3>
                <div className="flex pt-10 pb-10 gap-8 flex-wrap justify-center">
                  {projects.map((project, index) => (
                    <div key={index} className="flex-1 w-full md:w-1/2 lg:w-1/3 max-w-md min-w-[300px] md:min-w-[400px]">
                      <ProjectImage project={project} />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button type="primary" shape="round">
                    Revisa mi github
                  </Button>
                </div>
              </section>

              {/* contact and footer section */}
              <section ref={contactRef} className="py-9 bg-primary relative">
                {/* contact div */}
                <div className="w-3/4 max-w-[1029px] py-6 px-11 absolute top-0 left-1/2 -translate-x-1/2 space-x-2 -translate-y-1/2 text-white text-xl flex-col bg-secondary rounded-xl md:flex-row flex justify-around items-center flex-wrap">
                  <h5 className="text-white flex-1 text-bold m-7 md:m-0 text-center md:text-left">Construyamos algo</h5>
                  <p className="flex-1 text-xl m-7 md:m-0 text-center">
                    Quieres trabajar juntos? <br /> Hablemos!
                  </p>
                  <Button className="flex-1" type="primary" shape="round" onClick={openContactMeModal}>
                    Contactar
                  </Button>
                </div>
                <div className="flex justify-center flex-col items-center pt-16 md:pt-0">
                  <div className="relative">
                    <WhiteLogo width={350} height={250} />
                    <p className="text-base absolute top-3/4 left-1/2 -translate-x-1/2 w-full text-center text-white">Siempre intentando hacer la diferencia</p>
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
              <ContactMe open={openModal} onCancel={closeContactMeModal} />
            </main>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
