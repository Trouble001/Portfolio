import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";
import myphoto from "../assets/myimage.png";

const HeroSection = () => {
  const { themeColors, color } = useContext(ThemeContext);
  return (
    <Element name="home" className="w-full min-h-screen h-auto pt-24 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 border-b-2 border-black/30 dark:border-white/30">
      <div className="w-full flex items-start lg:items-center justify-center order-2 lg:order-1">
        <div className="">
          <h5 className="text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium text-black/90 dark:text-white/90">Hello!</h5>
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-black/100 dark:text-white/100 transition-colors duration-500">I'm <span className={`transition-colors duration-500 ${themeColors[color].text}`}>Pranesh Chaturvedi</span></h3>
          <p className="text-md sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-normal text-black/80 dark:text-white/80">Full Stack Web Developer</p>
          <div className="w-full flex flex-row items-center justify-start mt-2">
            <button className={`text-sm sm:text-sm md:text-base lg-text-base xl:text-md transition-colors duration-500 ${themeColors[color].bg} outline ${themeColors[color].outline} text-white dark:text-black px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow mr-3 lg:mr-4`}>Contact Me</button>
            <button className={`text-sm sm:text-sm md:text-base lg-text-base xl:text-md transition-colors duration-500 outline ${themeColors[color].outline} ${themeColors[color].text}  px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow`}>Get Resume</button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative order-1 lg:order-2">
        <div className={`lg:w-5/12 md:w-3/12 md:h-10/12 lg:h-6/12 w-5/12 h-10/12 flex outline-6 ${themeColors[color].outline} ${themeColors[color].bg} absolute rounded grayscale-75`}>
        </div>
        <img className="lg:w-6/12 md:w-4/12 md:h-full lg:h-7/12 w-6/12 h-full drop-shadow-md absolute md:-ml-22 md:-mt-7 lg:-ml-20 lg:-mt-12 -ml-16 -mt-7.5 grayscale rounded " src={myphoto} alt="Pranesh Chaturvedi" />
      </div>
    </Element>
  )
}

export default HeroSection;
