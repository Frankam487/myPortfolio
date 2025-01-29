import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiMongodb, SiPhp } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const inconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={inconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-cyan-400 text-7xl" />
        </motion.div>

        <motion.div
          variants={inconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandTailwind className=" text-cyan-400 text-7xl" />
        </motion.div>

        <motion.div
          variants={inconVariants(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-red-700 text-7xl" />
        </motion.div>
        <motion.div
          variants={inconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPhp className="text-blue-500 text-7xl" />
        </motion.div>

        <motion.div
          variants={inconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-blue-800 text-7xl" />
        </motion.div>
        <motion.div
          variants={inconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-green-500 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Technologies;
