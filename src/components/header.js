import React from "react";

const Header = () => {
  return (
    <header className="shadow-md bg-softbeige">
      <div className="p-4 max-w-7xl flex justify-between mx-auto">
        <div className="text-primary text-5xl font-Open">MA1</div>
        <nav>
          <div
            id="hamburger"
            className="flex material-icons text-6xl cursor-pointer xl:hidden"
            onClick={showExtendedHamburgerMenu}
          >
            menu
          </div>
          <ul className="hidden flex-row items-center font-Open text-xl xl:flex">
            <li className="p-2 mt-1 uppercase text-smashpink cursor-pointer">
              Home
            </li>
            <li className="p-2 mt-1 uppercase cursor-pointer">About</li>
          </ul>
        </nav>
      </div>
      <div id="hamburger-extended" className="p-4 hidden">
        <ul className="flex flex-col items-start font-Open text-xl xl:hidden ">
          <li className="p-2 mt-1 uppercase text-smashpink cursor-pointer">
            Home
          </li>
          <li className="p-2 mt-1 uppercase cursor-pointer">About</li>
        </ul>
      </div>
    </header>
  );
};
const ExtendedHamburgerMenu = document.getElementById("hamburger-extended");

function showExtendedHamburgerMenu() {
  ExtendedHamburgerMenu.classList.toggle("hidden");
}

export default Header;
