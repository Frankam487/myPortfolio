
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="m-8 -mr-8 flex items-center justify-center gap-2 text-3xl">
      <a href="" target="_blank">
        <FaFacebook className="bounce-slow delay-0 text-blue-500 hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="" target="_blank">
        <FaGithub className="bounce-slow delay-500 text-gray-500 hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="" target="_blank">
        <FaInstagram className="bounce-slow delay-1000 text-pink-500 hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="https://t.me/frankam4" target='_blank'>
        <FaTelegram className="bounce-slow delay-1500 text-blue-400 hover:scale-110 transition-transform duration-300" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="bounce-slow delay-2000 text-blue-700 hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default Icons;