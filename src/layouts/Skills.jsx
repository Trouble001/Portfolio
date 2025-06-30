import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Skills = () => {
  const { themeColors, color } = useContext(ThemeContext);

  return (
    <div className="w-11/12 p-4 xl:p-0 flex flex-col items-start text-sm font-bold text-black/90 dark:text-white/80">
      <div className="w-full mb-4">
        <p className="">HTML</p>
        <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
          <div className={`w-[90%] ${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></div>
        </div>
      </div>

      <div className="w-full mb-4">
        <p className="">CSS</p>
        <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
          <div className={`w-[80%] ${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></div>
        </div>
      </div>

      <div className="w-full mb-4">
        <p className="">JavaScript</p>
        <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
          <div className={`w-[75%] ${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></div>
        </div>
      </div>

      <div className="w-full mb-4">
        <p className="">Tailwind</p>
        <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
          <div className={`w-[80%] ${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></div>
        </div>
      </div>

      <div className="w-full mb-4">
        <p className="">Bootstrap</p>
        <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
          <div className={`w-[75%] ${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></div>
        </div>
      </div>

      <div className="w-full mb-4">
        <p className="">React</p>
        <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
          <div className={`w-[85%] ${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></div>
        </div>
      </div>

      <div className="w-full mb-4">
        <p className="">Django</p>
        <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
          <div className={`w-[70%] ${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills;
