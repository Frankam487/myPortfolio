
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import Icons from './Icons';
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        
        className="my-10 text-center text-4xl"
      >
        Plus d'infos
      </motion.h1>
      <div className="text-center tracking-tight mb-6">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <div className="flex justify-center items-center mr-14">

      <Icons />
      </div>
    </div>
  );
};

export default Contact;
