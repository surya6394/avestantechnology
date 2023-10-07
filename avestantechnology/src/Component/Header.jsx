import React, { useEffect, useState } from "react";
import logo from "../images/logo1.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiFillHome, AiOutlineBell} from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className="bg-bgclr">
        <nav className="flex justify-between h-24  items-center w-[92%] pt-2 mx-auto text-white">
          <div>
            <Link to="/">
              <img className="w-24" src={logo} alt="no" />
            </Link>
          </div>
          <div
            className={`md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
              isMenuOpen
                ? "fixed pl-12 top-[21%] w-full h-52"
                : "hidden md:block"
            } md:w-auto w-full flex items-center px-5 transition-all duration-300 ease-in-out`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[6vw] gap-8">
              <li>
                <Link
                  className="no-underline font-bold"
                  to="/"
                >
                  <div className="flex">
                  <AiFillHome className="mt-1 mr-2" /> 
                  <div>Home</div>
                  </div>
                 
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline font-bold"
                  to="/about"
                >
                  <div className="flex">
                  <AiFillHome className="mt-1 mr-2" /> 
                  <div>About Us</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline  font-bold"
                  to="/services"
                >
                  <div className="flex">
                  <AiFillHome className="mt-1 mr-2" /> 
                  <div>Our Services</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline  font-bold"
                  to="/blogs"
                >
                  <div className="flex">
                  <AiFillHome className="mt-1 mr-2" /> 
                  <div>Calculator</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="no-underline  font-bold"
                  to="/contact"
                >
                  <div className="flex">
                  <AiFillHome className="mt-1 mr-2" /> 
                  <div>Cibil Score</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-white hover:bg-white text-bgclr hover:text-btnclr1 px-2 py-2 rounded-full">
              <Link className="no-underline  font-bold" to="/login">
              <AiOutlineBell size={25} />
              </Link>
            </button>
            <button className="bg-white hover:bg-white text-bgclr hover:text-btnclr1 px-2 py-2 rounded-full">
              <Link className="no-underline  font-bold" to="/login">
              <AiOutlineBell size={25} />
              </Link>
            </button>
            {isMenuOpen ? (
              <AiOutlineClose
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
