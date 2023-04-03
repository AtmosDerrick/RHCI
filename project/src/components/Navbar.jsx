import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full">
      <div className="w-full h-[10vh] bg-gray-900  absolute "></div>

      <nav className="relative text-white w-3/4 mx-auto flex justify-between">
        <div className="py-2 flex justify-start w-full">
          <div>
            <img
              src="./images/RHCI_logo.png"
              alt="Reach Heaven Church Logo"
              className="w-16"
            />
          </div>
          <div className="text-white font-sans font-semibold text-xl py-4 ml-4  ">
            Reach Heaven Church Int.
          </div>
        </div>

        <div className="text-lg font-medium w-3/4 py-4">
          <ul className="flex justify-evenly">
            <Link to="/"><li className="mx-4">Home</li></Link>
            <Link to="/about"><li className="mx-4">Who we are</li></Link>
            <Link><li className="mx-4">Contact</li></Link>
            <Link><li className="mx-4">Giving</li></Link>
            <div className=" text-xl text-blue-500" onClick={toggleMenu}>
              <i class="fa-solid fa-bars fa-2x"></i>
            </div>
          </ul>
        </div>
      </nav>
      {menu ? (
        <div>
          <Menu />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
