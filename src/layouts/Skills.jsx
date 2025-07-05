import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { themeColors, color } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    {label: "HTML", lavel: 90},
    {label: "CSS", lavel: 80},
    {label: "JavaScript", lavel: 75},
    {label: "Tailwind", lavel: 80},
    {label: "Bootstrap", lavel: 75},
    {label: "React", lavel: 80},
    {label: "Django", lavel: 65},

  ]

  return (
    <div className="w-11/12 p-4 xl:p-0 flex flex-col items-start text-sm font-bold text-black/90 dark:text-white/80">
      {skills.map((skill, index) => (
        <div key={index} className="w-full mb-4">
          <p className="">{skill.label}</p>
          <div className="w-full h-2 mt-1.5 bg-black/90 dark:bg-white/80 rounded-full shadow">
            <motion.div 
              ref={ref}
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.lavel}%` } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`${themeColors[color].bg} transition-colors duration-500 h-full rounded-l-full`}></motion.div>
          </div>
        </div> 
      ))}     
    </div>
  )
}

export default Skills;
