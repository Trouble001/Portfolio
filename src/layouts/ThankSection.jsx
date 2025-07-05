import { FaGithub } from "react-icons/fa";


const ThankSection = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="py-4">
        <h5 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center font-semibold text-black/80 dark:text-white/60">Thank You For Visiting</h5>
        <h5 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center font-semibold text-black/80 dark:text-white/60">Special Thanks To</h5>
        <div>
          <FaGithub className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-white/100 dark:text-black/100 hover:text-black/100 dark:hover:text-white/100 transition-all duration-500 drop-shadow-md" />
        </div>
      </div>
    </div>
  )
}

export default ThankSection;
