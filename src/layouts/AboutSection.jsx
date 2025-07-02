import { useContext } from "react";
import Skills from "./Skills";
import { ThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";

const AboutSection = () => {
    const { themeColors, color } = useContext(ThemeContext);
  return (
    <Element name="about" className="w-full min-h-screen grid gap-8 xl:gap-0 grid-cols-1 xl:grid-cols-2 border-b-2 items-center justify-center border-black/30 dark:border-white/30">
      <div className="w-full flex flex-col items-center justify-center pt-18 xl:pt-0">
        <div className="w-11/12">
          <h1 className={`text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:4xl transition-colors duration-500 font-bold ${themeColors[color].text}`}>- About Me</h1>
        </div>
        <div className="w-10/12 mt-4 pb-4 border-b border-black/30 dark:border-white/30">
          <p className="text-left text-sm sm:text-base md:text-md lg:text-lg xl:text-lg text-black/80 dark:text-white/70 dark:font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur inventore error quasi earum voluptatem sunt qui dicta laboriosam nobis dolorem adipisci blanditiis iste voluptatum omnis commodi, labore cum officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur inventore error quasi earum voluptatem Ullam aspernatur inventore error quasi earum voluptatem</p>
        </div>
        <div className="w-10/12 mt-4 grid grid-cols-2 text-xs sm:text-sm md:text-base lg:text-md xl:text-md">
          <div>
            <p className={`${themeColors[color].text} transition-colors duration-500 font-medium`}>Name</p>
            <p className="text-black/90 dark:text-white/70">Pranesh Chaturvedi</p>
            <p className={`${themeColors[color].text} transition-colors duration-500 font-medium mt-2`}>Age</p>
            <p className="text-black/90 dark:text-white/70">29 Years</p>
          </div>

          <div>
            <p className={`${themeColors[color].text} transition-colors duration-500 font-medium`}>Email</p>
            <p className="text-black/90 dark:text-white/70">meetpraanesh@gmail.com</p>
            <p className={`${themeColors[color].text} transition-colors duration-500 font-medium mt-2`}>Address</p>
            <p className="text-black/90 dark:text-white/70">Janjgir, Chhattisgarh (India)</p>
          </div>
          
        </div>
        <div className="w-10/12 mt-6 flex flex-row items-center justify-start">
          <button className="text-xs md:text-sm lg:text-base xl:text-md shadow text-black/80 dark:text-white/70 outline outline-black/30 dark:outline-white/30 px-8 sm:px-8 md:px-10 lg:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full">Get Resume</button>
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row items-center justify-center">
        <div className="xl:w-1/12 xl:-rotate-90 xl:pb-4 mx-auto font-medium xl:font-bold text-lg lg:text-2xl tracking-widest text-black/50 dark:text-white/30"><h3>SKILLS</h3></div>
        <Skills />
      </div>

    </Element>
  )
}

export default AboutSection;
