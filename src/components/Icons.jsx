import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaPython  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiDjango, SiMysql  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const Icons = () => {
  return (
    <div className="w-10/12 mx-auto py-4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 lg:grid-cols-4">
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <FaHtml5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">HTML</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <FaCss3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">CSS</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <IoLogoJavascript className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">JavaScript</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <SiTailwindcss className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">Tailwind</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <FaBootstrap className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">Bootstrap</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <FaReact className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">React</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <SiDjango className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">Django</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <SiMysql className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">MySQL</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <TbBrandCpp className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">C++</p>
      </div>
      <div className="shadow-md bg-black/5 dark:bg-white/50 text-black/90 dark:text-black/100 rounded py-2 flex flex-col items-center justify-center">
        <FaPython className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        <p className="text-xs font-bold">Python</p>
      </div>
    </div>
  )
}

export default Icons;
