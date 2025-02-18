import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import Icons from "./Icons";
import AnimatedSphere from "./AnimatedSphere";
const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-900 pb-20"
    >
      <h1 className="my-10 text-center text-4xl">Plus d'infos</h1>
      <div className="text-center tracking-tight mb-6">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <div
          
        >
          <a
            href="mailto:frankamdev@gmail.com"
            className="relative text-2xl font-semibold text-purple-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mr-14">
        <Icons />
        <div className="flex items-center justify-center">
          
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
