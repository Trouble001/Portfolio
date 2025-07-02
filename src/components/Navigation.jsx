import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { Bars2Icon } from '@heroicons/react/24/solid';
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";


const Navigation = () => {
  const { themeColors, color, setIsOpen } = useContext(ThemeContext);

  return (
    <div className="w-full h-12 bg-white/10 border-b border-white/30 shadow dark:bg-black/20 dark:border-white/10 top-0 fixed z-50 backdrop-blur-md">
      <div className="w-11/12 mx-auto h-full flex items-center justify-between">
        <Link to="home" smooth={true} duration={300} className="text-base sm:text-md md:text-lg lg:text-xl text-black/100 dark:text-white/100 cursor-pointer">Folio</Link>
        <div className="">
          <Link to="home" smooth={true} duration={300} className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-3 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 ${themeColors[color].hover} cursor-pointer hover:border-b-2 transition-colors`}>Home</Link>
          <Link to="about" smooth={true} duration={300} className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-3 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 ${themeColors[color].hover} cursor-pointer hover:border-b-2 transition-colors`}>About</Link>
          <Link to="service" smooth={true} duration={300} className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-3 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 ${themeColors[color].hover} cursor-pointer hover:border-b-2 transition-colors`}>Service</Link>
          <Link to="projects" smooth={true} duration={300} className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-3 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 ${themeColors[color].hover} cursor-pointer hover:border-b-2 transition-colors`}>Projects</Link>
          <Link to="" smooth={true} duration={300} className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 hover:border-b-2 transition-colors ${themeColors[color].hover} cursor-pointer`}>Contact</Link>
        </div>
        <button onClick={() => setIsOpen(prevState => !prevState)} className='text-black/90 dark:text-white/90 w-5 sm:w-5 md:w-6 lg:w-6 h-5 sm:h-5 md:h-6 lg:h-6 flex items-center justify-center rounded-full cursor-pointer transition-all'>
        <Bars2Icon className="w-full h-full drop-shadow" />
      </button>
      </div>
    </div>
  )
}

export default Navigation;
