import React, { useEffect, useState } from "react";
import logo from "../images/logo1.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiFillHome, AiOutlineBell} from "react-icons/ai";

function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className="bg-bgclr">
        <nav className="flex justify-between h-40 pb-14 items-center w-[92%] pt-10 mx-auto text-white">
          <div>
            <Link to="/">
              <img className="w-32" src={logo} alt="no" />
            </Link>
          </div>
         <div className="text-center">
          <div>
            <h1 className="uppercase font-bold text-3xl">Welcome to anant nidhi private linited</h1>
          </div>
          <div>
            <h1>235, 2nd Floor Opposite Sector-13 Entrance, Modal Town Hear Haryana-125001</h1>
          </div>
          <div>
            <h1>Contact: 0016702702 <span className="pl-6">Email: Infopb77gmail.com</span></h1>
          </div>
          <div>
            <h1>CIN NO. USH2018PC077024</h1>
          </div>
         </div>
          <div className="flex items-center gap-6">
            
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

export default Header2;
