import logo from '../assets/inauguration_gaming_campus_photo.jpg'
const NavBar = () => {
  return (
   
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" />
        </div>
      </nav>

  );
};

export default NavBar;
