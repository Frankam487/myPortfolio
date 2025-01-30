import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import Icons from "./Icons";
const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-900 pb-20"
    >
      <motion.h1 className="my-10 text-center text-4xl">Plus d'infos</motion.h1>
      <div className="text-center tracking-tight mb-6">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <motion.div
          initial={{ x: 3 }}
          animate={{ x: [5, -4.4, 5] }}
          transition={{ repeat: Infinity, duration: 3.3, ease: "easeInOut" }}
          className=""
        >
          <motion.a
            href="mailto:fkamgang06@gmail.com"
            className="relative text-2xl font-semibold text-purple-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            {CONTACT.email}
          </motion.a>
        </motion.div>
      </div>
      <div className="flex justify-center items-center mr-14">
        <Icons />
      </div>
    </motion.div>
  );
};

export default Contact;
