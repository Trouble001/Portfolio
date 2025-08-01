import { ComputerDesktopIcon, CodeBracketSquareIcon, Squares2X2Icon, PencilSquareIcon, DocumentIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: 1,
    name: "Web Design",
    desc: "I can design beautifull and atrractive websites for you",
    icon: ComputerDesktopIcon,
  },
  {
    id: 2,
    name: "Web Development",
    desc: "I can develope and deploy dynamic full stack webapps for you",
    icon: CodeBracketSquareIcon,
  },
  {
    id: 3,
    name: "Ui / Ux Design",
    desc: "I can create clean responsive Ui and Ux for your brand or personal use",
    icon: Squares2X2Icon,
  },
  {
    id: 4,
    name: "Content Writing",
    desc: "I also offer content writing. I can write or manage content for you",
    icon: PencilSquareIcon,
  },
  {
    id: 5,
    name: "Cv / Resume Design",
    desc: "I can write or design ATS Friendly Resume and Cv",
    icon: DocumentIcon,
  },
]

const ServiceSection = () => {
  const { themeColors, color } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <Element name="service">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center pt-12 md:pt-0">
          <h1 className={`text-black/90 dark:text-white/80 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold transition-colors duration-500`}>What I <span className={`transition-colors duration-500 ${themeColors[color].text}`}>Do?</span></h1>
          <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 mt-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="py-4 px-2 lg:px-3 shadow-md rounded-md flex flex-col items-center justify-center outline outline-black/10 dark:outline-white/20">
                <Icon className={`w-8 sm:w-8 md:w-8 lg:w-9 xl:w-9 h-8 sm:h-8 md:h-8 lg:h-9 xl:h-9 ${themeColors[color].bg} transition-colors duration-500 p-1.5 flex items-center justify-center text-white/100 rounded-full shadow`} />
                <h6 className='text-sm sm:text-sm md:text-base lg:text-base xl:text-md font-semibold my-1 text-black/90 dark:text-white/90 dark:font-normal'>{service.name}</h6>
                <p className='text-sm sm:text-sm md:text-base lg:text-base xl:text-base text-center text-black/80 dark:text-white/60 dark:font-normal font-normal'>{service.desc}</p>
              </div>
              )
          })}
          </div>
        </div>
      </motion.div>
    </Element>
  )
}

export default ServiceSection;
