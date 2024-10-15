import React from "react";
import assets from "../../assets/images/assets";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <img
        src={assets.corporatica}
        alt="logo"
        // onClick={handleReset}
      />
    </div>
  );
};

export default Navbar;
