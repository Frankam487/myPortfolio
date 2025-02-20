import {  motion } from "framer-motion";
import TypingText from "./TypingText";

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
              Crafting Digital Experiences
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-5xl  tracking-tight text-transparent"
            >
              Le Magicien du Front
              <strong className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                ~
              </strong>
              End
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-10 mb-14 text-2xl text-gray-500 text-justify"
            >
              <TypingText />
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
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.2 }}
              src="./vite.svg"
              className="md:w-full h-20  object-cover mt-16
              shadow-lg rounded-4xl "
              alt="frank kamgang"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
