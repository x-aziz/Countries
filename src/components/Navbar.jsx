import React from "react";
import { MdNightlightRound } from "react-icons/md";

function Navbar() {
  return (
    <nav>
      <div className="nav_right">
        <h1>Where in the world</h1>
      </div>
      <div className="nav_left">
        <MdNightlightRound />
        <p>Dark Mode</p>
      </div>
    </nav>
  );
}

export default Navbar;
