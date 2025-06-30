import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { Bars2Icon } from '@heroicons/react/24/solid';
import { ThemeContext } from "../context/ThemeContext";


const Navigation = () => {
  const { themeColors, color, setIsOpen } = useContext(ThemeContext);

  return (
    <div className="w-full h-12 bg-white/10 border-b border-white/30 shadow dark:bg-black/20 dark:border-white/10 top-0 fixed z-50 backdrop-blur-md">
      <div className="w-11/12 mx-auto h-full flex items-center justify-between">
        <a href="/" className="text-base sm:text-md md:text-lg lg:text-xl text-black/100 dark:text-white/100">Folio</a>
        <div className="">
          <a href="/" className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-3 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 ${themeColors[color].hover} hover:border-b-2 transition-colors`}>Home</a>
          <a href="/" className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-3 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 ${themeColors[color].hover} hover:border-b-2 transition-colors`}>About</a>
          <a href="/" className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 mr-3 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 ${themeColors[color].hover} hover:border-b-2 transition-colors`}>Projects</a>
          <a href="/" className={`text-xs sm:text-sm md:text-md lg:text-lg text-black/90 dark:text-white/90 hover:border-b-2 transition-colors ${themeColors[color].hover}`}>Contact</a>
        </div>
        <button onClick={() => setIsOpen(prevState => !prevState)} className='text-black/90 dark:text-white/90 w-5 sm:w-5 md:w-6 lg:w-6 h-5 sm:h-5 md:h-6 lg:h-6 flex items-center justify-center rounded-full cursor-pointer transition-all'>
        <Bars2Icon className="w-full h-full drop-shadow" />
      </button>
      </div>
    </div>
  )
}

export default Navigation;
