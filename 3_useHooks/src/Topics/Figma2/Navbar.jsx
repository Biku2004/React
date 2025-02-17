// import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ text }) => (
  <li className="px-4 py-2 cursor-pointer hover:text-blue-400">{text}</li>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800">
      <h1 className="text-xl font-bold text-blue-500">Elite.</h1>
      <ul className="flex space-x-6">
        <NavItem text="Home" />
        <NavItem text="Features" />
        <NavItem text="Pricing" />
        <NavItem text="Contact" />
      </ul>
      <button className="bg-blue-500 px-4 py-2 rounded-md">Sign In</button>
    </nav>
  );
};

export default Navbar;
