import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className="relative flex justify-end">
      <button
        className="md:hidden fixed flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white z-50"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex justify-end z-50 backdrop-blur-sm"
          onClick={closeMenu}
        >
          <div
            className={`w-1/2 h-full bg-gray-800 shadow-lg transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } duration-500 ease-in-out`}
          >
            <div className="flex flex-col h-full w-fit gap-4 px-4 py-4">
              <NavLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BurgerMenu;
