import { ComputerDesktopIcon, CodeBracketSquareIcon, Squares2X2Icon, PencilSquareIcon, DocumentIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Element } from "react-scroll";

const services = [
  {
    id: 1,
    name: "Web Design",
    desc: "I can design beautifull and atrractive websites for you.",
    icon: ComputerDesktopIcon,
  },
  {
    id: 2,
    name: "Web Development",
    desc: "I can design beautifull and atrractive websites for you.",
    icon: CodeBracketSquareIcon,
  },
  {
    id: 3,
    name: "Ui / Ux Design",
    desc: "I can design beautifull and atrractive websites for you.",
    icon: Squares2X2Icon,
  },
  {
    id: 4,
    name: "Content Writing",
    desc: "I can design beautifull and atrractive websites for you.",
    icon: PencilSquareIcon,
  },
  {
    id: 5,
    name: "Cv / Resume Design",
    desc: "I can design beautifull and atrractive websites for you.",
    icon: DocumentIcon,
  },
]

const ServiceSection = () => {
  const { themeColors, color } = useContext(ThemeContext);
  return (
    <Element name='service' className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className={`text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${themeColors[color].text} font-bold transition-colors duration-500`}>What I Do?</h1>
        <div className="w-11/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 mt-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="py-4 px-2 shadow-md rounded-md flex flex-col items-center justify-center outline outline-black/10 dark:outline-white/20">
                <Icon className='w-6 sm:w-6 md:w-7 lg:w-7 xl:w-8 h-6 sm:h-6 md:h-7 lg:h-7 xl:h-8 text-black/90 dark:text-white/70 rounded-full drop-shadow' />
                <h6 className='text-sm sm:text-sm md:text-base lg:text-base xl:text-md font-medium my-1 text-black/90 dark:text-white/90 dark:font-normal'>{service.name}</h6>
                <p className='text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-center text-black/80 dark:text-white/60 dark:font-normal font-medium'>{service.desc}</p>
              </div>
              )
          })}
        </div>
      </div>
    </Element>
  )
}

export default ServiceSection;
