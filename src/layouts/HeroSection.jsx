import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myphoto from "../assets/myimage.png";


const HeroSection = () => {
  const { themeColors, color } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Element name="home" className="w-full min-h-screen lg:min-h-screen h-96 flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="">
        <div className={`w-50 h-66 ${themeColors[color].bg} transition-colors duration-500 relative shadow-md shadow-black/30 rounded-lg mx-auto mb-12 grayscale-75`}>
          <img src={myphoto} className="w-full h-72 -mt-6 -ml-8 absolute drop-shadow rounded-lg" />
        </div>
        <h5 className="text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium text-black/90 dark:text-white/90">Hello!</h5>
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-black/100 dark:text-white/100 transition-colors duration-500">I'm <span className={`transition-colors duration-500 ${themeColors[color].text}`}>Pranesh Chaturvedi</span></h3>
        <p className="text-md sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-normal text-black/80 dark:text-white/80">Full Stack Web Developer</p>
        <div className="w-full flex flex-row items-center justify-start mt-2">
          <Link to="contact" smooth={true} duration={300} className={`text-sm sm:text-sm md:text-base lg-text-base xl:text-md transition-colors duration-500 ${themeColors[color].bg} outline ${themeColors[color].outline} text-white dark:text-black px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow mr-3 lg:mr-4`}>Contact Me</Link>
          <a href="../public/resume.pdf" download className={`text-sm sm:text-sm md:text-base lg-text-base xl:text-md transition-colors duration-500 outline ${themeColors[color].outline} ${themeColors[color].text}  px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full flex items-center justify-center shadow`}>Get Resume</a>
        </div>
      </motion.div>
        {/* <PhotoHolder /> */}
    </Element>
  )
}

export default HeroSection;
