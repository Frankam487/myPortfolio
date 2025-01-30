import logo from "../../public/logo.png";
import Icons from "./Icons";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center  justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="animate-logoBounce fl rounded-[110px] mx-2 h-16 md:h-24 p-1"
        />
      </div>

      <Icons />

    </nav>
  );
};

export default NavBar;
