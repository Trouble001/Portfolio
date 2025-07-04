import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";
// import myphoto from "../assets/myimage.png";

const HeroSection = () => {
  const { themeColors, color } = useContext(ThemeContext);
  return (
    <Element name="home" className="w-full min-h-screen h-auto flex items-center justify-center border-b-2 border-black/30 dark:border-white/30">
      <div className="">
        <h5 className="text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium text-black/90 dark:text-white/90">Hello!</h5>
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-black/100 dark:text-white/100 transition-colors duration-500">I'm <span className={`transition-colors duration-500 ${themeColors[color].text}`}>Pranesh Chaturvedi</span></h3>
        <p className="text-md sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-normal text-black/80 dark:text-white/80">Full Stack Web Developer</p>
        <div className="w-full flex flex-row items-center justify-start mt-2">
          <button className={`text-sm sm:text-sm md:text-base lg-text-base xl:text-md transition-colors duration-500 ${themeColors[color].bg} outline ${themeColors[color].outline} text-white dark:text-black px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow mr-3 lg:mr-4`}>Contact Me</button>
          <a href="../public/resume.pdf" download className={`text-sm sm:text-sm md:text-base lg-text-base xl:text-md transition-colors duration-500 outline ${themeColors[color].outline} ${themeColors[color].text}  px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow`}>Get Resume</a>
        </div>
      </div>
    </Element>
  )
}

export default HeroSection;
