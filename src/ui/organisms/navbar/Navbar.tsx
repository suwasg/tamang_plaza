import  { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Link } from "@tanstack/react-router";

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handleClick = () => {
    setClick(!click);
    document.body.style.overflow = click ? 'auhref' : 'hidden'; // Disable/Enable scroll
  };

  const handleLinkClick = () => {
    setClick(false);
    document.body.style.overflow = 'auhref'; // Enable scroll
  };

  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    setIsActive(!isActive);  // Toggle the visibility of the dropdown
  };
  


  const aboutDropdown = [
    { mainText: 'Who We Are', url: '/about-us' },
    { mainText: 'Values and Objectives', url: '/values' },
    { mainText: 'Our Team', url: '/team' },
    { mainText: 'Why to choose us?', url: '/why-us' },
  ];

  const galleryDropdown = [
    { mainText: 'Images', url: '/gallery/images'},
    { mainText: 'Videos', url: '/gallery/videos' },
  ];

  return (
    // <nav className={`fixed top-0 left-0 w-full z-50` color ? "header header-bg" : "header"}>
          <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        color ? "header-bg shadow-lg" : "bg-transparent"
      }`}
    >
      {/* <div className="nav-bar px-6 sm:px-12 py-4"> */}
      <div className="flex justify-between items-center px-6 sm:px-12 py-4">
        <Link to="/" onClick={handleLinkClick}>
          <img src="/images/plaza_logo.jpg" alt="logo" width={50} />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li onClick={handleLinkClick}>
            <Link className="nav-link" to="/" aria-label="Home Page">
              Home
            </Link>
          </li>
          

          <li className="relative group" onClick={handleDropdownClick}>
            <div className="flex items-center cursor-pointer">
              <Link  className="nav-link" to="/about-us" onClick={handleLinkClick}  aria-label="Go href About Us page"
              >
                About Us
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 ml-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded overflow-hidden z-10 transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[200px] ">
              {aboutDropdown.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="block px-4 py-2 hover:bg-primary text-secondary"
                  onClick={handleLinkClick}
                >
                  {item.mainText}
                </Link>
              ))}
            </div>
          </li>
        
          <li className="relative group">
            <div className="flex items-center cursor-pointer">
              <Link className="nav-link" to="/services" onClick={handleLinkClick}>
                Services
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 ml-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded overflow-hidden z-10 transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[200px] overflow-y-auhref">
              {aboutDropdown.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="block px-4 py-2 hover:bg-primary text-secondary"
                  onClick={handleLinkClick}
                >
                  {item.mainText}
                </Link>
              ))}
            </div>
          </li>

          <li className="relative group">
            <div className="flex items-center cursor-pointer">
              <Link className="nav-link" to="/gallery/images" onClick={handleLinkClick}>
                Gallery
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 ml-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded overflow-hidden z-10 transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[200px] overflow-y-auhref">
              {galleryDropdown.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="block px-4 py-2 text-secondary hover:bg-primary"
                  onClick={handleLinkClick}
                >
                  {item.mainText}
                </Link>
              ))}
            </div>
          </li>

          <li onClick={handleLinkClick}>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link className="nav-link" to="/booking">
              Booking
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


