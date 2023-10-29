import { useContext, useState } from "react";
import logo from "./../../assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../App";

const Navbar = () => {
  const { store, setStore } = useContext(AppContext);
  // console.log(store);

  const { firstName } = store;
  const [options, setOptions] = useState(false);

  return (
    <nav className="flex items-center justify-between px-20 py-3 fixed top-0 left-0 right-0">
      {/* <div> */}
      <Link to="/" className="w-1/6">
        <img src={logo} alt="Logo" />
      </Link>
      {/* </div> */}
      <ul className="flex gap-4 text-white font-medium text-xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {firstName?.length > 0 ? (
          <li
            className="relative"
            onMouseEnter={() => setOptions(true)}
            onMouseLeave={() => setOptions(false)}
          >
            <NavLink to="/profile">{firstName}</NavLink>
            {options && (
              <ul className="absolute left-0 top-[22px] mt-1 text-black bg-white">
                <li>
                  <Link className="inline-block px-4 py-2" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      setStore({});
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
