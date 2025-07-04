import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPinterest, FaLink   } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <a href="#"><FaGithub className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white/100 dark:text-black/100 hover:text-black/100 dark:hover:text-white/100 transition-all duration-500 drop-shadow-md" /></a>
      <a href="#"><FaLinkedin className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white/100 dark:text-black/100 hover:text-black/100 dark:hover:text-white/100 transition-all duration-500 drop-shadow-md ml-2" /></a>
      <a href="#"><FaTwitter className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white/100 dark:text-black/100 hover:text-black/100 dark:hover:text-white/100 transition-all duration-500 drop-shadow-md mx-2" /></a>
      <a href="#"><FaInstagram className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white/100 dark:text-black/100 hover:text-black/100 dark:hover:text-white/100 transition-all duration-500 drop-shadow-md mr-2" /></a>
      <a href="#"><FaPinterest className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white/100 dark:text-black/100 hover:text-black/100 dark:hover:text-white/100 transition-all duration-500 drop-shadow-md" /></a>
    </div>
  )
}

export default SocialIcons
