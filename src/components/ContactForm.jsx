import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContactForm = () => {
  const { themeColors, color } = useContext(ThemeContext);
  
  return (
    <form className="w-full h-auto py-8 px-6 lg:px-8 flex flex-col items-start justify-center">
      <h4 className="mb-4 text-lg md:text-xl lg:text-xl font-medium text-black/80 dark:text-white/70">How i can help you? Send a message to me!</h4>
      <input className="w-full px-4 py-2 text-black/90 dark:text-white/80 outline outline-black/20 dark:outline-white/20 mb-4 rounded shadow" type="text" placeholder="Your Name" />
      <input className="w-full px-4 py-2 text-black/90 dark:text-white/80 outline outline-black/20 dark:outline-white/20 mb-4 rounded shadow" type="email" placeholder="Your Email" />
      <textarea className="w-full px-4 py-2 text-black/90 dark:text-white/80 outline outline-black/20 dark:outline-white/20 mb-4 rounded shadow" placeholder="Write your message here..."></textarea>
      <button className={`text-white/100 px-8 py-1.5 shadow-md rounded ${themeColors[color].bg} transition-colors duration-500`}>Send</button>
    </form>
  )
}

export default ContactForm;
