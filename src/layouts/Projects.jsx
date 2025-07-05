import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import movieApp from "../assets/movieapp.png";

const projects = [
  {
    id: 1,
    name: "Movie Details App",
    type: "Frontend",
    img: movieApp,
    desc: "I successfully buid a movie details app where anyone can see polpular movies, search any movie and get movie details by id. I used ReactJs for frontend, TMDB Movie Api and Tailwind CSS for styles.",
    tools: ["React", "TMDB API", "Tailwind CSS"],
    features: ["Popular Movies List with Load More Button", "Search Specific Movie", "React Context", "Dark Light Mode"],
    githubLink: "",
    liveLink: "",
  }
];

const Projects = () => {
  const { themeColors, color } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Element name="projects">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        className="w-full min-h-screen flex items-center justify-center flex-col pt-18 xl:pt-0">
        <h1 className={`${themeColors[color].text} text-center text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold transition-colors duration-500 mb-8`}>Recent Projects</h1>
        {projects.map(project => (
          <div key={project.id} className="w-full grid grid-cols-1 gap-2 md:gap-2 lg:gap-4 xl:gap-8 lg:grid-cols-3 outline outline-black/10 dark:outline-white/20 p-6 shadow-md rounded-md">
          
          {/* First Column */}
          <div className="lg:col-span-1 rounded-md flex items-center justify-center">
            <img className={`h-auto rounded-md shadow-lg transition-colors duration-500 outline-2 ${themeColors[color].outline}`} src={project.img} alt={project.name} />
          </div>

          {/* Second Column */}
          <div className="lg:col-span-2">
            <h3 className="text-black dark:text-white/100 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-medium mb-2">{project.name}</h3>
            
            <div className="flex items-center justify-start flex-row">
              <p className={`shadow rounded-xs outline-2 ${themeColors[color].outline} transition-colors duration-500 py-0 px-1 text-center ${themeColors[color].text} text-sm sm:text-sm md:text-base lg:text-base xl:text-md`}>{project.type}</p>
              <div className={`rounded-xs w-10/12 h-0.5 ${themeColors[color].bg} mt-0.5 transition-colors duration-500`}></div>
            </div>

            <p className="text-black/80 dark:text-white/70 lg:w-10/12 text-sm sm:text-sm md:text-base lg:text-base xl:text-md my-4">{project.desc}</p>

            <div className="text-black/80 dark:text-white/80 text-sm sm:text-sm md:text-base lg:text-base xl:text-md">
              <p className="inline font-medium">Features: </p>
              {project.features.map((feature, index) => (
                <p key={index} className="inline whitespace-pre-wrap text-black/70 dark:text-white/70">{feature}{index < project.features.length - 1 && ', '}</p>
              ))}
            </div>
            <div className="text-black/80 dark:text-white/80 text-sm sm:text-sm md:text-base lg:text-base xl:text-md mb-2">
              <p className="inline font-medium">Technology: </p>
              {project.tools.map((tool, index) => (
                <p key={index} className="inline whitespace-pre-wrap text-black/70 dark:text-white/70">{tool}{index < project.tools.length - 1 && ', '}</p>
              ))}
            </div>
            <p className="text-black/80 dark:text-white/80 text-sm sm:text-sm md:text-base lg:text-base xl:text-md">Github - <span className="inline underline">MoviesApp</span></p>
            <p className="text-black/80 dark:text-white/80 text-sm sm:text-sm md:text-base lg:text-base xl:text-md">Live - <span className="inline underline">MoviesApp</span></p>
          </div>
        </div>
      ))}
    </motion.div>
    </Element>
  )
}

export default Projects;
