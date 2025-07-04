import { useContext } from "react";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../context/ThemeContext";
import SocialIcons from "../components/SocialIcons";
import { Element } from "react-scroll";

const ContactSection = () => {
    const { themeColors, color } = useContext(ThemeContext);
  
  return (
    <Element name="contact" className="w-full min-h-screen h-auto flex items-center justify-center">
      <div className="w-full h-full">
        <h1 className={`${themeColors[color].text} text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold transition-colors duration-500 mb-12`}>Contact Me</h1>

        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 outline outline-black/30 dark:outline-white/20 shadow-md rounded-md">
          <div className={`w-full h-full py-6 sm:py-6 md:py-8 lg:py-0 flex items-center justify-center lg:rounded-tl-md lg:rounded-bl-md transition-colors duration-500 ${themeColors[color].bg}`}>
            <SocialIcons />
          </div>
          <div className="w-full flex items-center justify-center rounded-r-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default ContactSection;
