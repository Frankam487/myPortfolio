import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 py-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-4xl my-16 text-center"
      >
        Mes Projets
      </motion.h2>
      <div className="flex flex-col justify-center gap-4 items-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 items-center flex flex-wrap lg:justify-between justify-center "
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full  lg:w-1/4"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded-lg flex justify-center items-center shadow-lg transition-transform duration-300 transform hover:scale-105"
                  width="250"
                  height="250"
                />
                <h2 className="p-2 text-center border-2 rounded-b-full text-purple-400 font-extrabold">Ouvrir</h2>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>{" "}
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex my-4">
                <i className="text-red-400">Technos_Used</i>
              </div>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (

                  <span
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    key={index}
                  >

                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
