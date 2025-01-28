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
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaFacebook className="" />
        <FaGithub className="" />
        <FaInstagram className="" />
        <FaTwitter className="" />
        <FaLinkedin className="" />
      </div>
    </nav>
  );
};

export default NavBar;
