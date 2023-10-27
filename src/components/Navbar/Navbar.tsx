import logo from "./../../assets/logo.webp";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-[#002c6a] via-[#00419d] to-[#002c6a] px-20 py-3 fixed top-0 left-0 right-0">
      {/* <div> */}
      <Link to="/" className="w-1/6">
        <img src={logo} alt="Logo" />
      </Link>
      {/* </div> */}
      <ul className="flex gap-4 text-white font-medium text-xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
