import { ComputerDesktopIcon, CodeBracketSquareIcon, Squares2X2Icon, PencilSquareIcon, DocumentIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Element } from "react-scroll";

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
  return (
    <Element name='service' className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center pt-12 md:pt-0">
        <h1 className={`text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${themeColors[color].text} font-bold transition-colors duration-500`}>What I Do?</h1>
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 mt-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="py-4 px-2 lg:px-3 shadow-md rounded-md flex flex-col items-center justify-center outline outline-black/10 dark:outline-white/20">
                <Icon className={`w-7 sm:w-7 md:w-8 lg:w-8 xl:w-9 h-7 sm:h-7 md:h-8 lg:h-8 xl:h-9 ${themeColors[color].bg} transition-colors duration-500 p-1.5 flex items-center justify-center text-white/90 rounded-full shadow`} />
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
