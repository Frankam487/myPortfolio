import { HERO_CONTENT } from "../constants";
import {  motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, y: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Frank Kamgang
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Developpeur Front
              <strong className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                ~
              </strong>
              End
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-10 mb-14 text-2xl text-gray-500  p-4 text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.img
              // initial={{x: 100, opacity:0}}
              // animate={{x:0, opacity: 1}}
              // transition={{duration: 1, delay: 1.2}}

              src="../../public/photo_2025-01-29_15-41-24.jpg"
              className="md:w-full  object-cover mt-16 h-dvh
              shadow-lg rounded-4xl w-5/5"
              alt="frank kamgang"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
