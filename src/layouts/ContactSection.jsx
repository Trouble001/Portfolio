import { useContext } from "react";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../context/ThemeContext";
import SocialIcons from "../components/SocialIcons";
import { Element } from "react-scroll";
import { FaGithub, FaStackOverflow, FaGoogle, FaPinterest } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
    const { themeColors, color } = useContext(ThemeContext);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
 
  return (
    <Element name="contact">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 120 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="w-full min-h-screen h-auto flex items-center justify-center">
        <div className="w-full h-full pt-6">
          <h1 className={`${themeColors[color].text} text-center text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold transition-colors duration-500 mb-8`}>Contact Me</h1>
          
          <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 outline-2 ${themeColors[color].outline} transition-colors duration-500 shadow-md rounded-md`}>
            <div className={`w-full h-full py-6 sm:py-6 md:py-8 lg:py-0 flex items-center justify-center rounded-tr-md rounded-tl-md lg:rounded-tl-md lg:rounded-tr-none lg:rounded-bl-md transition-colors duration-500 ${themeColors[color].bg}`}>
              <SocialIcons />
            </div>
            <div className="w-full flex items-center justify-center rounded-r-md">
              <ContactForm />
            </div>
          </div>
          <div className="mt-14">
            <h5 className="text-sm sm:text-base md:text-md lg:text-lg xl:text-xl text-center font-medium text-black/90 dark:text-white/70">| Thank You For Visiting |</h5>
            <h5 className="text-xs sm:text-sm md:text-base lg:text-md xl:text-md text-center font-normal my-2 text-black/80 dark:text-white/60">— Special Thanks To —</h5>
            <div className="flex items-center justify-center mt-4">
              <FaGoogle className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl dark:text-white/60 text-black/80 drop-shadow-md" />
              <FaGithub className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl dark:text-white/60 text-black/80 drop-shadow-md ml-2" />
              <FaStackOverflow className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl dark:text-white/60 text-black/80 drop-shadow-md mx-2" />
              <AiOutlineOpenAI className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl dark:text-white/60 text-black/80 drop-shadow-md mr-2" />
              <FaPinterest className="text-md sm:text-md md:text-lg lg:text-xl xl:text-xl dark:text-white/60 text-black/80 drop-shadow-md" />
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  )
}

export default ContactSection;
