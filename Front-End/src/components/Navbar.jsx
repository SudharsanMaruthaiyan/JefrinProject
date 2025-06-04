import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {token, setToken, userData} = useContext(AppContext);

  const navigate = useNavigate()

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on mobile
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  const logout = ()=>{
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <header className="bg-white/30 backdrop-blur-lg text-white p-4 fixed w-full z-10 top-0 shadow-lg px-4 sm:px-[8%]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black font-[poppins]">John Engineering</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row items-center md:items-start gap-5 font-medium">
            <NavLink to="/" onClick={handleLinkClick}>
              <li className="py-1 text-black font-[poppins] font-medium">Home</li>
            </NavLink>
            <NavLink to="/services" onClick={handleLinkClick}>
              <li className="py-1 text-black font-[poppins] font-medium">Services</li>
            </NavLink>
            <NavLink to="/achievement" onClick={handleLinkClick}>
              <li className="py-1 text-black font-[poppins] font-medium">Achievement</li>
            </NavLink>
            <NavLink to="/gallery" onClick={handleLinkClick}>
              <li className="py-1 text-black font-[poppins] font-medium">Gallery</li>
            </NavLink>
            <NavLink to="/workers" onClick={handleLinkClick}>
              <li className="py-1 text-black font-[poppins] font-medium">Workers</li>
            </NavLink>
            <NavLink to="/contact" onClick={handleLinkClick}>
              <li className="py-1 text-black font-[poppins] font-medium">Contact</li>
            </NavLink>

            {
              token ? <p>Logout</p> :
            <NavLink to="/login" onClick={handleLinkClick}>
              <li className="py-1 text-black font-[poppins] font-medium">Login</li>
            </NavLink>
            }

            {
              token && userData ? <>
                <div className=' flex items-center gap-2 cursor-pointer group relative'>
                    <img className=' w-8 rounded-full' src={userData.image} alt="" />
                    {/* <img className=' w-2.5' src={assets.dropdown_icon} alt="" /> */}
                    <div className=' group-hover:block hidden absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20'>
                      <div className='min-w-48 rounded flex flex-col gap-4 p-4 '>
                          <p onClick={()=> navigate('/my-profile')} className=' hover:text-black cursor-pointer'>My Profile</p>
                          {/* <p onClick={()=> navigate('/my-appointments')} className=' hover:text-black cursor-pointer'>My Appointments</p> */}
                          <p onClick={logout} className=' hover:text-black cursor-pointer'>Logout</p>
                      </div>
                    </div>  
                </div>
              </> : ""
            }

          </ul>

          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
