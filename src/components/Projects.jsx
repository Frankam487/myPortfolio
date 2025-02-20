// import { motion } from "framer-motion";
// import { PROJECTS } from "../constants";

// const Projects = () => {
//   return (
//     <div className="border-b border-neutral-900 py-12">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="font-bold text-4xl my-16 text-center"
//       >
//         Mes Projets
//       </motion.h2>
//       <div className="flex flex-col justify-center gap-4 items-center">
//         {PROJECTS.map((project, index) => (
//           <div
//             key={index}
//             className="mb-8 items-center flex flex-wrap lg:justify-between justify-center "
//           >
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full  lg:w-1/4"
//             >
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="mb-6 rounded-lg flex justify-center items-center shadow-lg transition-transform duration-300 transform hover:scale-105"
//                   width="250"
//                   height="250"
//                 />
//                 <div className="flex items-center">
//                 <h2 className="py-1 px-2 border rounded  mb-12 text-purple-300">Voir Le Projet</h2>
//                 <span></span>
//                 </div>
//               </a>
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>{" "}
//               <p className="mb-4 text-neutral-400">{project.description}</p>
//               <div className="flex my-4">
//                 <i className="text-red-400">Technos_Used</i>
//               </div>
//               <div className="flex flex-wrap">
//                 {project.technologies.map((tech, index) => (

//                   <span
//                     className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
//                     key={index}
//                   >

//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="border-b border-neutral-900 py-12 relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-4xl my-16 text-center"
      >
        Mes Projets
      </motion.h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex transition-transform duration-500">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center px-6 transform scale-95 transition-all duration-300 hover:scale-100"
            >
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-lg shadow-xl rounded-xl overflow-hidden"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg object-cover w-full h-64 shadow-lg transition-transform duration-300 transform hover:scale-105"
                  />
                </a>
              </motion.div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap justify-center mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="mr-2 mb-2 bg-purple-700 px-3 py-1 text-sm font-medium text-white rounded shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-500 transition-all"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-500 transition-all"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              selectedIndex === index ? "bg-purple-500 w-6" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
