import { useContext } from "react";
import Skills from "./Skills";
import { ThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { themeColors, color } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Element name="about" className="w-full min-h-screen grid gap-8 xl:gap-0 grid-cols-1 xl:grid-cols-2 border-b-2 items-center justify-center border-black/30 dark:border-white/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center pt-18 pb-4">
        <div className="w-full">
          <h1 className={`text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:4xl transition-colors duration-500 font-bold ${themeColors[color].text}`}>— About Me</h1>
        </div>
        <div className="w-11/12 mt-4 pb-4 lg:pr-4 border-b border-black/30 dark:border-white/30">
          <p className="text-justify text-sm sm:text-base md:text-base lg:text-md xl:text-md text-black/80 dark:text-white/70 dark:font-normal">Hi, I'm Praanesh Chaturvedi — a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. I specialize in building dynamic, responsive, and user-friendly web applications using tools like React, JavaScript, HTML/CSS, Python, and MySQL. My experience includes developing authentication systems, CRUD applications, REST APIs, and interactive UIs. Currently, I work as a computer instructor, where I not only teach programming concepts but also guide students in real-world projects. I'm continuously expanding my skills in areas like DSA, React Native, and AWS to stay ahead in the evolving tech landscape.<br/><br/>I enjoy turning ideas into code, solving problems with clean architecture, and collaborating on meaningful projects. My goal is to contribute to impactful products and be a part of a team that values innovation, performance, and user experience. When I’m not coding, I’m probably experimenting with new tech stacks or helping others learn to code.</p>
        </div>
        <div className="w-11/12 mt-4 grid grid-cols-2 text-xs sm:text-sm md:text-base lg:text-md xl:text-md">
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
        <div className="w-11/12 mt-6 flex flex-row items-center justify-start">
          <a href="../public/resume.pdf" download className="text-xs md:text-sm lg:text-base xl:text-md shadow text-black/80 dark:text-white/70 outline outline-black/30 dark:outline-white/30 px-8 sm:px-8 md:px-10 lg:px-12 py-1.5 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 cursor-pointer rounded-full">Get Resume</a>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col xl:flex-row items-center justify-center">
        <div className="xl:w-1/12 xl:-rotate-90 xl:pb-4 mx-auto font-medium xl:font-bold text-lg lg:text-2xl tracking-widest text-black/50 dark:text-white/30"><h3>SKILLS</h3></div>
        <Skills />
      </motion.div>

    </Element>
  )
}

export default AboutSection;
