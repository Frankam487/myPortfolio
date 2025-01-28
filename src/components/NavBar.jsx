import logo from '../assets/inauguration_gaming_campus_photo.jpg';
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
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <FaFacebook className="text-2xl mx-2" />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default NavBar;
