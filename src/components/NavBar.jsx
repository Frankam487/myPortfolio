import logo from "../assets/Screenshot 2025-01-28 165533.png";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="animate-logoBounce rounded-[110px] mx-2 h-20 p-1"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-2 text-3xl">
        <FaFacebook className="bounce-slow delay-0 text-blue-500 hover:scale-110 transition-transform duration-300" />
        <FaGithub className="bounce-slow delay-500 text-gray-500 hover:scale-110 transition-transform duration-300" />
        <FaInstagram className="bounce-slow delay-1000 text-pink-500 hover:scale-110 transition-transform duration-300" />
        <FaTwitter className="bounce-slow delay-1500 text-blue-400 hover:scale-110 transition-transform duration-300" />
        <FaLinkedin className="bounce-slow delay-2000 text-blue-700 hover:scale-110 transition-transform duration-300" />
      </div>
    </nav>
  );
};

export default NavBar;
