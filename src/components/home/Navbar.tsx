import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({setSidebarIsOpen}: {setSidebarIsOpen: Function}) => {
  return (
    <nav
      className="navbar navbar-mobile 
    flex lg:hidden absolute w-screen py-5 px-3 top-0"
    >
        {/* logo */}
        Sina Sadeqi

        <button onClick={() => setSidebarIsOpen(true)} 
        className="sidebar-button "><MenuIcon /></button>
    </nav>
  );
};

export default Navbar;
